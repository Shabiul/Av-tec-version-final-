export interface SubService {
  id: string;
  title: string;
  description: string;
  equipment: string[];
  useCases: string[];
}

export interface Service {
  slug: string;
  title: string;
  hero: string;
  intro: string;
  subServices: SubService[];
  equipment: string[];
  cta: string;
}

export const SERVICES: Record<string, Service> = {
  audio: {
    slug: 'audio',
    title: 'Audio Systems',
    hero: '/assets/images/gallery/main-stage-line-array.jpg',
    intro: 'AV-TEC provides end-to-end professional sound reinforcement for events of every scale — from corporate summits to large-capacity festivals. With over three decades of live-sound expertise, we deliver crystal-clear audio tailored to your venue acoustics and audience size.',
    subServices: [
      {
        id: 'line-array',
        title: 'Line Array & Tops',
        description: 'High-performance line array tops and subwoofers for pristine sound dispersion across large venues.',
        equipment: ['Martin Audio W8LM Tops', 'Martin Audio W8LMDTops', 'WS218X Subwoofers', 'D&B Audiotechnik Q Series Tops', 'D&B Audiotechnik Q Series Subs'],
        useCases: ['Concerts', 'Festivals', 'Corporate Events', 'Outdoor Shows'],
      },
      {
        id: 'mixing-consoles',
        title: 'Digital & Analog Mixers',
        description: 'Industry-standard mixing consoles and stage racks for multi-channel live audio processing.',
        equipment: ['SC48 - 48 Channel Digital Audio Mixer', 'M32 Midas', 'Allen & Heath SQ7', 'Yamaha DM3 Digital Audio16ch Mixer', 'AR24/12 Stage Rack'],
        useCases: ['Live Shows', 'Corporate Conferences', 'Broadcast', 'Recording'],
      },
      {
        id: 'microphones-wireless',
        title: 'Wireless Microphones & IEM',
        description: 'Digital wireless handhelds, lapels, headsets, and in-ear monitors for clear vocal reproduction.',
        equipment: ['Shure QLXD Digital Wireless Microphone Hand Held', 'Shure QLXD Digital Wireless Microphone Laple/Headset', 'Sennheiser EW500 Series Wireless Hand Mics', 'Sennheiser In Ear Monitor G4/G3'],
        useCases: ['Corporate', 'Conferences', 'Live Music', 'Stage Shows'],
      },
      {
        id: 'conference-comms',
        title: 'Conference & Comms',
        description: 'Specialized conference microphones, translation systems, and clear wireless comms for seamless event operation.',
        equipment: ['OSL Digital Conference Mics', 'Digital wireless Conference Mics', 'Language Interpretation and Translation Booths', 'Clear Comms Wireless (8 x 2 Sets)'],
        useCases: ['International Summits', 'Boardrooms', 'Panel Discussions', 'Production Team'],
      },
    ],
    equipment: [
      'D&B Audiotechnik Q Series Tops',
      'D&B Audiotechnik Q Series Subs',
      'Martin Audio W8LM Tops',
      'SC48 - 48 Channel Digital Audio Mixer',
      'Allen & Heath SQ7',
      'Shure QLXD Digital Wireless Microphone Hand Held',
      'Sennheiser EW500 Series Wireless Hand Mics',
      'Clear Comms Wireless (8 x 2 Sets)',
    ],
    cta: "Whether it's a 200-person conference or a 50,000-seat concert, our audio team designs and delivers systems that sound flawless. Get in touch for a custom quote.",
  },
  lighting: {
    slug: 'lighting',
    title: 'Stage Lighting',
    hero: '/assets/images/gallery/concert-lighting-rig.jpg',
    intro: 'AV-TEC\'s lighting division transforms venues with intelligent lighting design — from elegant wash lighting for corporate summits to high-energy concert productions with moving heads, lasers, and pixel-mapped LED fixtures.',
    subServices: [
      {
        id: 'moving-heads',
        title: 'Moving Heads & Beam Fixtures',
        description: 'Intelligent moving head fixtures, sharpies, and follow spots for dynamic beam effects.',
        equipment: ['Sharpy 7R / 15R/ 18R/ 20R', 'Moving Head BSW', 'Follow Spot', 'Profile'],
        useCases: ['Concerts', 'Festivals', 'Corporate Launches', 'Weddings'],
      },
      {
        id: 'led-pars-wash',
        title: 'LED Wash & Pixel Lights',
        description: 'RGB and warm white LED PARs, pixel blinders, and LED batterns for vibrant color washes.',
        equipment: ['Led RGB Par', 'Led Warm White Par', 'Led Batterns', 'Led Wash', 'Led Pixel Lights', 'Pixel Blinder'],
        useCases: ['Stage Wash', 'Corporate', 'Weddings', 'Architectural'],
      },
      {
        id: 'effects-lasers',
        title: 'Special Effects & Lasers',
        description: 'Strobe, laser lights, 4-way blinders, smoke and haze atmospheric effects.',
        equipment: ['Lazer Light 10watts', '3 in 1 Strobe/ Lazer/ Wash', '4 Way Blinders', 'RGB Strobe Light', 'Antari Smoke Machine', 'Haze Machine'],
        useCases: ['Music Festivals', 'Clubs', 'Concerts', 'Special Acts'],
      },
      {
        id: 'lighting-consoles',
        title: 'Consoles & Rigging Support',
        description: 'Professional lighting consoles, Avolite controllers, goal post truss, and T-truss structures.',
        equipment: ['Grand MA 3', 'Grand MA 2', 'Tiger Touch 2', 'Arena Lighting Console', 'Goal Post Truss', 'Box Truss'],
        useCases: ['All Productions', 'Concerts', 'Theatre', 'Corporate'],
      },
    ],
    equipment: [
      'Grand MA 3',
      'Sharpy 7R / 15R/ 18R/ 20R',
      'Moving Head BSW',
      'Led RGB Par',
      'Led Warm White Par',
      'Led Wash',
      'Led Pixel Lights',
      'Tiger Touch 2',
    ],
    cta: 'From intimate wedding ambience to full-scale concert lighting rigs, our designers create visual experiences that captivate your audience.',
  },
  video: {
    slug: 'video',
    title: 'Video & LED Walls',
    hero: '/assets/images/gallery/led-wall-product-launch.jpg',
    intro: 'AV-TEC delivers stunning visual impact through indoor and outdoor LED walls, high-lumen laser projectors, glass teleprompters, camera packages, and video mixing units.',
    subServices: [
      {
        id: 'led-displays',
        title: 'Indoor & Outdoor LED Walls',
        description: 'High-resolution fine-pitch indoor and outdoor LED screens, curved panels, and 3D LED displays.',
        equipment: ['LED Wall 1.9 Per Sq. Ft. Indoor', 'LED Wall 2.9 Per Sq. Ft. Indoor', 'LED Wall 3.9 Per Sq. Ft. Indoor', 'LED Wall 4.9 Per Sq. Ft. Outdoor', 'Curve LED Wall'],
        useCases: ['Concerts', 'Corporate Launches', 'Festivals', 'Exhibitions'],
      },
      {
        id: 'media-servers',
        title: 'Media Servers & Switchers',
        description: 'High-performance servers running Vmix and Resolume, graphic switchers, and LED video processors.',
        equipment: ['Server with Vmix and Resolume Software', '4K LED Processor', '8K LED Processor', 'Graphic Switcher', 'Falsom Switcher'],
        useCases: ['Live Events', 'Product Launches', 'Conferences', 'Broadcast'],
      },
      {
        id: 'projectors-prompters',
        title: 'Laser Projectors & Teleprompters',
        description: 'Ultra-bright Panasonic and Epson laser projectors, professional glass teleprompters, and visualizers.',
        equipment: ['Panasonic 7000 Lumens Projector (Standard Lens)', 'Epson 15000 Lumens Lazer Projector (Standard Lens)', 'Epson 20000 Lumens Lazer Projector (Standard Lens)', 'Professional Glass Teleprompter'],
        useCases: ['Keynote Presentations', 'Corporate Summits', 'Auditoriums', 'Conferences'],
      },
      {
        id: 'displays-tvs',
        title: 'Smart TVs & Digital Displays',
        description: 'Commercial 4K & 8K Smart TVs on stands/wallmounts, LED standees, and preview monitors.',
        equipment: ['55" TV on Stand/Wallmount 4K Smart', '75" TV on Stand/Wallmount 4K Smart', '85" TV on Stand/Wallmount 8K Smart', 'Led Standees 6x3', '22" Preview Monitors'],
        useCases: ['Exhibitions', 'Lobbies', 'Control Booths', 'Breakout Sessions'],
      },
    ],
    equipment: [
      'LED Wall 1.9 Per Sq. Ft. Indoor',
      'LED Wall 2.9 Per Sq. Ft. Indoor',
      'LED Wall 3.9 Per Sq. Ft. Indoor',
      'LED Wall 4.9 Per Sq. Ft. Outdoor',
      'Server with Vmix and Resolume Software',
      'Panasonic 7000 Lumens Projector (Standard Lens)',
      '4K LED Processor',
      '55" TV on Stand/Wallmount 4K Smart',
    ],
    cta: 'From intimate conference screens to massive outdoor LED walls, our video team delivers visuals that make an impact.',
  },
  trussing: {
    slug: 'trussing',
    title: 'Trussing & Rigging',
    hero: '/assets/images/gallery/ground-support-truss.jpg',
    intro: 'AV-TEC\'s structural department provides certified aluminum trussing, goal posts, box truss, scaffolding, and lighting stands for events of all sizes.',
    subServices: [
      {
        id: 'truss-grid',
        title: 'Box & Goal Post Truss',
        description: 'Heavy-duty box trussing, goal post structures, and T-truss grids for stage lighting and speaker flying.',
        equipment: ['Box Truss', 'Goal Post Truss', 'T-Truss', 'Scaffolding'],
        useCases: ['Concerts', 'Festivals', 'Stage Rigging', 'Exhibitions'],
      },
      {
        id: 'lighting-supports',
        title: 'Lighting & Speaker Stands',
        description: 'Heavy-duty crank-up lighting stands, follow spot towers, and stage scaffolding support.',
        equipment: ['Lighting Stands', 'Scaffolding', 'Follow Spot', 'Moving Head BSW'],
        useCases: ['Outdoor Stage', 'Concerts', 'Arena Events', 'Fashion Shows'],
      },
      {
        id: 'stage-effects-rigging',
        title: 'Stage Effects & Blinder Frames',
        description: 'Rigging hardware and frames for 2-way and 4-way blinders, strobes, and follow spots.',
        equipment: ['2 Way RGB Blinder', '4 Way Blinders', 'Follow Spot', 'Lighting Stands'],
        useCases: ['Stage Production', 'Live Shows', 'Festivals'],
      },
      {
        id: 'scaffolding-towers',
        title: 'Scaffolding & Ground Support',
        description: 'Modular scaffolding towers, ground-support goal posts, and heavy-duty structural grids.',
        equipment: ['Scaffolding', 'Box Truss', 'Goal Post Truss', 'T-Truss'],
        useCases: ['Concerts', 'Festivals', 'Large Ground Events'],
      },
    ],
    equipment: [
      'Box Truss',
      'Goal Post Truss',
      'T-Truss',
      'Scaffolding',
      'Lighting Stands',
      'Follow Spot',
      'Moving Head BSW',
      '2 Way RGB Blinder',
    ],
    cta: 'Safe, certified, and engineered for your event. Contact our rigging team for structural planning and load calculations.',
  },
  consultancy: {
    slug: 'consultancy',
    title: 'Tech Consultancy',
    hero: '/assets/images/gallery/foh-control-position.jpg',
    intro: 'AV-TEC\'s consultancy division brings three decades of technical expertise to your planning table — specifying mixers, media servers, wireless comms, matrix switchers, and show control setups.',
    subServices: [
      {
        id: 'show-control',
        title: 'Show Control & Media Servers',
        description: 'System architecture using Vmix, Resolume servers, D San timers, and cue clickers for live event execution.',
        equipment: ['Server with Vmix and Resolume Software', 'D San Timer', 'Cue Clicker', 'Logitech Clicker'],
        useCases: ['Corporate Summits', 'Keynotes', 'Live Broadcasts'],
      },
      {
        id: 'audio-visual-architecture',
        title: 'AV Signal Architecture',
        description: 'Designing fiber and Cat6 signal distribution, 8x8 matrix switchers, and multi-channel console routing.',
        equipment: ['8 x 8 Matrix Switcher', 'Fibre Audio Convertor 2in 2out Both Sides', 'Fibre Transmitter/Receiver', 'Cat6 Transmitter/Receiver'],
        useCases: ['Complex Venues', 'Broadcast', 'Multi-Room Events'],
      },
      {
        id: 'crew-communications',
        title: 'Clear Comms & Audio Routing',
        description: 'Planning 8-channel wireless and wired clear comms networks for technical crew synchronization.',
        equipment: ['Clear Comms Wireless (8 x 2 Sets)', 'Clear Comms Wired (8 x 2 Sets)', 'SC48 - 48 Channel Digital Audio Mixer', 'Digital Audio Recorder'],
        useCases: ['Concerts', 'Festivals', 'Live TV Production'],
      },
      {
        id: 'prompter-timer-systems',
        title: 'Teleprompter & Timer Setup',
        description: 'Glass teleprompter and speaker timer system design for seamless keynote speaker management.',
        equipment: ['Professional Glass Teleprompter', 'Camera Teleprompter', 'TV / LED Wall Teleprompter (Software & Operator)', 'D San Timer'],
        useCases: ['Keynote Speeches', 'Government Summits', 'Corporate AGMs'],
      },
    ],
    equipment: [
      'Server with Vmix and Resolume Software',
      'SC48 - 48 Channel Digital Audio Mixer',
      'Digital Audio Recorder',
      'Clear Comms Wireless (8 x 2 Sets)',
      'Professional Glass Teleprompter',
      'D San Timer',
      '8 x 8 Matrix Switcher',
      'Fibre Transmitter/Receiver',
    ],
    cta: 'Bring our 30+ years of experience to your next project. Schedule a consultation to discuss your venue, event, or AV investment.',
  },
  installations: {
    slug: 'installations',
    title: 'Installs & Integrations',
    hero: '/assets/images/gallery/auditorium-install.jpg',
    intro: 'AV-TEC\'s installation division designs and delivers permanent AV solutions — including fine-pitch indoor LED walls, smart display TVs, digital conference microphones, and LED video processors.',
    subServices: [
      {
        id: 'fine-pitch-led',
        title: 'Permanent Fine Pitch LED Walls',
        description: 'Fixed indoor 1.9mm and 2.9mm fine-pitch LED display walls with 4K/8K processors.',
        equipment: ['LED Wall 1.9 Per Sq. Ft. Indoor', 'LED Wall 2.9 Per Sq. Ft. Indoor', '4K LED Processor', '8K LED Processor'],
        useCases: ['Corporate Lobbies', 'Command Centers', 'Auditoriums'],
      },
      {
        id: 'conference-mic-installs',
        title: 'Digital Conference Microphone Systems',
        description: 'Installed OSL, Ahuja, and digital wireless conference microphone discussion systems with voting pads.',
        equipment: ['OSL Digital Conference Mics', 'Digital wireless Conference Mics', 'Ahuja Conference Mics', 'Voting Pad', 'Language Interpretation and Translation Booths'],
        useCases: ['Boardrooms', 'Council Halls', 'Conference Rooms'],
      },
      {
        id: 'commercial-displays',
        title: 'Commercial Smart TVs & Standees',
        description: 'Commercial 55" to 75" 4K Smart TVs and LED Standees for corporate environments.',
        equipment: ['55" TV on Stand/Wallmount 4K Smart', '75" TV on Stand/Wallmount 4K Smart', '85" TV on Stand/Wallmount 8K Smart', 'Led Standees 6x3', 'Display Standees'],
        useCases: ['Meeting Rooms', 'Reception Areas', 'Retail'],
      },
      {
        id: 'auditorium-sound-video',
        title: 'Auditorium Sound & Projection',
        description: 'Permanent D&B Q-Series speaker systems, SC48 mixers, and high-lumen laser projectors.',
        equipment: ['D&B Audiotechnik Q Series Tops', 'D&B Audiotechnik Q Series Subs', 'SC48 - 48 Channel Digital Audio Mixer', 'Panasonic 7000 Lumens Projector (Standard Lens)'],
        useCases: ['Auditoriums', 'Houses of Worship', 'Educational Institutions'],
      },
    ],
    equipment: [
      'LED Wall 1.9 Per Sq. Ft. Indoor',
      'LED Wall 2.9 Per Sq. Ft. Indoor',
      '55" TV on Stand/Wallmount 4K Smart',
      '75" TV on Stand/Wallmount 4K Smart',
      'OSL Digital Conference Mics',
      'Digital wireless Conference Mics',
      'Ahuja Conference Mics',
      '8K LED Processor',
    ],
    cta: 'Ready to upgrade your space with reliable, integrated AV technology? Contact our installations team for a site survey and proposal.',
  },
};

export const SERVICE_LIST = Object.values(SERVICES).map(s => ({
  title: s.title,
  slug: s.slug,
  hero: s.hero,
  intro: s.intro.slice(0, 120) + '...',
}));
