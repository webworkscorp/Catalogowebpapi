export interface Product {
  name: string;
  img: string;
  imgs?: string[];
  price: string;
  description: string;
  sizes: string[];
  creator: string;
}

export const categories: Product[] = [
  { 
    name: 'Cyber Samurai', 
    img: 'https://i.imgur.com/Y8Hr8Gq.jpeg',
    imgs: ['https://i.imgur.com/Y8Hr8Gq.jpeg', 'https://i.imgur.com/WSOuPxJ.jpeg'],
    price: '0.85 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
    creator: 'Sato_K'
  },
  { 
    name: 'Neon Geisha', 
    img: 'https://i.imgur.com/uGgpRrV.jpeg',
    imgs: ['https://i.imgur.com/uGgpRrV.jpeg', 'https://i.imgur.com/yT55bld.jpeg'],
    price: '0.95 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Animated MP4 Loop', 'HTML Custom WebGL'],
    creator: 'Aiko_Procedural'
  },
  { 
    name: 'Synthwave Skyline', 
    img: 'https://i.imgur.com/nsaggoZ.jpeg',
    imgs: ['https://i.imgur.com/nsaggoZ.jpeg', 'https://i.imgur.com/nPrdqgJ.jpeg'],
    price: '0.65 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Original Vector', 'Animated MP4 Loop'],
    creator: 'RetroVibe_Art'
  },
  { 
    name: 'Cyber Valkyrie', 
    img: 'https://i.imgur.com/5VvdYLi.jpeg',
    imgs: ['https://i.imgur.com/5VvdYLi.jpeg', 'https://i.imgur.com/07tSGL5.jpeg'],
    price: '1.10 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
    creator: 'Kusanagi_Studio'
  },
  { 
    name: 'Glitch Phantom', 
    img: 'https://i.imgur.com/2qxNHAd.jpeg',
    imgs: ['https://i.imgur.com/2qxNHAd.jpeg', 'https://i.imgur.com/mZfAAaz.jpeg'],
    price: '1.15 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
    creator: 'Kusanagi_Studio'
  },
  { 
    name: 'Neon Rebel', 
    img: 'https://i.imgur.com/1thnEpD.jpeg',
    imgs: ['https://i.imgur.com/1thnEpD.jpeg', 'https://i.imgur.com/fX8CfdP.jpeg'],
    price: '1.25 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
    creator: 'Kusanagi_Studio'
  },
  { 
    name: 'Prism Shogun', 
    img: 'https://i.imgur.com/rcJ8m29.jpeg',
    imgs: ['https://i.imgur.com/rcJ8m29.jpeg', 'https://i.imgur.com/wXof8Xs.jpeg'],
    price: '1.30 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
    creator: 'Kusanagi_Studio'
  },
  { 
    name: 'Mecha Core', 
    img: 'https://i.imgur.com/yaAUNkD.jpeg',
    imgs: ['https://i.imgur.com/yaAUNkD.jpeg', 'https://i.imgur.com/m3BxPIp.jpeg'],
    price: '1.20 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['Original Vector', '3D GLB Model', 'Blueprint PDF'],
    creator: 'H0L0_Mech'
  },
  { 
    name: 'Apex Sentinel', 
    img: 'https://i.imgur.com/cVGQznb.jpeg',
    imgs: ['https://i.imgur.com/cVGQznb.jpeg', 'https://i.imgur.com/bew9f6Y.jpeg'],
    price: '1.40 ETH',
    description: 'Transforma tus personajes favoritos en arte que puedes tocar. Cada cuadro captura la esencia de los mundos animados que te marcaron: colores vibrantes, detalles nítidos y esa energía única que solo el anime tiene. Ya sea un momento épico, un personaje icónico o una escena que nunca olvidaste, lo convertimos en una pieza que vive en tu espacio.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
    creator: 'Kusanagi_Studio'
  },
];

