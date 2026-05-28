/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  X, 
  User, 
  Tag, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Globe, 
  Award, 
  Cpu, 
  Database, 
  Check, 
  Layers, 
  Flame, 
  TrendingUp, 
  Star, 
  MessageSquare, 
  MessageCircle,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface Product {
  name: string;
  img: string;
  imgs?: string[];
  price: string;
  description: string;
  sizes: string[];
  creator: string;
}

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cartoonsScrollRef = useRef<HTMLDivElement>(null);
  const portraitsScrollRef = useRef<HTMLDivElement>(null);
  const relatedScrollRef = useRef<HTMLDivElement>(null);
  const footballersScrollRef = useRef<HTMLDivElement>(null);
  const combosScrollRef = useRef<HTMLDivElement>(null);
  const catalogScrollY = useRef<number>(0);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('10x15 cm');
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState<number>(0);
  const [purchaseQuantity, setPurchaseQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [activeInfoTab, setActiveInfoTab] = useState<'desc' | 'smart' | 'reviews'>('desc');
  const [showPromo, setShowPromo] = useState<boolean>(true);

  const handleProductClick = (product: Product) => {
    catalogScrollY.current = window.scrollY;
    setSelectedProduct(product);
    setSelectedSize('10x15 cm');
    setIsSizeDropdownOpen(false);
    setIsPurchaseSuccessful(false);
    setActiveThumbnailIndex(0);
    setPurchaseQuantity(1);
    setIsWishlisted(false);
    setActiveInfoTab('desc');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 10);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollCartoonsLeft = () => {
    if (cartoonsScrollRef.current) {
      cartoonsScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollCartoonsRight = () => {
    if (cartoonsScrollRef.current) {
      cartoonsScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollPortraitsLeft = () => {
    if (portraitsScrollRef.current) {
      portraitsScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollPortraitsRight = () => {
    if (portraitsScrollRef.current) {
      portraitsScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollRelatedLeft = () => {
    if (relatedScrollRef.current) {
      relatedScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRelatedRight = () => {
    if (relatedScrollRef.current) {
      relatedScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };


  const scrollFootballersLeft = () => {
    if (footballersScrollRef.current) {
      footballersScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollFootballersRight = () => {
    if (footballersScrollRef.current) {
      footballersScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollCombosLeft = () => {
    if (combosScrollRef.current) {
      combosScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollCombosRight = () => {
    if (combosScrollRef.current) {
      combosScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Dual-state for seamless crossfading background video (eliminating black transition screens)
  const [activeTab, setActiveTab] = useState(0);
  const [key0, setKey0] = useState(0);
  const [key1, setKey1] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab(prev => {
        const next = prev === 0 ? 1 : 0;
        // Warm up and refresh the inactive video 1000ms after fade out has completed
        if (next === 1) {
          setTimeout(() => setKey0(k => k + 2), 1000);
        } else {
          setTimeout(() => setKey1(k => k + 2), 1000);
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Data arrays
  const categories: Product[] = [
    { 
      name: 'Cyber Samurai', 
      img: 'https://i.imgur.com/Y8Hr8Gq.jpeg',
      imgs: ['https://i.imgur.com/Y8Hr8Gq.jpeg', 'https://i.imgur.com/WSOuPxJ.jpeg'],
      price: '0.85 ETH',
      description: 'A masterless warrior armed with plasma katanas. This piece represents the clash of feudal ideals and futuristic augmentation in Neo-Tokyo.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
      creator: 'Sato_K'
    },
    { 
      name: 'Neon Geisha', 
      img: 'https://i.imgur.com/uGgpRrV.jpeg',
      imgs: ['https://i.imgur.com/uGgpRrV.jpeg', 'https://i.imgur.com/yT55bld.jpeg'],
      price: '0.95 ETH',
      description: 'Hypnotizing colors crafted with procedural shaders. This digital art piece embodies high neon light reflections on interactive augmented skin.',
      sizes: ['UHD Wallpaper', 'Animated MP4 Loop', 'HTML Custom WebGL'],
      creator: 'Aiko_Procedural'
    },
    { 
      name: 'Synthwave Skyline', 
      img: 'https://i.imgur.com/nsaggoZ.jpeg',
      imgs: ['https://i.imgur.com/nsaggoZ.jpeg', 'https://i.imgur.com/nPrdqgJ.jpeg'],
      price: '0.65 ETH',
      description: 'A nostalgic look into retro-futurism. Witness sunset glows over endless glowing neon skyscrapers pulsing to standard 80s synth bass lines.',
      sizes: ['UHD Wallpaper', 'Original Vector', 'Animated MP4 Loop'],
      creator: 'RetroVibe_Art'
    },
    { 
      name: 'Cyber Valkyrie', 
      img: 'https://i.imgur.com/5VvdYLi.jpeg',
      imgs: ['https://i.imgur.com/5VvdYLi.jpeg', 'https://i.imgur.com/07tSGL5.jpeg'],
      price: '1.10 ETH',
      description: 'A cybernetically enhanced elite protector equipped with sensory holographic visors, patrolling the high-altitude mainframe sectors of Neo-Tokyo.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
      creator: 'Kusanagi_Studio'
    },
    { 
      name: 'Glitch Phantom', 
      img: 'https://i.imgur.com/2qxNHAd.jpeg',
      imgs: ['https://i.imgur.com/2qxNHAd.jpeg', 'https://i.imgur.com/mZfAAaz.jpeg'],
      price: '1.15 ETH',
      description: 'A spectral manifestation of rogue AI within neural network sectors. The phantom drifts between reality and digital static, armed with phase daggers.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
      creator: 'Kusanagi_Studio'
    },
    { 
      name: 'Neon Rebel', 
      img: 'https://i.imgur.com/1thnEpD.jpeg',
      imgs: ['https://i.imgur.com/1thnEpD.jpeg', 'https://i.imgur.com/fX8CfdP.jpeg'],
      price: '1.25 ETH',
      description: 'A rebellious hacker from the underground districts of Neo-Tokyo, donning high-conduit neural cyberware and a custom glowing visor.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
      creator: 'Kusanagi_Studio'
    },
    { 
      name: 'Prism Shogun', 
      img: 'https://i.imgur.com/rcJ8m29.jpeg',
      imgs: ['https://i.imgur.com/rcJ8m29.jpeg', 'https://i.imgur.com/wXof8Xs.jpeg'],
      price: '1.30 ETH',
      description: 'An ancient warrior mechanized with a spectrum-shifting exoskeleton, wielding multi-wavelength energy sabers to defend the core network.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
      creator: 'Kusanagi_Studio'
    },
    { 
      name: 'Mecha Core', 
      img: 'https://i.imgur.com/yaAUNkD.jpeg',
      imgs: ['https://i.imgur.com/yaAUNkD.jpeg', 'https://i.imgur.com/m3BxPIp.jpeg'],
      price: '1.20 ETH',
      description: 'Engineering blueprint visualization of the high-agility core armor module. Guaranteed to include uncompressed CAD renders and layer details.',
      sizes: ['Original Vector', '3D GLB Model', 'Blueprint PDF'],
      creator: 'H0L0_Mech'
    },
    { 
      name: 'Apex Sentinel', 
      img: 'https://i.imgur.com/cVGQznb.jpeg',
      imgs: ['https://i.imgur.com/cVGQznb.jpeg', 'https://i.imgur.com/bew9f6Y.jpeg'],
      price: '1.40 ETH',
      description: 'A vigilant high-tech guardian from the cybernetic elite force, protecting private corporate databanks against incoming netrunner intrusions.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
      creator: 'Kusanagi_Studio'
    },
  ];

  const cartoons: Product[] = [
    { 
      name: 'Cyber Toon', 
      img: 'https://i.imgur.com/hCtzqkU.jpeg',
      imgs: ['https://i.imgur.com/hCtzqkU.jpeg', 'https://i.imgur.com/f6JeQfS.jpeg'],
      price: '0.45 ETH',
      description: 'Cheerful cartoon aesthetics wrapped in neon cybernetic layers. A dynamic collision between retro hand-drawn frames and procedural abstract elements.',
      sizes: ['Low-Res Preview', 'UHD Wallpaper', 'Vector Master'],
      creator: 'BubblePop_Studio'
    },
    { 
      name: 'Neon Retro', 
      img: 'https://i.imgur.com/V5CNQbP.jpeg',
      imgs: ['https://i.imgur.com/V5CNQbP.jpeg', 'https://i.imgur.com/ge9nhcY.jpeg'],
      price: '0.70 ETH',
      description: 'Surreal expressionist digital painting. Bright color strokes that pop right out of dark screen spaces, creating an everlasting visual mood.',
      sizes: ['UHD Wallpaper', 'Original Layer File (PSD)'],
      creator: 'PixelMuse'
    },
    { 
      name: 'Pop Bubblegum', 
      img: 'https://i.imgur.com/NcKj35g.jpeg',
      imgs: ['https://i.imgur.com/NcKj35g.jpeg', 'https://i.imgur.com/qxaW8yD.jpeg'],
      price: '0.50 ETH',
      description: 'Liquid 3D chrome balloon structures under warm lighting setups. Perfect for modern design mockups and display posters.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model'],
      creator: 'SlickRender'
    },
    { 
      name: 'Cosmic Duck', 
      img: 'https://i.imgur.com/Jzyebi0.jpeg',
      imgs: ['https://i.imgur.com/Jzyebi0.jpeg', 'https://i.imgur.com/8oudePH.jpeg'],
      price: '0.62 ETH',
      description: 'The galactic fowl wandering through infinite stellar clouds. Imbues your digital gallery with a cosmic cartoon mascot energy.',
      sizes: ['UHD Wallpaper', 'Animated MP4 Loop', 'Animated GIF Layer'],
      creator: 'AstroDuck'
    },
    { 
      name: 'Graffiti Tag', 
      img: 'https://i.imgur.com/BdxfMTf.jpeg',
      imgs: ['https://i.imgur.com/BdxfMTf.jpeg', 'https://i.imgur.com/kzm4XH5.jpeg'],
      price: '0.38 ETH',
      description: 'Vandals on the blockchain. High-impact neon street art styled spray drips that interact dynamically with background page lighting.',
      sizes: ['UHD Wallpaper', 'Original JPEG Master'],
      creator: 'BlockGraf'
    },
    { 
      name: 'Arcade Vision', 
      img: 'https://i.imgur.com/ILbS2UB.jpeg',
      imgs: ['https://i.imgur.com/ILbS2UB.jpeg', 'https://i.imgur.com/El5KZ2F.jpeg'],
      price: '0.88 ETH',
      description: 'Retrogaming cabinet illuminated under digital vaporwave aesthetic. Optimized for gaming setup displays and retro collector showcases.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
      creator: 'VaporDave'
    },
  ];

  const portraits: Product[] = [
    {
      name: 'Cyberpunk Geisha',
      img: 'https://i.imgur.com/zoaHw7T.jpeg',
      imgs: ['https://i.imgur.com/zoaHw7T.jpeg'],
      price: '1.45 ETH',
      description: 'An elegant synthesis of biological grace and chrome plating. Features hand-painted digital realism enhanced with cybernetic visual elements.',
      sizes: ['UHD Wallpaper', 'Original RAW File', '3D Face Filter'],
      creator: 'Hana_Cyber'
    },
    {
      name: 'Elder Samurai',
      img: 'https://i.imgur.com/67vJT2J.jpeg',
      imgs: ['https://i.imgur.com/67vJT2J.jpeg'],
      price: '1.10 ETH',
      description: 'A close-up high-contrast face portrait showcasing wisdom, scars, and mechanical optical enhancements. A masterclass in digital storytelling.',
      sizes: ['UHD Wallpaper', 'Hi-Res PSD Layers'],
      creator: 'Ren_Shogun'
    },
    {
      name: 'Vibrancy Queen',
      img: 'https://i.imgur.com/2intjp0.jpeg',
      imgs: ['https://i.imgur.com/2intjp0.jpeg'],
      price: '0.90 ETH',
      description: 'A striking hyper-realistic portrait styled with neon splash paints and glowing jewelry. Captures a soulful expression reflecting digital divinity.',
      sizes: ['UHD Wallpaper', 'Original Vector Art', 'Digital Master Print'],
      creator: 'Aya_Neon'
    },
    {
      name: 'Synth Explorer',
      img: 'https://i.imgur.com/JBIRdGH.jpeg',
      imgs: ['https://i.imgur.com/JBIRdGH.jpeg'],
      price: '0.99 ETH',
      description: 'Portrait of an astronaut reflecting glowing cosmic formations across their golden helmet visor. Deep atmospheric lighting and incredible microdetails.',
      sizes: ['UHD Wallpaper', 'Animated High-Fi MP4'],
      creator: 'Galaxy_Walker'
    },
    {
      name: 'Midnight Rogue',
      img: 'https://i.imgur.com/9WR6llV.jpeg',
      imgs: ['https://i.imgur.com/9WR6llV.jpeg'],
      price: '0.75 ETH',
      description: 'A sleek portrait of a digital netrunner shrouded in holographic HUD elements. Perfect for profile picture avatars and high-end digital galleries.',
      sizes: ['UHD Wallpaper', 'Avatar Asset Pack'],
      creator: 'Link_0x'
    }
  ];


  const footballers: Product[] = [
    {
      name: 'Golden Champion',
      img: 'https://i.imgur.com/NytcsxW.jpeg',
      imgs: ['https://i.imgur.com/NytcsxW.jpeg', 'https://i.imgur.com/Uk8lxoF.jpeg'],
      price: '1.35 ETH',
      description: 'Un atleta envuelto en ráfagas de energía dorada al momento de patear el balón hacia la victoria celeste en estadios repletos.',
      sizes: ['UHD Wallpaper', 'Hyper-Res Master', 'Animated Poster'],
      creator: 'Striker_Design'
    },
    {
      name: 'Neon Playmaker',
      img: 'https://i.imgur.com/UjMrWo5.jpeg',
      imgs: ['https://i.imgur.com/UjMrWo5.jpeg', 'https://i.imgur.com/ILAM0HM.jpeg'],
      price: '1.15 ETH',
      description: 'El cerebro del mediocampo analizado por inteligencia artificial en tiempo real. Redes neuronales y estelares dibujan sus pases perfectos.',
      sizes: ['UHD Wallpaper', 'Original Vector', '3D Asset Pack'],
      creator: 'Tactical_AI'
    },
    {
      name: 'Cyber Goalkeeper',
      img: 'https://i.imgur.com/kAXFfXi.jpeg',
      imgs: ['https://i.imgur.com/kAXFfXi.jpeg', 'https://i.imgur.com/PcNVxls.jpeg'],
      price: '1.25 ETH',
      description: 'El guardián cibernético estirándose al límite en una atmósfera lluviosa rodeado de hologramas deflector de goles.',
      sizes: ['UHD Wallpaper', 'Original Layer File (PSD)', 'Premium Canvas'],
      creator: 'Wall_Shield'
    },
    {
      name: 'Stadium Phantom',
      img: 'https://i.imgur.com/1jdcVCc.jpeg',
      imgs: ['https://i.imgur.com/1jdcVCc.jpeg', 'https://i.imgur.com/QdQYNse.jpeg'],
      price: '1.50 ETH',
      description: 'La silueta mística de un delantero de leyenda, cruzando la cancha a la velocidad de un haz de luz láser y descolocando defensas.',
      sizes: ['UHD Wallpaper', 'Animated High-Fi MP4', '3D GLB Model'],
      creator: 'Kusanagi_Studio'
    },
    {
      name: 'Glitch Striker',
      img: 'https://i.imgur.com/w83m4NR.jpeg',
      imgs: ['https://i.imgur.com/w83m4NR.jpeg', 'https://i.imgur.com/VQQc5Ju.jpeg'],
      price: '1.40 ETH',
      description: 'El delantero definitivo, fusionando velocidad cibernética y agilidad sobrehumana bajo luces de estadio holográficas.',
      sizes: ['UHD Wallpaper', 'Original RAW File', '3D Model Pack'],
      creator: 'Apex_Tactics'
    }
  ];

  const combos: Product[] = [
    {
      name: 'Neo-Tokyo Legends Pack',
      img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
      imgs: [
        'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
        'https://i.imgur.com/Y8Hr8Gq.jpeg',
        'https://i.imgur.com/uGgpRrV.jpeg',
        'https://i.imgur.com/5VvdYLi.jpeg'
      ],
      price: '₡18,000',
      description: 'El combo definitivo que reúne a los personajes más icónicos de Neo-Tokyo: Cyber Samurai, Neon Geisha y Cyber Valkyrie. Incluye todos los archivos fuentes vectoriales originales y modelos 3D listos para renderizar de forma profesional en alta gama.',
      sizes: ['Full Bundle Pack (All Assets)', 'Source Files ZIP', 'Commercial Print License'],
      creator: 'Studio_K_Complete'
    },
    {
      name: 'Genesis Masterpieces Combo',
      img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
      imgs: [
        'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
        'https://i.imgur.com/nsaggoZ.jpeg',
        'https://i.imgur.com/1thnEpD.jpeg',
        'https://i.imgur.com/rcJ8m29.jpeg'
      ],
      price: '₡15,000',
      description: 'Colección profesional que agrupa el arte de corte transversal entre el mundo análogo y digital. Contiene Synthwave Skyline, Neon Rebel y Prism Shogun, con licencias extendidas oficiales para uso comercial y exhibiciones artísticas en museos físicos o virtuales.',
      sizes: ['Ultra High-Quality Bundle', 'Extended License & RAWs', 'Custom Certificate of Authenticity'],
      creator: 'Kusanagi_Studio'
    },
    {
      name: 'Cyber Athlete & Rogue Combo',
      img: 'https://images.unsplash.com/photo-1580234810907-b40315b76418?w=800&auto=format&fit=crop&q=80',
      imgs: [
        'https://images.unsplash.com/photo-1580234810907-b40315b76418?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&auto=format&fit=crop&q=80',
        'https://i.imgur.com/2qxNHAd.jpeg'
      ],
      price: '₡20,000',
      description: 'Este paquete premium combina la alta tensión deportiva de Stadium Phantom con la astucia clandestina de Glitch Phantom. Obtén acceso inmediato a todos los materiales de diseño de última generación, texturas 4K exóticas y pistas de música de ambiente complementarias.',
      sizes: ['Dual Premium Bundle', 'Developer Full kit', '4K Textures & Rigs'],
      creator: 'Elite_Collusion'
    }
  ];

  const premiumGear: Product[] = [
    {
      name: 'TAZA + CUADRO + CAMISA',
      img: 'https://i.imgur.com/aAFDkK9.jpeg',
      imgs: [
        'https://i.imgur.com/aAFDkK9.jpeg'
      ],
      price: '₡12,000',
      description: 'Mochila de cuero de primera calidad diseñada para el viaje urbano diario. Fabricada artesanalmente con piel de flor entera curtida al vegetal, cuenta con compartimentos acolchados interiores de fácil acceso y cierres de latón pulido.',
      sizes: ['S / Daily Commuter', 'M / Weekend Explorer'],
      creator: 'Atelier Noir'
    },
    {
      name: 'TAZA + CAMISA',
      img: 'https://i.imgur.com/6gTAZ7p.jpeg',
      imgs: [
        'https://i.imgur.com/6gTAZ7p.jpeg'
      ],
      price: '₡6,000',
      description: 'Gafas de sol de diseño contemporáneo y montura de acetato curado a mano. Equipadas con lentes polarizados de alta precisión con protección UV400 completa ante los rayos directos del sol.',
      sizes: ['Standard Fit', 'Wide Fit'],
      creator: 'Monocle Studio'
    },
    {
      name: 'CUADRO + CAMISA',
      img: 'https://i.imgur.com/tbiatAd.jpeg',
      imgs: [
        'https://i.imgur.com/tbiatAd.jpeg'
      ],
      price: '₡9,000',
      description: 'Juego de cerámica minimalista que incluye canica difusora de fragancias, tazón orgánico de doble pared y platillo para té. Modelado a mano con arcilla de gres de origen natural.',
      sizes: ['Complete Set', 'Ceramic Carafe Only'],
      creator: 'Sora Ceramics'
    }
  ];

  if (selectedProduct) {
    const productImages = selectedProduct.imgs || [selectedProduct.img];
    const currentImage = productImages[activeThumbnailIndex] || selectedProduct.img;

    const isCombo = premiumGear.some(p => p.name === selectedProduct.name) || combos.some(p => p.name === selectedProduct.name);

    let basePrice = 3000;
    let isSoldOut = false;
    
    if (isCombo) {
      basePrice = parseInt(selectedProduct.price.replace(/[^0-9]/g, ''), 10) || 3000;
    } else if (selectedSize === '10x15 cm') {
      basePrice = 3000;
    } else if (selectedSize === '20x15 cm') {
      basePrice = 4500;
    } else if (selectedSize === '20x30 cm') {
      basePrice = 6000;
    } else if (selectedSize === '60x40 cm') {
      isSoldOut = true;
    }

    const priceNum = basePrice * purchaseQuantity;
    const originalPriceNum = Math.round(basePrice / 0.6) * purchaseQuantity;

    const formatPrice = (value: number) => {
      return `₡${value.toLocaleString('en-US')}`;
    };

    const totalPriceUSD = isSoldOut ? 'Agotado' : formatPrice(priceNum);
    const originalPriceUSD = isCombo ? '' : (isSoldOut ? '' : formatPrice(originalPriceNum));

    // Interactive rendering filters as elegant corporate studio previews
    const getThumbnailStyle = (index: number) => {
      switch (index) {
        case 1: // Charcoal sketch render
          return { filter: 'grayscale(100%) contrast(140%) brightness(105%) shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]' };
        case 2: // Soft gallery warm light render
          return { filter: 'sepia(12%) saturate(120%) brightness(102%) contrast(105%)' };
        case 3: // Macro detail closeup
          return { transform: 'scale(1.45)', transformOrigin: 'center center' };
        default: // Original
          return {};
      }
    };

    const getThumbnailLabel = (index: number) => {
      switch (index) {
        case 0: return 'Vista de Estudio';
        case 1: return 'Boceto a Lápiz';
        case 2: return 'Iluminación Cálida';
        case 3: return 'Detalle de Textura';
        default: return 'Vista del Activo';
      }
    };

    const getRelatedProducts = () => {
      if (categories.some(p => p.name === selectedProduct.name)) return categories;
      if (cartoons.some(p => p.name === selectedProduct.name)) return cartoons;
      if (portraits.some(p => p.name === selectedProduct.name)) return portraits;
      if (footballers.some(p => p.name === selectedProduct.name)) return footballers;
      if (combos.some(p => p.name === selectedProduct.name)) return combos;
      if (premiumGear.some(p => p.name === selectedProduct.name)) return premiumGear;
      return [];
    };

    return (
      <div className="min-h-screen bg-[#08080A] font-sans text-neutral-100 overflow-x-hidden relative selection:bg-neutral-800 selection:text-white">
        
        {/* Subtle Luxury Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-black to-transparent" />
          <div className="absolute top-0 left-[-10%] w-[120%] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)] filter blur-[50px]" />
        </div>

        {/* Global Responsive Padding Container */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 pb-20 pt-4">
          
          {/* Back Navigation */}
          <nav className="py-4 md:py-6 border-b border-white/5 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
              <button 
                onClick={() => {
                  setSelectedProduct(null);
                  setTimeout(() => {
                    window.scrollTo({ top: catalogScrollY.current, behavior: 'instant' });
                  }, 10);
                }}
                className="group flex items-center gap-2 self-start px-4 py-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-medium tracking-wider border border-white/5 transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                <span>VOLVER AL CATÁLOGO</span>
              </button>
            </div>
          </nav>

          {/* Core Master Grid: 12-column layout tailored for mobile & desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* LEFT SIDE: Rounded Premium Image Frame */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Main Showcase Container (Completely Square, No Circular Radii, No Animation) */}
              <div className="relative aspect-square w-full rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 bg-neutral-950">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                
                {/* Image render wrapper */}
                <div className="w-full h-full overflow-hidden flex items-center justify-center relative z-0 rounded-none">
                  <img 
                    src={currentImage} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>
              </div>

              {/* Square thumbnails if multiple images are available, completely square and clean */}
              {productImages.length > 1 && (
                <div className="flex gap-3">
                  {productImages.map((imgSrc, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveThumbnailIndex(index);
                        setIsPurchaseSuccessful(false);
                      }}
                      className={`w-20 h-20 relative rounded-none overflow-hidden border cursor-pointer transition-colors duration-200 ${
                        activeThumbnailIndex === index
                          ? 'border-white bg-white/5'
                          : 'border-white/10 hover:border-white/20 bg-neutral-950/40'
                      }`}
                    >
                      <img 
                        src={imgSrc} 
                        alt={`${selectedProduct.name} View ${index}`}
                        className="w-full h-full object-cover rounded-none"
                      />
                    </button>
                  ))}
                </div>
              )}

            </div>

            {/* RIGHT SIDE: Elegant Enterprise Product Form (Clean details, price panel, select size) */}
            <div className="lg:col-span-6 flex flex-col text-left gap-5">
              
              {/* Product Header Name & Rating */}
              <div>
                <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white mb-2">
                  {selectedProduct.name}
                </h1>
                
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <div className="flex items-center text-amber-500">
                    <Star size={13} className="fill-current" />
                    <Star size={13} className="fill-current" />
                    <Star size={13} className="fill-current" />
                    <Star size={13} className="fill-current" />
                    <Star size={13} className="fill-current" />
                    <span className="text-neutral-200 font-bold ml-1.5">4.9</span>
                  </div>
                  <span className="text-neutral-700">|</span>
                  <span className="hover:text-neutral-200 cursor-pointer transition-colors text-xs">+1,000 Clientes Satisfechos</span>
                </div>
              </div>

              {/* Minimal Pristine Pricing Panel */}
              <div className="flex flex-wrap items-baseline gap-3 py-2">
                <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {totalPriceUSD}
                </span>
                <span className="text-sm sm:text-base text-neutral-500 line-through font-normal">
                  {originalPriceUSD}
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2.5 py-0.5 ml-1 rounded-full">
                  Ahorra 40%
                </span>
              </div>

              {/* SELECT FORMAT CUSTOM DROPDOWN (Highly polished professional dropdown) */}
              {!isCombo && (
                <div className="flex flex-col gap-2.5 mt-2 relative">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[10px] uppercase tracking-widest font-black text-neutral-400">
                      TAMAÑOS DISPONIBLES
                    </h3>
                  </div>
                  
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
                      className="w-full flex items-center justify-between bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 rounded-2xl px-5 py-4 text-left transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md hover:shadow-2xl active:scale-[0.99] group/trigger"
                      id="size-dropdown-trigger"
                    >
                      <div className="flex flex-col">
                        <span className="text-[9px] text-neutral-500 font-extrabold uppercase tracking-widest mb-1">
                          Tamaño Seleccionado
                        </span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm font-extrabold text-white tracking-wide">
                            {selectedSize}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <ChevronDown 
                          size={18} 
                          className={`text-neutral-400 transition-transform duration-300 group-hover/trigger:text-white ${isSizeDropdownOpen ? 'rotate-180 text-white' : ''}`} 
                        />
                      </div>
                    </button>

                    {/* Dropdown Options List */}
                    {isSizeDropdownOpen && (
                      <>
                        {/* Click overlay to close dropdown */}
                        <div 
                          className="fixed inset-0 z-20 cursor-default" 
                          onClick={() => setIsSizeDropdownOpen(false)} 
                        />
                        <div className="absolute left-0 right-0 mt-3 z-30 bg-[#0E0E11]/95 border border-neutral-800/80 rounded-2xl p-1.5 overflow-hidden shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200">
                          {['10x15 cm', '20x15 cm', '20x30 cm', '60x40 cm'].map((size) => {
                            const isSizeSoldOut = size === '60x40 cm';
                            const isSelected = selectedSize === size;
                            
                            let sizeLabel = '';
                            let subtitle = '';
                            if (size === '10x15 cm') {
                              sizeLabel = '₡3,000';
                              subtitle = 'Tamaño estándar para marcos medianos o escritorios';
                            }
                            if (size === '20x15 cm') {
                              sizeLabel = '₡4,500';
                              subtitle = 'Formato intermedio de gran densidad de color';
                            }
                            if (size === '20x30 cm') {
                              sizeLabel = '₡6,000';
                              subtitle = 'Formato galería ideal para exhibiciones de autor';
                            }
                            if (size === '60x40 cm') {
                              sizeLabel = 'Agotado';
                              subtitle = 'Impresión de gran escala gigante agotada';
                            }

                            return (
                              <button
                                key={size}
                                type="button"
                                disabled={isSizeSoldOut}
                                onClick={() => {
                                  setSelectedSize(size);
                                  setIsSizeDropdownOpen(false);
                                  setIsPurchaseSuccessful(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl mb-1 last:mb-0 text-left transition-all duration-150 ${
                                  isSizeSoldOut
                                    ? 'opacity-35 bg-neutral-900/10 cursor-not-allowed text-neutral-500'
                                    : isSelected
                                    ? 'bg-[#ff4b4b]/12 text-white font-medium hover:bg-[#ff4b4b]/18'
                                    : 'text-neutral-300 hover:bg-neutral-800/40 hover:text-white cursor-pointer'
                                }`}
                              >
                                <div className="flex flex-col mr-4">
                                  <span className={`text-xs font-bold flex items-center gap-1.5 ${isSelected ? 'text-[#ff4b4b]' : 'text-white'}`}>
                                    {size}
                                    {isSelected && <Check size={14} className="text-[#ff4b4b] stroke-[3]" />}
                                  </span>
                                  <span className={`text-[10px] mt-0.5 ${isSizeSoldOut ? 'text-neutral-600' : 'text-neutral-400'}`}>
                                    {subtitle}
                                  </span>
                                </div>
                                <span className={`text-[9px] font-bold uppercase tracking-wider shrink-0 px-2.5 py-1 rounded-lg ${
                                  isSizeSoldOut 
                                    ? 'text-neutral-500 bg-neutral-900/40 border border-neutral-800' 
                                    : isSelected 
                                    ? 'text-[#ff4b4b] bg-[#ff4b4b]/10 border border-[#ff4b4b]/20' 
                                    : 'text-neutral-400 bg-neutral-900/30'
                                }`}>
                                  {isSizeSoldOut ? 'Agotado' : 'Disponible'}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons Line: Quantity control, Checkout buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-2 p-1.5">
                
                {/* Quantity adjustments */}
                <div className={`flex items-center justify-between border border-neutral-800 bg-neutral-900/60 rounded-lg w-full sm:w-auto self-stretch transition-opacity ${isSoldOut ? 'opacity-40 pointer-events-none' : ''}`}>
                  <button
                    onClick={() => {
                      if (purchaseQuantity > 1) {
                        setPurchaseQuantity(prev => prev - 1);
                        setIsPurchaseSuccessful(false);
                      }
                    }}
                    className="px-4 py-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800/80 rounded-l-lg font-medium transition-colors disabled:opacity-25"
                    disabled={purchaseQuantity <= 1 || isSoldOut}
                  >
                    -
                  </button>
                  <span className="px-5 font-mono font-bold text-sm text-neutral-200">
                    {purchaseQuantity}
                  </span>
                  <button
                    onClick={() => {
                      if (purchaseQuantity < 10) {
                        setPurchaseQuantity(prev => prev + 1);
                        setIsPurchaseSuccessful(false);
                      }
                    }}
                    className="px-4 py-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800/80 rounded-r-lg font-medium transition-colors"
                    disabled={isSoldOut}
                  >
                    +
                  </button>
                </div>

                {/* Main Action Buttons */}
                <div className="flex items-center gap-2.5 w-full sm:flex-1">
                  
                  {/* Corporate Call To Action */}
                  {isSoldOut ? (
                    <button
                      disabled
                      className="flex-1 px-6 py-3 rounded-lg text-sm font-semibold bg-neutral-800 text-neutral-500 border border-neutral-700 cursor-not-allowed flex items-center justify-center"
                    >
                      Agotado
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/50663663252?text=${encodeURIComponent(
                        isCombo
                          ? `Hola, me interesa comprar Combo: ${selectedProduct.name} | Cantidad: ${purchaseQuantity} | Precio: ${totalPriceUSD}`
                          : `Hola, me interesa comprar: ${selectedProduct.name} | Tamaño/Formato: ${selectedSize} | Cantidad: ${purchaseQuantity} | Precio: ${selectedProduct.price}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-[#ff4b4b] hover:bg-[#e03a3a] text-white border-none"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>REALIZAR PEDIDO</span>
                    </a>
                  )}

                </div>

              </div>

              {/* Core Description Text */}
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mt-2 border-t border-white/5 pt-4">
                {selectedProduct.description} Activo digital de alta gama renderizado en ultra alta resolución (300 DPI), optimizado para impresión comercial, su uso en entornos corporativos o su preservación en catálogos de arte digital personalizado.
              </p>

            </div>

          </div>

          {/* TRUST PILLARS (Clean corporate styling, matching Beauty Shop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 py-8 border-t border-b border-white/5">
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-[#ff4b4b] rounded-xl flex items-center justify-center shrink-0">
                <Globe size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-1">
                  Entrega Inmediata
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Descarga tus activos licenciados al instante desde la pasarela privada de distribución original.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-[#ff4b4b] rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-1">
                  Transacción Verificada
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Toda la metadata del creador original se registra con su sello digital para garantizar la autoría del retrato.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-[#ff4b4b] rounded-xl flex items-center justify-center shrink-0">
                <Award size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-1">
                  Soporte al Creador
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Cada licencia adquirida financia directamente al creador del retrato o diseño, sin intermediación de terceros.
                </p>
              </div>
            </div>
          </div>

          {/* RELATED PRODUCTS */}
          <div className="mt-16">
            <div className="mb-8 text-left">
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-white">
                Explorar Retratos Relacionados
              </h3>
            </div>
            
            <div className="relative group/slider-related">
              {/* Navigation Arrows */}
              <button 
                onClick={scrollRelatedLeft}
                className="hidden md:flex absolute left-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-related:opacity-100">
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={scrollRelatedRight}
                className="hidden md:flex absolute right-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-related:opacity-100">
                <ArrowRight size={18} />
              </button>

              <div 
                ref={relatedScrollRef}
                className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory no-scrollbar pb-10 pt-4 -mt-4 px-4 -mx-4 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
              {getRelatedProducts()
                .filter(p => !selectedProduct || p.name !== selectedProduct.name)
                .map((item, i) => (
                  <div 
                    key={i}
                    onClick={() => {
                      handleProductClick(item);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer transition-all duration-300 relative overflow-hidden rounded-2xl shadow-lg border border-neutral-800/80 hover:border-[#ff4b4b]/30 hover:shadow-[0_12px_30px_rgba(255,75,75,0.08)] hover:-translate-y-1 text-left bg-neutral-950/40 shrink-0 w-[160px] sm:w-[240px] snap-start"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-95 z-10 pointer-events-none rounded-2xl" />
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full aspect-[3/4] object-cover rounded-2xl" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <p className="font-display font-bold text-xs sm:text-sm tracking-wide uppercase text-white truncate">
                        {item.name}
                      </p>
                      {/* Price display removed as requested */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0C] font-sans text-white overflow-x-hidden relative selection:bg-[#ff4b4b] selection:text-white">
      {/* Hero Background Video */}
      <div 
        className="absolute top-0 left-0 w-full h-[900px] pointer-events-none z-0 overflow-hidden opacity-[0.16] mix-blend-luminosity"
        style={{
          maskImage: isMobile 
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 12%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%)'
            : 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 48%)',
          WebkitMaskImage: isMobile 
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 12%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%)'
            : 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 48%)',
        }}
      >
        {/* Layer 0 */}
        <iframe
          key={key0}
          src="https://player.vimeo.com/video/1195221170?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
          className={`absolute transition-opacity duration-1000 ease-in-out ${activeTab === 0 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            position: 'absolute',
            top: isMobile ? '35%' : '50%',
            left: '50%',
            width: '100vh',
            height: '185vw',
            transform: `translate(-50%, -50%) rotate(-90deg) scale(${isMobile ? '0.92' : '0.72'})`,
            transformOrigin: 'center',
            minHeight: '100%',
            minWidth: '100%',
            border: 'none',
            outline: 'none',
            boxShadow: 'none'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Video Background A"
        ></iframe>

        {/* Layer 1 (Crossfade buffered) */}
        <iframe
          key={key1}
          src="https://player.vimeo.com/video/1195221170?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
          className={`absolute transition-opacity duration-1000 ease-in-out ${activeTab === 1 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            position: 'absolute',
            top: isMobile ? '35%' : '50%',
            left: '50%',
            width: '100vh',
            height: '185vw',
            transform: `translate(-50%, -50%) rotate(-90deg) scale(${isMobile ? '0.92' : '0.72'})`,
            transformOrigin: 'center',
            minHeight: '100%',
            minWidth: '100%',
            border: 'none',
            outline: 'none',
            boxShadow: 'none'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Video Background B"
        ></iframe>
      </div>

      {/* Cinematic Vignette & Particle/Smoke Overlay Layer */}
      <div className="absolute top-0 left-0 w-full h-[900px] pointer-events-none z-[1] overflow-hidden">
        <style>{`
          @keyframes floatDust {
            0% { transform: translateY(80px) translateX(0) scale(0.6); opacity: 0; }
            20% { opacity: 0.45; }
            80% { opacity: 0.45; }
            100% { transform: translateY(-120px) translateX(15px) scale(1.1); opacity: 0; }
          }
          @keyframes smokeDrift {
            0% { transform: translateX(-4%) translateY(0) scale(1) rotate(0deg); opacity: 0.25; }
            50% { transform: translateX(4%) translateY(-3%) scale(1.06) rotate(2deg); opacity: 0.4; }
            100% { transform: translateX(-4%) translateY(0) scale(1) rotate(0deg); opacity: 0.25; }
          }
          .animate-dust-1 { animation: floatDust 8s infinite linear; }
          .animate-dust-2 { animation: floatDust 12s infinite linear; }
          .animate-dust-3 { animation: floatDust 15s infinite linear; }
          .animate-smoke { animation: smokeDrift 22s infinite ease-in-out; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Cinematic Vignette Gradients */}
        {/* Top Vignette - completely fades any remaining trace of top edge */}
        <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-b from-[#0A0A0C] via-[#0A0A0C]/90 to-transparent" />
        
        {/* Bottom Vignette - bleeds into blackness */}
        <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/95 to-transparent" />
        
        {/* Left Vignette */}
        <div className="absolute top-0 left-0 h-[900px] w-[15%] bg-gradient-to-r from-[#0A0A0C] to-transparent hidden md:block" />
        
        {/* Right Vignette */}
        <div className="absolute top-0 right-0 h-[900px] w-[20%] bg-gradient-to-l from-[#0A0A0C] to-transparent hidden md:block" />

        {/* Dramatic Radial Lens Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0A0A0C_95%)] opacity-[0.80]" />

        {/* Animated Smoke/Ink Bleed fog layer */}
        <div className="absolute top-[20%] md:top-[25%] left-[-10%] w-[120%] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,75,75,0.06),transparent_65%)] animate-smoke filter blur-[60px]" />
        <div className="absolute top-[15%] md:top-[10%] right-[-10%] w-[100%] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05),transparent_60%)] animate-smoke filter blur-[70px]" style={{ animationDelay: '3s' }} />

        {/* Floating cinematic dust particles */}
        <div className="absolute inset-0">
          {[
            { left: '15%', top: '30%', delay: '0s', size: '2px', speed: 'animate-dust-1' },
            { left: '45%', top: '35%', delay: '2s', size: '3px', speed: 'animate-dust-2' },
            { left: '75%', top: '28%', delay: '4s', size: '1.5px', speed: 'animate-dust-3' },
            { left: '25%', top: '40%', delay: '1s', size: '2.5px', speed: 'animate-dust-2' },
            { left: '60%', top: '32%', delay: '5s', size: '2px', speed: 'animate-dust-1' },
            { left: '85%', top: '42%', delay: '3s', size: '3.5px', speed: 'animate-dust-3' },
            { left: '10%', top: '45%', delay: '6s', size: '1.8px', speed: 'animate-dust-2' },
            { left: '50%', top: '25%', delay: '7s', size: '2.2px', speed: 'animate-dust-1' },
          ].map((dust, index) => (
            <div
              key={index}
              className={`absolute rounded-full bg-[#ff7373]/50 blur-[0.5px] ${dust.speed}`}
              style={{
                left: dust.left,
                top: dust.top,
                width: dust.size,
                height: dust.size,
                animationDelay: dust.delay,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Ambient Glowing Orbs Background */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-[#ff4b4b] opacity-[0.12] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] bg-[#f97316] opacity-[0.15] blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-[#ef4444] opacity-[0.08] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10 pb-0">
        
        {/* Header / Nav */}
        <nav className="flex items-center justify-between py-6 md:py-8">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L24 12L12 24L0 12L12 0Z" fill="white" className="opacity-90"/>
              <path d="M12 0V24L0 12L12 0Z" fill="#ff4b4b"/>
            </svg>
            <span className="font-display font-bold text-xl tracking-wide uppercase">Qeeb</span>
          </div>



          {/* CTA */}
          <button 
            onClick={() => document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#ff4b4b] hover:bg-[#ff2020] text-white px-7 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,75,75,0.5)] hover:shadow-[0_0_35px_rgba(255,75,75,0.8)] border border-[#ff4b4b]/50 cursor-pointer"
          >
            REALIZAR PEDIDO
          </button>
        </nav>

        {/* Hero Section */}
        <main className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 pt-8 md:pt-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col z-10">
            <h2 className="text-[#ff4b4b] font-bold tracking-widest text-[13px] uppercase mb-4 drop-shadow-[0_0_8px_rgba(255,75,75,0.3)]">PRODUCTOS PERSONALIZADOS</h2>
            <h1 className="font-display font-black text-[48px] md:text-[68px] leading-[1.05] uppercase tracking-tight mb-8 drop-shadow-[0_0_20px_rgba(255,75,75,0.15)] relative">
              <span className="absolute -inset-4 bg-[#ff4b4b] blur-[80px] opacity-15 z-[-1] pointer-events-none"></span>
              Personaliza<br/>
              lo que más<br/>
              quieres
            </h1>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 relative">
              <button 
                onClick={() => document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ff4b4b] hover:bg-[#ff2020] text-white px-9 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(255,75,75,0.6)] hover:shadow-[0_0_40px_rgba(255,75,75,0.9)] border border-[#ff4b4b]/50 hover:scale-105 z-10 w-auto min-w-[160px] whitespace-nowrap cursor-pointer"
              >
                Ver colecciones
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative w-[90%] sm:w-[400px] md:w-[460px] mx-auto md:mx-0 aspect-square mt-10 lg:mt-0 xl:mr-10 group">
            {/* Glowing Border FX */}
            <div className="absolute inset-[-4px] bg-gradient-to-tr from-[#f97316] via-[#ff4b4b] to-[#dc2626] rounded-[48px] blur-[8px] opacity-100 z-0 group-hover:blur-[12px] transition-all duration-500"></div>
            <div className="absolute inset-[-4px] bg-gradient-to-tr from-[#f97316] via-[#ff4b4b] to-[#dc2626] rounded-[48px] blur-[25px] opacity-60 z-0 group-hover:blur-[35px] group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Main AI Hero Image */}
            <img 
              src="https://i.imgur.com/9CapBRM.jpeg" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1614593504104-18fa5881cf73?q=80&w=800&fit=crop"; }}
              alt="Exclusive Digital Artwork" 
              className="absolute inset-0 w-full h-full object-cover rounded-[44px] z-10 bg-[#1A1A1C] shadow-2xl"
            />

            {/* Floating Circular Badge */}
            <div className="absolute -left-4 md:-left-14 -bottom-8 md:-bottom-10 w-[100px] md:w-[140px] h-[100px] md:h-[140px] bg-[#0A0A0C] border-[6px] border-[#0A0A0C] rounded-full z-20 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
               
               {/* Spinning Text SVG */}
               <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
                 <path id="textPathOut" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                 <text className="text-[9px] md:text-[10.5px] fill-white font-bold tracking-[0.18em] uppercase">
                   <textPath href="#textPathOut" startOffset="0%">
                     QEEB NFT MARKETPLACE • QEEB NFT MARKETPLACE • 
                   </textPath>
                 </text>
               </svg>
               
               {/* Center Play Button */}
               <div className="w-8 md:w-11 h-8 md:h-11 bg-white rounded-full flex items-center justify-center z-30 cursor-pointer hover:scale-110 hover:bg-gray-100 transition-all shadow-lg">
                 <Play size={18} className="fill-[#0A0A0C] text-[#0A0A0C] ml-1" />
               </div>
            </div>
          </div>
        </main>

        {/* Featured Products Section */}
        <section id="catalog-section" className="mt-12 md:mt-16">
          <h3 className="font-display font-bold text-lg uppercase tracking-[0.15em] mb-6">ANIMES</h3>
          
          <div className="relative group/slider">
            {/* Navigation Arrows */}
            <button 
              onClick={scrollLeft}
              className="hidden md:flex absolute left-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider:opacity-100">
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollRight}
              className="hidden md:flex absolute right-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider:opacity-100">
              <ArrowRight size={18} />
            </button>
 
            {/* Cards Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory no-scrollbar pb-10 pt-4 -mt-4 px-4 -mx-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((cat, i) => (
                <div 
                  key={i} 
                  onClick={() => handleProductClick(cat)}
                  className="w-[160px] sm:w-[200px] md:w-[240px] shrink-0 snap-start group cursor-pointer transition-all duration-300 relative overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(255,75,75,0.12)] border border-[#ff4b4b]/15 hover:border-[#ff4b4b]/40 hover:shadow-[0_8px_30px_rgba(255,75,75,0.25)] hover:-translate-y-1 bg-neutral-950/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 z-10 pointer-events-none transition-opacity duration-300 group-hover:from-black/100 rounded-2xl" />
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full aspect-[3/4] object-cover rounded-2xl" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="font-display font-bold text-xs sm:text-sm tracking-wide uppercase text-white drop-shadow-md">
                      {cat.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Caricaturas Section */}
        <section className="mt-10 md:mt-14">
          <h3 className="font-display font-bold text-lg uppercase tracking-[0.15em] mb-6">CARICATURAS</h3>
          
          <div className="relative group/slider-cartoons">
            {/* Navigation Arrows */}
            <button 
              onClick={scrollCartoonsLeft}
              className="hidden md:flex absolute left-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-cartoons:opacity-100">
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollCartoonsRight}
              className="hidden md:flex absolute right-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-cartoons:opacity-100">
              <ArrowRight size={18} />
            </button>
 
            {/* Cards Scroll Container */}
            <div 
              ref={cartoonsScrollRef}
              className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory no-scrollbar pb-10 pt-4 -mt-4 px-4 -mx-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cartoons.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => handleProductClick(item)}
                  className="w-[160px] sm:w-[200px] md:w-[240px] shrink-0 snap-start group cursor-pointer transition-all duration-300 relative overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(255,75,75,0.12)] border border-[#ff4b4b]/15 hover:border-[#ff4b4b]/40 hover:shadow-[0_8px_30px_rgba(255,75,75,0.25)] hover:-translate-y-1 bg-neutral-950/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 z-10 pointer-events-none transition-opacity duration-300 group-hover:from-black/100 rounded-2xl" />
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full aspect-[3/4] object-cover rounded-2xl" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="font-display font-bold text-xs sm:text-sm tracking-wide uppercase text-white drop-shadow-md">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retratos Section */}
        <section className="mt-10 md:mt-14">
          <h3 className="font-display font-bold text-lg uppercase tracking-[0.15em] mb-6">RETRATOS</h3>
          
          <div className="relative group/slider-portraits">
            {/* Navigation Arrows */}
            <button 
              onClick={scrollPortraitsLeft}
              className="hidden md:flex absolute left-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-portraits:opacity-100">
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollPortraitsRight}
              className="hidden md:flex absolute right-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-portraits:opacity-100">
              <ArrowRight size={18} />
            </button>
 
            {/* Cards Scroll Container */}
            <div 
              ref={portraitsScrollRef}
              className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory no-scrollbar pb-10 pt-4 -mt-4 px-4 -mx-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portraits.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => handleProductClick(item)}
                  className="w-[160px] sm:w-[200px] md:w-[240px] shrink-0 snap-start group cursor-pointer transition-all duration-300 relative overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(255,75,75,0.12)] border border-[#ff4b4b]/15 hover:border-[#ff4b4b]/40 hover:shadow-[0_8px_30px_rgba(255,75,75,0.25)] hover:-translate-y-1 bg-neutral-950/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 z-10 pointer-events-none transition-opacity duration-300 group-hover:from-black/100 rounded-2xl" />
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full aspect-[3/4] object-cover rounded-2xl" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="font-display font-bold text-xs sm:text-sm tracking-wide uppercase text-white drop-shadow-md">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Futbolistas Section */}
        <section className="mt-10 md:mt-14">
          <h3 className="font-display font-bold text-lg uppercase tracking-[0.15em] mb-6">FUTBOLISTAS</h3>
          
          <div className="relative group/slider-footballers">
            {/* Navigation Arrows */}
            <button 
              onClick={scrollFootballersLeft}
              className="hidden md:flex absolute left-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-footballers:opacity-100">
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollFootballersRight}
              className="hidden md:flex absolute right-4 top-[50%] -translate-y-1/2 w-10 h-10 bg-[#1F2025]/90 hover:bg-[#2A2B32] text-white rounded-full items-center justify-center z-20 shadow-xl transition hover:scale-105 border border-white/5 opacity-0 group-hover/slider-footballers:opacity-100">
              <ArrowRight size={18} />
            </button>
 
            {/* Cards Scroll Container */}
            <div 
              ref={footballersScrollRef}
              className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory no-scrollbar pb-10 pt-4 -mt-4 px-4 -mx-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {footballers.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => handleProductClick(item)}
                  className="w-[160px] sm:w-[200px] md:w-[240px] shrink-0 snap-start group cursor-pointer transition-all duration-300 relative overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(255,75,75,0.12)] border border-[#ff4b4b]/15 hover:border-[#ff4b4b]/40 hover:shadow-[0_8px_30px_rgba(255,75,75,0.25)] hover:-translate-y-1 bg-neutral-950/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 z-10 pointer-events-none transition-opacity duration-300 group-hover:from-black/100 rounded-2xl" />
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full aspect-[3/4] object-cover rounded-2xl" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="font-display font-bold text-xs sm:text-sm tracking-wide uppercase text-white drop-shadow-md">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portada Publicitaria de Alta Gama (Imagen completa de borde a borde de la web) */}
        <section className="mt-12 md:mt-16 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-neutral-950/40">
          <img 
            src="https://i.imgur.com/3oIFMnp.jpeg" 
            alt="Portada Publicitaria Original" 
            className="w-full h-auto block select-none"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* PRODUCTOS PREMIUM SECTION (Clean Brand Grid Catalog) */}
        <section className="mt-12 md:mt-16 border-t border-b border-neutral-800/40 py-12 relative bg-neutral-950/20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="mb-10 text-center">
              <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white">
                TAZAS Y CAMISAS
              </h3>
              <div className="w-12 h-[2px] bg-neutral-700 mx-auto mt-4" />
            </div>

            {/* Clean Grid - No ZigZag, Two/Three on top, perfectly aligned catalog */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {premiumGear.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => handleProductClick(item)}
                  className="group cursor-pointer flex flex-col bg-neutral-900/30 border border-white/5 rounded-2xl p-6 hover:border-[#ff4b4b]/30 hover:bg-neutral-900/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  {/* Clean Visual Image Container - Full image without padding, frames, or zoom animations */}
                  <div className="relative aspect-square mb-6 flex items-center justify-center">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-contain" 
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-xl text-white uppercase tracking-wide group-hover:text-red-400 transition-colors duration-300">
                        {item.name}
                      </h4>
                    </div>

                    <div className="pt-4 mt-6 border-t border-neutral-800 flex items-center justify-between">
                      <div>
                        <span className="text-neutral-500 text-[10px] tracking-wider uppercase block mb-0.5">
                          PRECIO
                        </span>
                        <span className="text-white font-mono font-bold text-lg">
                          {item.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950/40 border border-neutral-800 text-neutral-300 group-hover:text-white group-hover:border-[#ff4b4b]/30 group-hover:bg-[#ff4b4b]/5 transition-all duration-300 font-mono text-xs uppercase tracking-wider">
                        <span>Detalles</span>
                        <ArrowRight size={12} className="text-neutral-400 group-hover:text-[#ff4b4b] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with copyright and semi-transparent logo */}
        <footer className="mt-12 pb-10 flex flex-col items-center justify-center gap-4 text-center border-t border-white/5 pt-8">
          <div className="opacity-15 hover:opacity-35 transition-opacity duration-300">
            <span className="font-display font-black text-4xl tracking-[0.25em] uppercase text-white">Qeeb</span>
          </div>
          <p className="text-neutral-600 text-[11px] tracking-wider uppercase font-medium">
            © {new Date().getFullYear()} Qeeb. Todos los derechos reservados.
          </p>
        </footer>

        {/* Ventana Emergente Publicitaria al Entrar (Estilo Temu/Shein, de Alto Impacto y Gran Tamaño) */}
        {showPromo && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-fade-in">
            {/* Backdrop overlay click-to-close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setShowPromo(false)} />
            
            <div className="relative max-w-[95%] sm:max-w-lg md:max-w-xl w-full bg-transparent overflow-visible flex flex-col items-center z-10 transition-transform duration-500 scale-100 animate-scale-up">
              {/* Contenedor de la Imagen con Sombra Premium */}
              <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.85)] border border-white/10 bg-neutral-950/40">
                {/* Botón de Cerrar (X) de Alta Gama posicionado para tapar el "X" de la esquina superior derecha de la imagen */}
                <button 
                  onClick={() => setShowPromo(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[100000] bg-black/70 hover:bg-[#ff4b4b]/90 text-white rounded-full p-2 sm:p-2.5 transition-all cursor-pointer border border-white/10 hover:scale-110 shadow-lg flex items-center justify-center"
                  aria-label="Cerrar publicidad"
                >
                  <X size={20} className="sm:w-[22px] sm:h-[22px]" />
                </button>

                <img 
                  src="https://i.imgur.com/N4EZfzD.png" 
                  alt="Publicidad Especial Qeeb" 
                  className="w-full h-auto max-h-[85vh] object-contain block select-none mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
