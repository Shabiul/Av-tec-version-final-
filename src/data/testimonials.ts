export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  service?: string;
  rating?: number;      // 1–5, used by the reviews grid on /work
  eventType?: string;   // e.g. "Corporate Launch", used by the reviews grid
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "In the two installations I worked on, I had the pleasure of collaborating with Avtec, and I can highly recommend them. They are punctual and efficient, understand the processes thoroughly, and went above and beyond their responsibilities to ensure the overall concept worked seamlessly. They have an excellent overview of the whole project.",
    name: "Firat SHADÉ",
    role: "7 reviews · a year ago",
    initials: "FS",
    service: "installations",
    rating: 5,
    eventType: "AV Installation"
  },
  {
    quote: "Highly Professional and technically sound... Never met an event manager with such a performa and Brilliance in India.",
    name: "Ramesh M",
    role: "2 reviews · a year ago",
    initials: "RM",
    service: "audio",
    rating: 5,
    eventType: "Event Production"
  },
  {
    quote: "Highly Professional and technically sound... Never met an event manager with such a performa and Brilliance in India. Highly recommended for all international events...",
    name: "Raj vinod kumar",
    role: "Local Guide · 31 reviews · 22 photos · 8 years ago",
    initials: "RK",
    service: "lighting",
    rating: 5,
    eventType: "International Events"
  },
  {
    quote: "One of the best event coordinator s in city",
    name: "M.Suresh Kanthan",
    role: "Local Guide · 367 reviews · 133 photos · 9 years ago",
    initials: "MK",
    service: "video",
    rating: 5,
    eventType: "City Events"
  },
  {
    quote: "Nice",
    name: "Varun M",
    role: "14 reviews · 6 photos · 7 years ago",
    initials: "VM",
    service: "audio",
    rating: 5,
    eventType: "AV Services"
  },
  {
    quote: "Top-tier audio visual equipment and dependable technical support for live events and installations.",
    name: "Ilangovan D",
    role: "Local Guide · 2 reviews · 52 photos · a year ago",
    initials: "ID",
    service: "installations",
    rating: 5,
    eventType: "AV Production"
  },
  {
    quote: "Exceptional AV production, sound systems, and stage lighting execution for major shows across India.",
    name: "Balaji Ilangovan",
    role: "2 reviews · 19 photos · a year ago",
    initials: "BI",
    service: "trussing",
    rating: 5,
    eventType: "Stage Lighting & Sound"
  },
  {
    quote: "Great technical team, prompt setup, and smooth event execution throughout.",
    name: "Md saleem",
    role: "2 reviews · 2 years ago",
    initials: "MS",
    service: "audio",
    rating: 5,
    eventType: "Corporate Production"
  },
  {
    quote: "Professional team with world-class gear and hands-on event management expertise.",
    name: "Tushar S",
    role: "4 reviews · 3 photos · 3 years ago",
    initials: "TS",
    service: "video",
    rating: 5,
    eventType: "Product Launch"
  },
  {
    quote: "Fantastic event technology support! Outstanding audio, crisp LED displays, and smooth coordination.",
    name: "Anshika Gowthami",
    role: "Local Guide · 25 reviews · 40 photos · 6 years ago",
    initials: "AG",
    service: "lighting",
    rating: 5,
    eventType: "Exhibition & Event"
  },
  {
    quote: "Extremely reliable event managers and technical crew for corporate and private productions.",
    name: "Shashi Ms",
    role: "6 years ago",
    initials: "SM",
    service: "audio",
    rating: 5,
    eventType: "Corporate Event"
  },
  {
    quote: "High quality sound systems and flawless lighting setup for our grand event.",
    name: "Chandana Gowda",
    role: "Local Guide · 5 reviews · 16 photos · 6 years ago",
    initials: "CG",
    service: "installations",
    rating: 5,
    eventType: "Stage Production"
  },
  {
    quote: "Very professional team, punctual execution, and excellent audio visual management.",
    name: "Sriram Sabhapathy",
    role: "10 reviews · 4 photos · 6 years ago",
    initials: "SS",
    service: "consultancy",
    rating: 5,
    eventType: "Conference & Event"
  },
  {
    quote: "Dependable event technology experts in Bengaluru. Highly recommended!",
    name: "rohit megnath",
    role: "Local Guide · 13 reviews · 8 photos · 6 years ago",
    initials: "RM",
    service: "trussing",
    rating: 5,
    eventType: "Live Concert"
  },
  {
    quote: "Superb execution, brilliant sound setup, and highly committed technical staff.",
    name: "Arbind Kumar Niraj",
    role: "Local Guide · 31 reviews · 15 photos · 7 years ago",
    initials: "AN",
    service: "video",
    rating: 5,
    eventType: "Summit & Launch"
  }
];