export const cartoons: Product[] = [
  { 
    name: 'Cyber Toon', 
    img: 'https://i.imgur.com/hCtzqkU.jpeg',
    imgs: ['https://i.imgur.com/hCtzqkU.jpeg', 'https://i.imgur.com/f6JeQfS.jpeg'],
    price: '0.45 ETH',
    description: 'Los personajes que crecieron contigo, ahora en tu hogar. De Disney a Pixar, de los clásicos de tu infancia a los favoritos de hoy, damos vida a los personajes animados que más amás en un cuadro con acabado de galería. Perfecto para decorar cuartos infantiles, espacios creativos o simplemente para el adulto que nunca dejó de disfrutar la magia de la animación.',
    sizes: ['Low-Res Preview', 'UHD Wallpaper', 'Vector Master'],
    creator: 'BubblePop_Studio'
  },
  { 
    name: 'Neon Retro', 
    img: 'https://i.imgur.com/V5CNQbP.jpeg',
    imgs: ['https://i.imgur.com/V5CNQbP.jpeg', 'https://i.imgur.com/ge9nhcY.jpeg'],
    price: '0.70 ETH',
    description: 'Los personajes que crecieron contigo, ahora en tu hogar. De Disney a Pixar, de los clásicos de tu infancia a los favoritos de hoy, damos vida a los personajes animados que más amás en un cuadro con acabado de galería. Perfecto para decorar cuartos infantiles, espacios creativos o simplemente para el adulto que nunca dejó de disfrutar la magia de la animación.',
    sizes: ['UHD Wallpaper', 'Original Layer File (PSD)'],
    creator: 'PixelMuse'
  },
  { 
    name: 'Pop Bubblegum', 
    img: 'https://i.imgur.com/NcKj35g.jpeg',
    imgs: ['https://i.imgur.com/NcKj35g.jpeg', 'https://i.imgur.com/qxaW8yD.jpeg'],
    price: '0.50 ETH',
    description: 'Los personajes que crecieron contigo, ahora en tu hogar. De Disney a Pixar, de los clásicos de tu infancia a los favoritos de hoy, damos vida a los personajes animados que más amás en un cuadro con acabado de galería. Perfecto para decorar cuartos infantiles, espacios creativos o simplemente para el adulto que nunca dejó de disfrutar la magia de la animación.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model'],
    creator: 'SlickRender'
  },
  { 
    name: 'Cosmic Duck', 
    img: 'https://i.imgur.com/Jzyebi0.jpeg',
    imgs: ['https://i.imgur.com/Jzyebi0.jpeg', 'https://i.imgur.com/8oudePH.jpeg'],
    price: '0.62 ETH',
    description: 'Los personajes que crecieron contigo, ahora en tu hogar. De Disney a Pixar, de los clásicos de tu infancia a los favoritos de hoy, damos vida a los personajes animados que más amás en un cuadro con acabado de galería. Perfecto para decorar cuartos infantiles, espacios creativos o simplemente para el adulto que nunca dejó de disfrutar la magia de la animación.',
    sizes: ['UHD Wallpaper', 'Animated MP4 Loop', 'Animated GIF Layer'],
    creator: 'AstroDuck'
  },
  { 
    name: 'Graffiti Tag', 
    img: 'https://i.imgur.com/BdxfMTf.jpeg',
    imgs: ['https://i.imgur.com/BdxfMTf.jpeg', 'https://i.imgur.com/kzm4XH5.jpeg'],
    price: '0.38 ETH',
    description: 'Los personajes que crecieron contigo, ahora en tu hogar. De Disney a Pixar, de los clásicos de tu infancia a los favoritos de hoy, damos vida a los personajes animados que más amás en un cuadro con acabado de galería. Perfecto para decorar cuartos infantiles, espacios creativos o simplemente para el adulto que nunca dejó de disfrutar la magia de la animación.',
    sizes: ['UHD Wallpaper', 'Original JPEG Master'],
    creator: 'BlockGraf'
  },
  { 
    name: 'Arcade Vision', 
    img: 'https://i.imgur.com/ILbS2UB.jpeg',
    imgs: ['https://i.imgur.com/ILbS2UB.jpeg', 'https://i.imgur.com/El5KZ2F.jpeg'],
    price: '0.88 ETH',
    description: 'Los personajes que crecieron contigo, ahora en tu hogar. De Disney a Pixar, de los clásicos de tu infancia a los favoritos de hoy, damos vida a los personajes animados que más amás en un cuadro con acabado de galería. Perfecto para decorar cuartos infantiles, espacios creativos o simplemente para el adulto que nunca dejó de disfrutar la magia de la animación.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D GLB Model', 'Animated MP4 Loop'],
    creator: 'VaporDave'
  },
];

