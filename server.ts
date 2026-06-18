import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";
import { categories, cartoons, portraits, footballers, combos, premiumGear } from "./src/data.js";

// Combine all products for easy querying
const allProducts = [
  ...categories,
  ...cartoons,
  ...portraits,
  ...footballers,
  ...combos,
  ...premiumGear
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Initialize MCP Server
  const mcpServer = new McpServer({
    name: "Tinta-y-Papel-Store",
    version: "1.0.0"
  });

  // Define tools for Claude
  mcpServer.tool(
    "get_store_info",
    "Get general information about the store and what it sells",
    {},
    async () => {
      return {
        content: [{
          type: "text",
          text: `Bienvenido a la tienda de Tinta y Papel. Vendemos cuadros personalizados, tazas y camisetas con diseños únicos. Nuestras categorías incluyen Anime, Caricaturas, Retratos personalizados, y Futbolistas. También ofrecemos Combos (como Cuadro + Camisa + Taza).

Los precios base de los cuadros individuales según tamaño son:
- 10x15 cm: ₡3,000
- 20x15 cm: ₡4,500
- 20x30 cm: ₡6,000
- 60x40 cm: Agotado

Los combos tienen precios fijos que varían desde ₡6,000 hasta ₡20,000.`
        }]
      };
    }
  );

  mcpServer.tool(
    "list_products",
    "List all available products in the store by category",
    {
      category: z.enum(["animes", "cartoons", "portraits", "footballers", "combos", "premium"]).optional()
    },
    async ({ category }) => {
      let productsToFormat = allProducts;
      
      if (category === "animes") productsToFormat = categories;
      else if (category === "cartoons") productsToFormat = cartoons;
      else if (category === "portraits") productsToFormat = portraits;
      else if (category === "footballers") productsToFormat = footballers;
      else if (category === "combos") productsToFormat = combos;
      else if (category === "premium") productsToFormat = premiumGear;

      const formatted = productsToFormat.map(p => `- ${p.name}: ${p.price}\n  Description: ${p.description}`).join("\n\n");

      return {
        content: [{
          type: "text",
          text: `Products${category ? ` in category ${category}` : ''}:\n\n${formatted}`
        }]
      };
    }
  );

  mcpServer.tool(
    "search_product",
    "Search for a specific product by name",
    {
      query: z.string().describe("The name or partial name of the product")
    },
    async ({ query }) => {
      const q = query.toLowerCase();
      const results = allProducts.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
      
      if (results.length === 0) {
        return {
          content: [{ type: "text", text: `No products found matching "${query}".` }]
        };
      }

      const formatted = results.map(p => `- ${p.name}: ${p.price}\n  Sizes: ${p.sizes.join(", ")}\n  Description: ${p.description}`).join("\n\n");
      
      return {
        content: [{
          type: "text",
          text: `Found ${results.length} products:\n\n${formatted}`
        }]
      };
    }
  );

  let transport: SSEServerTransport;

  // MCP GET Endpoint for SSE Connection
  app.get("/mcp", async (req, res) => {
    transport = new SSEServerTransport("/mcp/messages", res);
    await mcpServer.connect(transport);
  });

  // MCP POST Endpoint for routing messages
  app.post("/mcp/messages", express.json(), async (req, res) => {
    if (!transport) {
      return res.status(400).send("No valid MCP SSE connection exists.");
    }
    await transport.handlePostMessage(req, res);
  });

  // Provide Info Page for Claude Configuration
  app.get("/mcp/config", (req, res) => {
    const host = req.get('host');
    const protocol = req.protocol || 'https';
    const serverUrl = `${protocol}://${host}`;
    
    res.json({
      "mcpServers": {
        "store-server": {
          "command": "node",
          "args": ["(You usually cannot use SSE directly in Claude Desktop without a proxy tool, but this is your SSE endpoint: " + serverUrl + "/mcp)"],
          "sseEndpoint": `${serverUrl}/mcp`
        }
      }
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
