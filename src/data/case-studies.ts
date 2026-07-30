export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  date: string;
  city: string;
  services: string[];
  equipment: string[];
  audience: string;
  duration: string;
  heroImage: string;
  images: string[];
  video?: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: { quote: string; name: string; role: string };
}

/* ============================================================
   EDIT HERE — example case studies (proof of work).
   Swap in real client names, dates, and results when ready.
   ============================================================ */

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'festival-main-stage',
    title: 'Festival Main-Stage Sound',
    client: 'City Music Festival',
    date: '2024',
    city: 'Bengaluru',
    services: ['Audio Systems', 'Trussing & Rigging'],
    equipment: ['D&B GSL Line Array', 'DiGiCo SD7', 'Prolyte Roof System', 'CM Lodestar Hoists'],
    audience: '25,000+',
    duration: '3 days',
    heroImage: '/images/IMG_4001.jpg',
    images: [
      '/images/IMG_4001.jpg',
      '/images/IMG_3998.jpg',
      '/images/IMG_4072.jpg',
      '/images/IMG_4064.JPG.jpeg',
    ],
    challenge: 'Deliver even, high-SPL coverage across a 25,000-capacity open ground with a tight overnight build window and unpredictable monsoon weather.',
    solution: 'A D&B GSL main hang with delay towers designed in ArrayCalc, weather-protected under a Prolyte roof, with fully redundant FOH and monitor consoles.',
    results: ['Even coverage front-to-back with no dead zones', 'Zero downtime across three show days', 'Sub-8-hour overnight rig and soundcheck'],
    testimonial: { quote: 'Highly Professional and technically sound... Never met an event manager with such a performa and Brilliance in India. Highly recommended for all international events...', name: 'Raj vinod kumar', role: 'Local Guide' },
  },
  {
    slug: 'corporate-product-launch',
    title: 'LED Wall Product Launch',
    client: 'National Consumer Brand',
    date: '2024',
    city: 'Mumbai',
    services: ['Video & LED Walls', 'Stage Lighting'],
    equipment: ['P2.6 Indoor LED', 'Blackmagic ATEM', 'Robe MegaPointe', 'Disguise Media Server'],
    audience: '1,200',
    duration: '1 day',
    heroImage: '/images/image.png',
    images: [
      '/images/IMG_3727.JPG.jpeg',
      '/images/image.png',
    ],
    challenge: 'Create a premium reveal moment on a fine-pitch LED wall with pixel-perfect content playback and live camera IMAG for a launch keynote.',
    solution: 'A seamless P2.6 indoor wall driven by a Disguise media server, ATEM switching for IMAG, and a moving-light rig timecoded to the show.',
    results: ['Flawless content playback with no frame drops', 'Broadcast-grade IMAG for the room and livestream', 'Premium first impression from doors-open'],
    testimonial: { quote: 'In the two installations I worked on, I had the pleasure of collaborating with Avtec, and I can highly recommend them. They are punctual and efficient, understand the processes thoroughly, and went above and beyond.', name: 'Firat SHADÉ', role: 'Client' },
  },
  {
    slug: 'corporate-conference',
    title: 'Multi-Day Corporate Conference',
    client: 'Enterprise Summit',
    date: '2023',
    city: 'Hyderabad',
    services: ['Audio Systems', 'Video & LED Walls'],
    equipment: ['Yamaha RIVAGE PM', 'Shure Axient Digital', 'PTZ Camera System', 'Dante Network'],
    audience: '800',
    duration: '3 days',
    heroImage: '/images/IMG_4296.jpg',
    images: [
      '/images/IMG_4296.jpg',
      '/images/IMG_4320.jpg',
      '/images/IMG_4340.jpg',
      '/images/IMG_4370.jpg',
      '/images/IMG_4571.jpg',
      '/images/IMG_4736.JPG.jpeg',
      '/images/IMG_5389.jpg',
    ],
    challenge: 'Run three parallel breakout rooms plus a main plenary with reliable wireless mics and clean show-calling across a packed agenda.',
    solution: 'Networked Dante audio across rooms, coordinated Axient Digital RF, and a calm central show-call position feeding every space.',
    results: ['Zero RF dropouts across 40+ wireless channels', 'On-time transitions for every session', 'One integrated crew across all rooms'],
    testimonial: { quote: 'Highly Professional and technically sound... Never met an event manager with such a performa and Brilliance in India.', name: 'Ramesh M', role: 'Client' },
  },
  {
    slug: 'trussing-rigging-production',
    title: 'Trussing & Rigging Production',
    client: 'Event Production Client',
    date: '2023',
    city: 'Goa',
    services: ['Trussing & Rigging', 'Stage Lighting'],
    equipment: ['Prolyte H40V Roof Grid', 'CM Lodestar Hoists', 'Ground Support Truss', 'Clay Paky Sharpy'],
    audience: '600',
    duration: '2 days',
    heroImage: '/images/IMG_2529.jpg',
    images: [
      '/images/IMG_2529.jpg',
      '/images/IMG_6544.jpg',
    ],
    challenge: 'Construct a certified ground-support trussing structure and roof grid for an outdoor venue with real-time load monitoring.',
    solution: 'Engineered Prolyte H40V truss grid hoisted by CM Lodestar motors, featuring Broadweigh load cells and integrated lighting hangs.',
    results: ['100% certified structural safety and load compliance', 'Flawless load-in and rigging elevation', 'Weather-resistant roof protection for stage and gear'],
    testimonial: { quote: 'Top-tier structural rigging and dependable technical execution throughout the event.', name: 'M. Suresh Kanthan', role: 'Event Director' },
  },
];