export const portraits: Product[] = [
  {
    name: 'Cyberpunk Geisha',
    img: 'https://i.imgur.com/zoaHw7T.jpeg',
    imgs: ['https://i.imgur.com/zoaHw7T.jpeg'],
    price: '1.45 ETH',
    description: 'Tu historia, tu rostro, tu arte. Convierte una foto tuya, de tu familia o de alguien especial en un retrato que va más allá de la fotografía. Elegante, personalizado y completamente único, cada retrato es una pieza que cuenta algo que ningún otro cuadro puede contar.',
    sizes: ['UHD Wallpaper', 'Original RAW File', '3D Face Filter'],
    creator: 'Hana_Cyber'
  },
  {
    name: 'Elder Samurai',
    img: 'https://i.imgur.com/67vJT2J.jpeg',
    imgs: ['https://i.imgur.com/67vJT2J.jpeg'],
    price: '1.10 ETH',
    description: 'Tu historia, tu rostro, tu arte. Convierte una foto tuya, de tu familia o de alguien especial en un retrato que va más allá de la fotografía. Elegante, personalizado y completamente único, cada retrato es una pieza que cuenta algo que ningún otro cuadro puede contar.',
    sizes: ['UHD Wallpaper', 'Hi-Res PSD Layers'],
    creator: 'Ren_Shogun'
  },
  {
    name: 'Vibrancy Queen',
    img: 'https://i.imgur.com/2intjp0.jpeg',
    imgs: ['https://i.imgur.com/2intjp0.jpeg'],
    price: '0.90 ETH',
    description: 'Tu historia, tu rostro, tu arte. Convierte una foto tuya, de tu familia o de alguien especial en un retrato que va más allá de la fotografía. Elegante, personalizado y completamente único, cada retrato es una pieza que cuenta algo que ningún otro cuadro puede contar.',
    sizes: ['UHD Wallpaper', 'Original Vector Art', 'Digital Master Print'],
    creator: 'Aya_Neon'
  },
  {
    name: 'Synth Explorer',
    img: 'https://i.imgur.com/JBIRdGH.jpeg',
    imgs: ['https://i.imgur.com/JBIRdGH.jpeg'],
    price: '0.99 ETH',
    description: 'Tu historia, tu rostro, tu arte. Convierte una foto tuya, de tu familia o de alguien especial en un retrato que va más allá de la fotografía. Elegante, personalizado y completamente único, cada retrato es una pieza que cuenta algo que ningún otro cuadro puede contar.',
    sizes: ['UHD Wallpaper', 'Animated High-Fi MP4'],
    creator: 'Galaxy_Walker'
  },
  {
    name: 'Midnight Rogue',
    img: 'https://i.imgur.com/9WR6llV.jpeg',
    imgs: ['https://i.imgur.com/9WR6llV.jpeg'],
    price: '0.75 ETH',
    description: 'Tu historia, tu rostro, tu arte. Convierte una foto tuya, de tu familia o de alguien especial en un retrato que va más allá de la fotografía. Elegante, personalizado y completamente único, cada retrato es una pieza que cuenta algo que ningún otro cuadro puede contar.',
    sizes: ['UHD Wallpaper', 'Avatar Asset Pack'],
    creator: 'Link_0x'
  }
];

