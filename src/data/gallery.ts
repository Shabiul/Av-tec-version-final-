export interface GalleryImage {
  src: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  project?: string;
  rotate?: number;
}

export interface GalleryVideo {
  src: string;
  poster?: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  duration?: string;
  rotate?: number;
}

/* ============================================================
   AV-TEC Official Gallery Media Collection
   Sourced from:
   - /images/       (converted DNG/HEIC → JPG + native JPG/JPEG/PNG)
   - /videos/       (MP4 only, <100 MB, no duplicates)
   - /assets/images/gallery/  (curated web-ready images)
   All duplicate files filtered out with 100% unique paths.
   ============================================================ */

export const GALLERY_IMAGES: GalleryImage[] = [
  /* ── Curated web-ready images (/assets/images/gallery/) ── */
  { src: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Main Stage Line Array', service: 'Audio Systems', equipment: 'D&B GSL Series', venue: 'Outdoor Festival' },
  { src: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Concert Lighting Rig', service: 'Stage Lighting', equipment: 'Robe MegaPointe', venue: 'Arena Show' },
  { src: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Wall — Product Launch', service: 'Video & LED Walls', equipment: 'P2.6 Indoor LED', venue: 'Corporate Launch' },
  { src: '/assets/images/gallery/ground-support-truss.jpg', title: 'Ground-Support Truss', service: 'Trussing & Rigging', equipment: 'Prolyte H40V', venue: 'Festival Ground' },
  { src: '/assets/images/gallery/foh-control-position.jpg', title: 'FOH Control Position', service: 'Tech Consultancy', equipment: 'DiGiCo SD12', venue: 'Conference' },
  { src: '/assets/images/gallery/auditorium-install.jpg', title: 'Auditorium Install', service: 'Installs & Integrations', equipment: 'Crestron / QSC', venue: 'Auditorium' },
  { src: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Wedding Stage Wash', service: 'Stage Lighting', equipment: 'Astera AX1', venue: 'Wedding' },
  { src: '/assets/images/gallery/corporate-keynote-screen.jpg', title: 'Corporate Keynote Screen', service: 'Video & LED Walls', equipment: 'Blackmagic ATEM', venue: 'Corporate' },
  { src: '/assets/images/gallery/monitor-world.jpg', title: 'Monitor World', service: 'Audio Systems', equipment: 'Shure PSM1000', venue: 'Live Concert' },
  { src: '/assets/images/gallery/festival-night-show.jpg', title: 'Festival Night Show', service: 'Stage Lighting', equipment: 'Clay Paky Sharpy', venue: 'Music Festival' },
  { src: '/assets/images/gallery/outdoor-led-screen.jpg', title: 'Outdoor LED Screen', service: 'Video & LED Walls', equipment: 'P6 Outdoor LED', venue: 'Public Event' },
  { src: '/assets/images/gallery/boardroom-av.jpg', title: 'Boardroom AV', service: 'Installs & Integrations', equipment: 'Poly Studio X', venue: 'Corporate Office' },
  { src: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Stage Front-of-House', service: 'Audio Systems', equipment: 'D&B SL Subs', venue: 'Live Event' },
  { src: '/assets/images/gallery/dj-club-setup.jpg', title: 'DJ & Club Setup', service: 'Audio Systems', equipment: 'Pioneer / D&B', venue: 'Club Night' },

  /* ── Converted DNG/HEIC → JPG from /images/ ── */
  { src: '/images/IMG_2465.jpg', title: 'Stage Setup Overview', service: 'Event Production', equipment: 'Full Production Rig', venue: 'Live Event' },
  { src: '/images/IMG_2466.jpg', title: 'Lighting Rig Build', service: 'Stage Lighting', equipment: 'Moving Head Fixtures', venue: 'Concert' },
  { src: '/images/IMG_2469.jpg', title: 'Venue Pre-Production', service: 'Event Production', equipment: 'Stage & AV Systems', venue: 'Indoor Venue' },
  { src: '/images/IMG_2475.jpg', title: 'LED Wall Panel Array', service: 'Video & LED Walls', equipment: 'Indoor LED Panels', venue: 'Corporate Event' },
  { src: '/images/IMG_2476.jpg', title: 'Line Array Hang', service: 'Audio Systems', equipment: 'Line Array Speakers', venue: 'Outdoor Festival' },
  { src: '/images/IMG_2480.jpg', title: 'Trussing Architecture', service: 'Trussing & Rigging', equipment: 'Prolyte Truss System', venue: 'Festival' },
  { src: '/images/IMG_2529.jpg', title: 'Control Room Setup', service: 'Tech Consultancy', equipment: 'Production Controls', venue: 'Live Show' },
  { src: '/images/IMG_2563.jpg', title: 'Stage Lighting Design', service: 'Stage Lighting', equipment: 'Wash & Spot Fixtures', venue: 'Concert' },
  { src: '/images/IMG_2587.jpg', title: 'Audio Console Operation', service: 'Audio Systems', equipment: 'Digital Mixing Console', venue: 'Live Event' },
  { src: '/images/IMG_2653.jpg', title: 'Event Ambience Setup', service: 'Stage Lighting', equipment: 'Ambient LED Wash', venue: 'Gala Dinner' },
  { src: '/images/IMG_2723.jpg', title: 'Speaker Array Configuration', service: 'Audio Systems', equipment: 'Point Source Speakers', venue: 'Conference' },
  { src: '/images/IMG_2728.jpg', title: 'Rigging Point Layout', service: 'Trussing & Rigging', equipment: 'Chain Hoists & Truss', venue: 'Arena' },
  { src: '/images/IMG_2729.jpg', title: 'Moving Head Programming', service: 'Stage Lighting', equipment: 'Beam & Wash Fixtures', venue: 'Concert' },
  { src: '/images/IMG_2750.jpg', title: 'Stage Design Execution', service: 'Event Production', equipment: 'Complete Stage Rig', venue: 'Awards Night' },
  { src: '/images/IMG_2753.jpg', title: 'LED Wall Content Test', service: 'Video & LED Walls', equipment: 'LED Video Processor', venue: 'Indoor Event' },
  { src: '/images/IMG_2857.jpg', title: 'Ground Support Build', service: 'Trussing & Rigging', equipment: 'Ground Support System', venue: 'Outdoor Event' },
  { src: '/images/IMG_2859.jpg', title: 'Wireless Mic Setup', service: 'Audio Systems', equipment: 'Wireless Microphones', venue: 'Corporate' },
  { src: '/images/IMG_2861.jpg', title: 'Stage Wash Lighting', service: 'Stage Lighting', equipment: 'LED Wash Panels', venue: 'Wedding' },
  { src: '/images/IMG_3070.jpg', title: 'Production Console View', service: 'Event Production', equipment: 'Stage & Lighting', venue: 'Live Show' },
  { src: '/images/IMG_3071.jpg', title: 'Monitor Engineering', service: 'Audio Systems', equipment: 'Monitor Console', venue: 'Live Concert' },
  { src: '/images/IMG_3077.jpg', title: 'Screen Display Setup', service: 'Video & LED Walls', equipment: 'LED Video Wall', venue: 'Product Launch' },
  { src: '/images/IMG_3131.jpg', title: 'Backstage Production', service: 'Event Production', equipment: 'Backstage Systems', venue: 'Live Show' },
  { src: '/images/IMG_3133.jpg', title: 'Stage Spot Focus', service: 'Stage Lighting', equipment: 'Follow Spot', venue: 'Theatre' },
  { src: '/images/IMG_3134.jpg', title: 'Sound Reinforcement', service: 'Audio Systems', equipment: 'Professional Audio', venue: 'Venue Install' },
  { src: '/images/IMG_3251.jpg', title: 'Event Space Overview', service: 'Event Production', equipment: 'Full AV Setup', venue: 'Conference Hall' },
  { src: '/images/IMG_3760.jpg', title: 'Audio Distribution', service: 'Audio Systems', equipment: 'Signal Distribution', venue: 'Live Event' },
  { src: '/images/IMG_3813.jpg', title: 'Concert Stage Panorama', service: 'Event Production', equipment: 'Full Concert Rig', venue: 'Concert' },
  { src: '/images/IMG_3833.jpg', title: 'Festival Arena View', service: 'Event Production', equipment: 'Full Production', venue: 'Music Festival' },
  { src: '/images/IMG_3834.jpg', title: 'Spotlight Operator View', service: 'Stage Lighting', equipment: 'Spot Operator Deck', venue: 'Awards Show' },
  { src: '/images/IMG_3838.jpg', title: 'PA System Deployment', service: 'Audio Systems', equipment: 'PA System', venue: 'Outdoor Event' },
  { src: '/images/IMG_3842.jpg', title: 'Video Control Room', service: 'Video & LED Walls', equipment: 'Video Switching', venue: 'Live Broadcast' },
  { src: '/images/IMG_3974.jpg', title: 'Truss Motor Operation', service: 'Trussing & Rigging', equipment: 'Chain Motor System', venue: 'Arena' },
  { src: '/images/IMG_3979.jpg', title: 'Stage Left Audio', service: 'Audio Systems', equipment: 'Side Fill Speakers', venue: 'Live Event' },
  { src: '/images/IMG_3980.jpg', title: 'Front Truss Rigging', service: 'Trussing & Rigging', equipment: 'Front Truss', venue: 'Concert' },
  { src: '/images/IMG_3998.jpg', title: 'LED Panel Installation', service: 'Video & LED Walls', equipment: 'LED Panel Modules', venue: 'Corporate' },
  { src: '/images/IMG_3999.jpg', title: 'Signal Processing Rack', service: 'Audio Systems', equipment: 'DSP & Processing', venue: 'Live Event' },
  { src: '/images/IMG_4020.jpg', title: 'Lighting Console Setup', service: 'Stage Lighting', equipment: 'Lighting Console', venue: 'Theatre' },
  { src: '/images/IMG_4059.jpg', title: 'Corporate AV Setup', service: 'Installs & Integrations', equipment: 'Presentation Systems', venue: 'Corporate' },
  { src: '/images/IMG_4077.jpg', title: 'Power Distribution', service: 'Tech Consultancy', equipment: 'Power Distribution', venue: 'Event Site' },
  { src: '/images/IMG_4128.jpg', title: 'Subwoofer Array', service: 'Audio Systems', equipment: 'Subwoofer Stack', venue: 'Festival' },
  { src: '/images/IMG_4161.jpg', title: 'Moving Head Array', service: 'Stage Lighting', equipment: 'Moving Heads', venue: 'Concert' },
  { src: '/images/IMG_4191.jpg', title: 'Truss Corner Detail', service: 'Trussing & Rigging', equipment: 'Truss Connections', venue: 'Indoor Event' },
  { src: '/images/IMG_4216.jpg', title: 'Crowd Lighting Effects', service: 'Stage Lighting', equipment: 'Audience Blinders', venue: 'Concert' },
  { src: '/images/IMG_4260.jpg', title: 'Speaker Hang Process', service: 'Audio Systems', equipment: 'Line Array Rigging', venue: 'Arena' },
  { src: '/images/IMG_4282.jpg', title: 'Dimmer Rack Setup', service: 'Stage Lighting', equipment: 'Dimmer System', venue: 'Theatre' },
  { src: '/images/IMG_4295.jpg', title: 'Stage Design Blueprint', service: 'Tech Consultancy', equipment: 'CAD Design', venue: 'Pre-Production' },
  { src: '/images/IMG_4296.jpg', title: 'FOH Mix Position', service: 'Audio Systems', equipment: 'FOH Console', venue: 'Live Concert' },
  { src: '/images/IMG_4342.jpg', title: 'Lighting Truss Load', service: 'Trussing & Rigging', equipment: 'Lighting Truss', venue: 'Arena' },
  { src: '/images/IMG_4370.jpg', title: 'Laser Show Setup', service: 'Stage Lighting', equipment: 'Laser Fixtures', venue: 'Concert' },
  { src: '/images/IMG_4517.jpg', title: 'LED Content Mapping', service: 'Video & LED Walls', equipment: 'Content Mapping', venue: 'Product Launch' },
  { src: '/images/IMG_4571.jpg', title: 'Haze & Effect Lighting', service: 'Stage Lighting', equipment: 'Haze Machine & Beams', venue: 'Concert' },
  { src: '/images/IMG_4574.jpg', title: 'Follow Spot Booth', service: 'Stage Lighting', equipment: 'Follow Spot', venue: 'Theatre' },
  { src: '/images/IMG_4623.jpg', title: 'Main PA Stack', service: 'Audio Systems', equipment: 'PA Stack System', venue: 'Outdoor Festival' },
  { src: '/images/IMG_4804.jpg', title: 'Corporate Stage Design', service: 'Event Production', equipment: 'Corporate Stage', venue: 'Conference' },
  { src: '/images/IMG_4805.jpg', title: 'LED Backdrop Display', service: 'Video & LED Walls', equipment: 'LED Backdrop', venue: 'Awards Night' },
  { src: '/images/IMG_5389.jpg', title: 'Sound System Test', service: 'Audio Systems', equipment: 'System Tuning', venue: 'Venue' },
  { src: '/images/IMG_5524.jpg', title: 'Wireless IEM Setup', service: 'Audio Systems', equipment: 'In-Ear Monitors', venue: 'Live Concert' },
  { src: '/images/IMG_5530.jpg', title: 'Audio Multicore Run', service: 'Audio Systems', equipment: 'Multicore Cable', venue: 'Festival' },
  { src: '/images/IMG_5563.jpg', title: 'Compact LED Screen', service: 'Video & LED Walls', equipment: 'Portable LED', venue: 'Corporate' },
  { src: '/images/IMG_5574.jpg', title: 'Truss Grid Overview', service: 'Trussing & Rigging', equipment: 'Overhead Grid', venue: 'Arena' },
  { src: '/images/IMG_5579.jpg', title: 'Colour Wash Design', service: 'Stage Lighting', equipment: 'RGB Wash Fixtures', venue: 'Gala Dinner' },
  { src: '/images/IMG_5603.jpg', title: 'Delay Tower Setup', service: 'Audio Systems', equipment: 'Delay Towers', venue: 'Outdoor Event' },
  { src: '/images/IMG_5606.jpg', title: 'Lighting Pre-Program', service: 'Stage Lighting', equipment: 'Console & Visualiser', venue: 'Pre-Production' },
  { src: '/images/IMG_5615.jpg', title: 'Stage Extension Build', service: 'Trussing & Rigging', equipment: 'Stage Extension', venue: 'Concert' },
  { src: '/images/IMG_5617.jpg', title: 'Scenic LED Integration', service: 'Video & LED Walls', equipment: 'Scenic LED Panels', venue: 'Awards Night' },
  { src: '/images/IMG_5749.jpg', title: 'Event Power Systems', service: 'Tech Consultancy', equipment: 'Power Distribution', venue: 'Event Site' },
  { src: '/images/IMG_5754.jpg', title: 'Amp Rack Wiring', service: 'Audio Systems', equipment: 'Amplifier Rack', venue: 'Venue' },
  { src: '/images/IMG_5947.jpg', title: 'Stage Reveal Moment', service: 'Event Production', equipment: 'Full Show Production', venue: 'Concert' },
  { src: '/images/IMG_5993.jpg', title: 'LED Wall Close-Up', service: 'Video & LED Walls', equipment: 'LED Module Detail', venue: 'Exhibition' },
  { src: '/images/IMG_6336.jpg', title: 'Outdoor Stage Lighting', service: 'Stage Lighting', equipment: 'Outdoor Wash', venue: 'Festival' },
  { src: '/images/IMG_6364.jpg', title: 'Cable Bridge Layout', service: 'Tech Consultancy', equipment: 'Cable Management', venue: 'Outdoor Event' },
  { src: '/images/IMG_6367.jpg', title: 'Stage Draping', service: 'Event Production', equipment: 'Stage Drapes', venue: 'Wedding' },
  { src: '/images/IMG_6368.jpg', title: 'Monitor Desk Setup', service: 'Audio Systems', equipment: 'Monitor Console', venue: 'Concert' },
  { src: '/images/IMG_6370.jpg', title: 'Warm Stage Ambience', service: 'Stage Lighting', equipment: 'Warm LED Fixtures', venue: 'Gala' },
  { src: '/images/IMG_6484.jpg', title: 'Large Format LED Wall', service: 'Video & LED Walls', equipment: 'Large LED Display', venue: 'Exhibition' },
  { src: '/images/IMG_6485.jpg', title: 'Immersive LED Setup', service: 'Video & LED Walls', equipment: 'Immersive Display', venue: 'Product Launch' },
  { src: '/images/IMG_6544.jpg', title: 'Lighting Check', service: 'Stage Lighting', equipment: 'Light Focus Check', venue: 'Theatre' },
  { src: '/images/IMG_6731.jpg', title: 'Stage Panoramic', service: 'Event Production', equipment: 'Full Stage View', venue: 'Concert' },
  { src: '/images/IMG_6775.jpg', title: 'Audio Tech Workspace', service: 'Audio Systems', equipment: 'Tech Table Setup', venue: 'Venue' },
  { src: '/images/IMG_7032.jpg', title: 'Arena Production View', service: 'Event Production', equipment: 'Arena AV Systems', venue: 'Arena Show' },
  { src: '/images/IMG_7035.jpg', title: 'Sound Check Session', service: 'Audio Systems', equipment: 'Sound Check', venue: 'Concert' },
  { src: '/images/IMG_7273.jpg', title: 'Aerial Stage View', service: 'Event Production', equipment: 'Aerial Perspective', venue: 'Festival' },
  { src: '/images/IMG_7301.jpg', title: 'Concert Ready Stage', service: 'Event Production', equipment: 'Show-Ready Stage', venue: 'Concert' },
  { src: '/images/IMG_7390.jpg', title: 'VIP Lounge AV', service: 'Installs & Integrations', equipment: 'Lounge AV System', venue: 'VIP Area' },
  { src: '/images/IMG_7628.jpg', title: 'Pre-Show Stage View', service: 'Event Production', equipment: 'Pre-Show Setup', venue: 'Concert' },
  { src: '/images/IMG_7631.jpg', title: 'Backstage Audio Rack', service: 'Audio Systems', equipment: 'Amp & DSP Rack', venue: 'Concert' },
  { src: '/images/IMG_7640.jpg', title: 'Post-Show Stage', service: 'Event Production', equipment: 'Strike & Load-Out', venue: 'Concert' },

  /* ── Native JPG/JPEG/PNG from /images/ ── */
  { src: '/images/IMG_3202.JPG.jpeg', title: 'Structural Rigging', service: 'Trussing & Rigging', equipment: 'Structural Rigging', venue: 'Event Setup' },
  { src: '/images/IMG_3727.JPG.jpeg', title: 'Wedding Stage Lighting', service: 'Stage Lighting', equipment: 'Decorative Lighting', venue: 'Wedding' },
  { src: '/images/IMG_4064.JPG.jpeg', title: 'Corporate Keynote Rig', service: 'Installs & Integrations', equipment: 'Presentation Systems', venue: 'Corporate' },
  { src: '/images/IMG_4350.JPG.jpeg', title: 'FOH Sound Operations', service: 'Audio Systems', equipment: 'FOH & Monitor', venue: 'Live Concert' },
  { src: '/images/IMG_4631.JPG.jpeg', title: 'LED Backdrop Build', service: 'Video & LED Walls', equipment: 'LED Backdrop Panel', venue: 'Corporate Event' },
  { src: '/images/IMG_4736.JPG.jpeg', title: 'Outdoor Event Stage', service: 'Event Production', equipment: 'Outdoor Stage', venue: 'Public Event' },
  { src: '/images/IMG_7287.JPG.jpeg', title: 'Concert Night View', service: 'Event Production', equipment: 'Full Show', venue: 'Arena' },
  { src: '/images/IMG_7323.JPG.jpeg', title: 'Audience Perspective', service: 'Event Production', equipment: 'Show View', venue: 'Concert' },
  { src: '/images/IMG_7391.JPG.jpeg', title: 'Stage Sideview', service: 'Event Production', equipment: 'Stage Layout', venue: 'Concert' },
  { src: '/images/IMG_7388.PNG', title: 'Technical Drawing', service: 'Tech Consultancy', equipment: 'CAD Layout', venue: 'Pre-Production' },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  /* ── MP4 videos from /videos/ (under 100MB, no duplicates) ── */
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20231120-WA0008.mp4', title: 'Destination Wedding Stage Wash', service: 'Stage Lighting', equipment: 'Astera AX1 Wireless Lights', duration: '1:15' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240109-WA0001.mp4', title: 'Corporate Launch Presentation', service: 'Video & LED Walls', equipment: 'ATEM Switching & Video Wall', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240223-WA0024.mp4', title: 'Stage Lighting Timecode Sequence', service: 'Stage Lighting', equipment: 'Clay Paky Sharpy Fixtures', duration: '1:45' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240223-WA0026.mp4', title: 'Ground Support Trussing Load-In', service: 'Trussing & Rigging', equipment: 'CM Lodestar Hoists & Truss', duration: '2:20' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240224-WA0017.mp4', title: 'FOH Soundcheck Session', service: 'Audio Systems', equipment: 'DiGiCo Console & Line Array', duration: '1:10' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240224-WA0022.mp4', title: 'Stage Monitor Tuning', service: 'Audio Systems', equipment: 'Wedge Monitor Setup', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240505-WA0008.mp4', title: 'Outdoor Music Festival Highlights', service: 'Event Production', equipment: 'Complete Festival AV Rig', duration: '2:15' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240505-WA0009.mp4', title: 'P2.5 Outdoor LED Wall Playback', service: 'Video & LED Walls', equipment: 'P2.5 Outdoor LED Video Screen', duration: '2:50' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240505-WA0010.mp4', title: 'Moving Head Beam Effects', service: 'Stage Lighting', equipment: 'Robe MegaPointe Beams', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20240921-WA0011.mp4', title: 'Show Control & Calling Center', service: 'Tech Consultancy', equipment: 'Central Show Control Desk', duration: '1:50' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20241112-WA0000.mp4', title: 'Permanent AV System Commissioning', service: 'Installs & Integrations', equipment: 'Auditorium AV Setup', duration: '2:10' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20241123-WA0004.mp4', title: 'Stage Lighting & Ambience Warmup', service: 'Stage Lighting', equipment: 'Warm LED Wash Fixtures', duration: '1:20' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20241123-WA0006.mp4', title: 'Corporate Boardroom System Test', service: 'Installs & Integrations', equipment: 'Poly Studio & Crestron', duration: '1:05' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20241123-WA0009.mp4', title: 'Monitor Console Wireless Coordination', service: 'Audio Systems', equipment: 'Shure Axient Digital Mics', duration: '1:40' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20241129-WA0000.mp4', title: 'Audio System Power-Up Test', service: 'Audio Systems', equipment: 'Amplifier Startup', duration: '0:45' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20241129-WA0001.mp4', title: 'LED Screen Signal Verification', service: 'Video & LED Walls', equipment: 'LED Signal Test', duration: '1:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20260402-WA0017.mp4', title: 'Corporate Event Stage Setup', service: 'Event Production', equipment: 'Stage & AV Build', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20260523-WA0012.mp4', title: 'Wedding Lighting Reveal', service: 'Stage Lighting', equipment: 'Wedding Lighting Rig', duration: '1:15' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20260625-WA0011.mp4', title: 'Festival Stage Night Show', service: 'Event Production', equipment: 'Festival Night Rig', duration: '3:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20260701-WA0001.mp4', title: 'Audio Cable Run Timelapse', service: 'Audio Systems', equipment: 'Cable Infrastructure', duration: '0:50' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID-20260701-WA0002.mp4', title: 'Truss Assembly Timelapse', service: 'Trussing & Rigging', equipment: 'Truss Build', duration: '1:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/IMG_6585.MP4', title: 'Lighting & Truss System Demo', service: 'Stage Lighting', equipment: 'Robe Moving Heads & Prolyte Truss', duration: '2:10' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/IMG_6167.MP4', title: 'LED Wall Content Playback', service: 'Video & LED Walls', equipment: 'LED Wall System', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/IMG_7355.MP4', title: 'Concert Light Show', service: 'Stage Lighting', equipment: 'Moving Head Show', duration: '2:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/IMG_2552.MP4', title: 'Full Event Production Walkthrough', service: 'Event Production', equipment: 'Complete AV Setup', duration: '5:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_112481231_001117_930.mp4', title: 'Stage Lighting Test Sequence', service: 'Stage Lighting', equipment: 'Moving Head Test', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_140450716_172943_169.mp4', title: 'Audio System Calibration', service: 'Audio Systems', equipment: 'System Tuning', duration: '1:45' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20211127_020914.mp4', title: 'Arena Concert Production', service: 'Event Production', equipment: 'Full Arena Rig', duration: '3:10' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220419_230555.mp4', title: 'Product Launch Stage Production', service: 'Video & LED Walls', equipment: 'LED Walls & Lighting', duration: '3:40' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220513_200910.mp4', title: 'Destination Wedding Night Production', service: 'Stage Lighting', equipment: 'Ambient Wash & Spotlights', duration: '2:25' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220514_102256.mp4', title: 'Corporate Conference Morning Setup', service: 'Video & LED Walls', equipment: 'Conference AV Systems', duration: '2:15' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220514_110326.mp4', title: 'FOH Desk Audio Calibration', service: 'Audio Systems', equipment: 'Digital Mixing Console', duration: '2:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220514_215550.mp4', title: 'Lighting Strobe & Laser Show', service: 'Stage Lighting', equipment: 'Strobe & Laser Rig', duration: '2:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220715_101545.mp4', title: 'Rigging Safety & Load Inspection', service: 'Trussing & Rigging', equipment: 'Rigging Hardware', duration: '3:15' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220806_072641.mp4', title: 'Outdoor Screen Sunrise Test', service: 'Video & LED Walls', equipment: 'Outdoor P3.9 LED', duration: '2:10' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220806_072719.mp4', title: 'Stage Sound System Power-Up', service: 'Audio Systems', equipment: 'Power Amplifiers & Subs', duration: '2:40' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20230808_223814.mp4', title: 'Night Show Full Production', service: 'Event Production', equipment: 'Night Show Rig', duration: '2:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20240316_170145.mp4', title: 'Daylight LED Wall Test', service: 'Video & LED Walls', equipment: 'Outdoor LED Panel', duration: '2:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_207590509_235404_853.mp4', title: 'Beam Effect Choreography', service: 'Stage Lighting', equipment: 'Beam Fixtures', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_236470801_043607_994.mp4', title: 'Stage Light Chase Pattern Test', service: 'Stage Lighting', equipment: 'Moving Head Fixtures', duration: '1:25' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_241460317_020746_261.mp4', title: 'LED Video Processor Signal Check', service: 'Video & LED Walls', equipment: 'Video Processor', duration: '1:30' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_35540514_070109_776.mp4', title: 'Festival Load-In Timelapse', service: 'Event Production', equipment: 'Load-In & Build', duration: '1:45' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_784691004_031135_704.mp4', title: 'Concert Full Show Recording', service: 'Event Production', equipment: 'Full Concert Production', duration: '3:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_83180428_103514_355.mp4', title: 'Moving Head Pan & Tilt Demo', service: 'Stage Lighting', equipment: 'Moving Head Demo', duration: '1:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_83471107_143512_749.mp4', title: 'LED Wall Colour Test', service: 'Video & LED Walls', equipment: 'LED Colour Calibration', duration: '0:50' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_85011123_203826_051.mp4', title: 'Ambient Lighting Walkthrough', service: 'Stage Lighting', equipment: 'Ambient Fixtures', duration: '1:00' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_99750223_110046_285.mp4', title: 'Truss Ground Support Assembly', service: 'Trussing & Rigging', equipment: 'Ground Support', duration: '1:15' },
  { src: 'https://y7qdpgw8oz5b5h2o.public.blob.vercel-storage.com/videos/VID_20220514_215833.mp4', title: 'Live Festival Crowd Audio', service: 'Audio Systems', equipment: 'D&B Line Array', duration: '3:50' },
];