export const footballers: Product[] = [
  {
    name: 'Golden Champion',
    img: 'https://i.imgur.com/NytcsxW.jpeg',
    imgs: ['https://i.imgur.com/NytcsxW.jpeg', 'https://i.imgur.com/Uk8lxoF.jpeg'],
    price: '1.35 ETH',
    description: 'El momento que te hizo gritar, ahora en tu pared. Celebra a tu equipo, tu ídolo o esa jugada que quedó grabada en la historia. Nuestros cuadros deportivos están hechos para los que viven el deporte con pasión: diseños con carácter, colores que impactan y un acabado que se ve premium desde el primer vistazo.',
    sizes: ['UHD Wallpaper', 'Hyper-Res Master', 'Animated Poster'],
    creator: 'Striker_Design'
  },
  {
    name: 'Neon Playmaker',
    img: 'https://i.imgur.com/UjMrWo5.jpeg',
    imgs: ['https://i.imgur.com/UjMrWo5.jpeg', 'https://i.imgur.com/ILAM0HM.jpeg'],
    price: '1.15 ETH',
    description: 'El momento que te hizo gritar, ahora en tu pared. Celebra a tu equipo, tu ídolo o esa jugada que quedó grabada en la historia. Nuestros cuadros deportivos están hechos para los que viven el deporte con pasión: diseños con carácter, colores que impactan y un acabado que se ve premium desde el primer vistazo.',
    sizes: ['UHD Wallpaper', 'Original Vector', '3D Asset Pack'],
    creator: 'Tactical_AI'
  },
  {
    name: 'Cyber Goalkeeper',
    img: 'https://i.imgur.com/kAXFfXi.jpeg',
    imgs: ['https://i.imgur.com/kAXFfXi.jpeg', 'https://i.imgur.com/PcNVxls.jpeg'],
    price: '1.25 ETH',
    description: 'El momento que te hizo gritar, ahora en tu pared. Celebra a tu equipo, tu ídolo o esa jugada que quedó grabada en la historia. Nuestros cuadros deportivos están hechos para los que viven el deporte con pasión: diseños con carácter, colores que impactan y un acabado que se ve premium desde el primer vistazo.',
    sizes: ['UHD Wallpaper', 'Original Layer File (PSD)', 'Premium Canvas'],
    creator: 'Wall_Shield'
  },
  {
    name: 'Stadium Phantom',
    img: 'https://i.imgur.com/1jdcVCc.jpeg',
    imgs: ['https://i.imgur.com/1jdcVCc.jpeg', 'https://i.imgur.com/QdQYNse.jpeg'],
    price: '1.50 ETH',
    description: 'El momento que te hizo gritar, ahora en tu pared. Celebra a tu equipo, tu ídolo o esa jugada que quedó grabada en la historia. Nuestros cuadros deportivos están hechos para los que viven el deporte con pasión: diseños con carácter, colores que impactan y un acabado que se ve premium desde el primer vistazo.',
    sizes: ['UHD Wallpaper', 'Animated High-Fi MP4', '3D GLB Model'],
    creator: 'Kusanagi_Studio'
  },
  {
    name: 'Glitch Striker',
    img: 'https://i.imgur.com/w83m4NR.jpeg',
    imgs: ['https://i.imgur.com/w83m4NR.jpeg', 'https://i.imgur.com/VQQc5Ju.jpeg'],
    price: '1.40 ETH',
    description: 'El momento que te hizo gritar, ahora en tu pared. Celebra a tu equipo, tu ídolo o esa jugada que quedó grabada en la historia. Nuestros cuadros deportivos están hechos para los que viven el deporte con pasión: diseños con carácter, colores que impactan y un acabado que se ve premium desde el primer vistazo.',
    sizes: ['UHD Wallpaper', 'Original RAW File', '3D Model Pack'],
    creator: 'Apex_Tactics'
  }
];

export const combos: Product[] = [
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

export const premiumGear: Product[] = [
  {
    name: 'TAZA + CUADRO + CAMISA',
    img: 'https://i.imgur.com/aAFDkK9.jpeg',
    imgs: [
      'https://i.imgur.com/aAFDkK9.jpeg'
    ],
    price: '₡12,000',
    description: 'El pack definitivo para los que van en serio. Todo lo que necesitás para vivir tu estilo en cada momento del día: empezá la mañana con tu taza personalizada, llevá tu arte puesto a donde vayas y decorá tu espacio con un cuadro que dice quién sos. Tres piezas, un solo concepto, impacto total.',
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
    description: 'Pequeño en tamaño, grande en personalidad. Para los que quieren algo práctico sin renunciar al estilo. Tu diseño en dos formatos que usás todos los días: uno para tu rutina de la mañana, otro para lucirlo donde vayas. Simple, poderoso y 100% tuyo.',
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
    description: 'Llevá tu arte contigo y exponélo en casa. La combinación perfecta para quienes quieren que su estilo trascienda lo digital. Un cuadro que decora, una camisa que impacta. El mismo diseño, dos formas de mostrarlo al mundo.',
    sizes: ['Complete Set', 'Ceramic Carafe Only'],
    creator: 'Sora Ceramics'
  }
];
