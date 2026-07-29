export interface GalleryImage {
  src: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  project?: string;
}

export interface GalleryVideo {
  src: string;
  poster: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  duration?: string;
}

/* ============================================================
   AV-TEC Official Gallery Media Collection
   Sourced from:
   - /A V TEC VIDEOS AND IMAGES/
   - /A V TEC VIDEOS AND IMAGES copy/
   - /assets/images/gallery/
   All duplicate files filtered out with 100% unique paths.
   ============================================================ */

export const GALLERY_IMAGES: GalleryImage[] = [
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
  { src: '/assets/images/gallery/roof-rigging-build.jpg', title: 'Roof & Rigging Build', service: 'Trussing & Rigging', equipment: 'CM Lodestar Hoists', venue: 'Concert' },
  { src: '/assets/images/gallery/boardroom-av.jpg', title: 'Boardroom AV', service: 'Installs & Integrations', equipment: 'Poly Studio X', venue: 'Corporate Office' },
  { src: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Stage Front-of-House', service: 'Audio Systems', equipment: 'D&B SL Subs', venue: 'Live Event' },
  { src: '/assets/images/gallery/dj-club-setup.jpg', title: 'DJ & Club Setup', service: 'Audio Systems', equipment: 'Pioneer / D&B', venue: 'Club Night' },
  { src: '/assets/images/gallery/IMG_2465.jpg', title: 'Stage Setup Details', service: 'Event Production', equipment: 'Full Production Rig', venue: 'Live Event' },
  { src: '/assets/images/gallery/IMG_2466.jpg', title: 'Lighting Rig Build', service: 'Stage Lighting', equipment: 'Moving Head Fixtures', venue: 'Concert' },
  { src: '/assets/images/gallery/IMG_2475.jpg', title: 'LED Wall Panel Array', service: 'Video & LED Walls', equipment: 'Indoor LED Panels', venue: 'Corporate Event' },
  { src: '/assets/images/gallery/IMG_2476.jpg', title: 'Line Array Hang', service: 'Audio Systems', equipment: 'Line Array Speakers', venue: 'Outdoor Festival' },
  { src: '/assets/images/gallery/IMG_2480.jpg', title: 'Trussing Architecture', service: 'Trussing & Rigging', equipment: 'Prolyte Truss System', venue: 'Festival' },
  { src: '/assets/images/gallery/IMG_2542.jpg', title: 'Corporate Stage AV', service: 'Installs & Integrations', equipment: 'Conference Room AV', venue: 'Corporate Office' },
  { src: '/assets/images/gallery/IMG_3070.jpg', title: 'Production Console View', service: 'Event Production', equipment: 'Stage & Lighting', venue: 'Live Show' },
  { src: '/assets/images/gallery/IMG_3077.jpg', title: 'Screen Display Setup', service: 'Video & LED Walls', equipment: 'LED Video Wall', venue: 'Product Launch' },
  { src: '/assets/images/gallery/IMG_3131.jpg', title: 'Stage Lighting Wash', service: 'Stage Lighting', equipment: 'Moving Lights & Wash', venue: 'Concert' },
  { src: '/assets/images/gallery/IMG_3134.jpg', title: 'Sound Reinforcement', service: 'Audio Systems', equipment: 'Professional Audio', venue: 'Venue Install' },
  { src: '/assets/images/gallery/IMG_3202.jpg', title: 'Structural Rigging', service: 'Trussing & Rigging', equipment: 'Structural Rigging', venue: 'Event Setup' },
  { src: '/assets/images/gallery/IMG_3636.jpg', title: 'Fine Pitch LED Display', service: 'Video & LED Walls', equipment: 'Fine Pitch LED', venue: 'Indoor Event' },
  { src: '/assets/images/gallery/IMG_3727.jpg', title: 'Wedding Stage Lighting', service: 'Stage Lighting', equipment: 'Decorative Lighting', venue: 'Wedding' },
  { src: '/assets/images/gallery/IMG_3833.jpg', title: 'Festival Arena View', service: 'Event Production', equipment: 'Full Production', venue: 'Music Festival' },
  { src: '/assets/images/gallery/IMG_4064.jpg', title: 'Corporate Keynote Rig', service: 'Installs & Integrations', equipment: 'Presentation Systems', venue: 'Corporate' },
  { src: '/assets/images/gallery/IMG_4350.jpg', title: 'FOH Sound Operations', service: 'Audio Systems', equipment: 'FOH & Monitor', venue: 'Live Concert' },
  { src: '/assets/images/gallery/IMG_6586.jpg', title: 'AV Inventory Inspection', service: 'Sales & Distribution', equipment: 'AV Equipment', venue: 'Warehouse' },
  { src: '/assets/images/gallery/IMG_6587.jpg', title: 'Gear Quality Check', service: 'Sales & Distribution', equipment: 'AV Gear Detail', venue: 'Inventory' },
  { src: '/assets/images/gallery/IMG_6588.jpg', title: 'Signal Distribution Distribution', service: 'Tech Consultancy', equipment: 'Signal Distribution', venue: 'Technical Setup' },
  { src: '/assets/images/gallery/IMG_6589.jpg', title: 'Server & Processor Rack', service: 'Installs & Integrations', equipment: 'Equipment Rack', venue: 'Installation' },
  { src: '/assets/images/gallery/IMG_6590.jpg', title: 'Master Console Interface', service: 'Tech Consultancy', equipment: 'Control System', venue: 'Technical' },
  { src: '/assets/images/gallery/IMG_7323.jpg', title: 'Stage Ambience Wash', service: 'Stage Lighting', equipment: 'Wash Fixtures', venue: 'Event' },
  { src: '/assets/images/gallery/IMG_7388.PNG', title: 'System Schematic Diagram', service: 'Tech Consultancy', equipment: 'System Design', venue: 'Planning' },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { src: '/A V TEC VIDEOS AND IMAGES/IMG_6167.MP4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Live Concert Stage Visuals', service: 'Event Production', equipment: 'LED Wall & Moving Head Lights', duration: '1:45' },
  { src: '/A V TEC VIDEOS AND IMAGES/IMG_6585.MP4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting & Truss System Demo', service: 'Stage Lighting', equipment: 'Robe Moving Heads & Prolyte Truss', duration: '2:10' },
  { src: '/A V TEC VIDEOS AND IMAGES/IMG_7355.MP4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Sound System Frequency Tuning', service: 'Audio Systems', equipment: 'D&B Audiotechnik Line Array', duration: '1:30' },
  { src: '/A V TEC VIDEOS AND IMAGES/VID_20220320_215103.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Grand Festival Arena Production', service: 'Event Production', equipment: 'Complete Production & Rigging', duration: '3:45' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/IMG_2552.MP4', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Corporate Keynote Video Wall', service: 'Video & LED Walls', equipment: 'P2.6 High-Res LED Screen', duration: '2:00' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20231120-WA0008.mp4', poster: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Destination Wedding Stage Wash', service: 'Stage Lighting', equipment: 'Astera AX1 Wireless Lights', duration: '1:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240109-WA0001.mp4', poster: '/assets/images/gallery/corporate-keynote-screen.jpg', title: 'Corporate Launch Presentation', service: 'Video & LED Walls', equipment: 'ATEM Switching & Video Wall', duration: '1:30' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240223-WA0024.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Stage Lighting Timecode Sequence', service: 'Stage Lighting', equipment: 'Clay Paky Sharpy Fixtures', duration: '1:45' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240223-WA0026.mp4', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Ground Support Trussing Load-In', service: 'Trussing & Rigging', equipment: 'CM Lodestar Hoists & Truss', duration: '2:20' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240224-WA0017.mp4', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'FOH Soundcheck Session', service: 'Audio Systems', equipment: 'DiGiCo Console & Line Array', duration: '1:10' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240224-WA0022.mp4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Live Concert Audio Tuning', service: 'Audio Systems', equipment: 'D&B SL Subwoofers', duration: '1:40' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240505-WA0008.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Outdoor Music Festival Highlights', service: 'Event Production', equipment: 'Complete Festival AV Rig', duration: '2:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240505-WA0009.mp4', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'P2.5 Outdoor LED Wall Playback', service: 'Video & LED Walls', equipment: 'P2.5 Outdoor LED Video Screen', duration: '2:50' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240505-WA0010.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Moving Head Beam Effects', service: 'Stage Lighting', equipment: 'Robe MegaPointe Beams', duration: '1:30' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20240921-WA0011.mp4', poster: '/assets/images/gallery/foh-control-position.jpg', title: 'Show Control & Calling Center', service: 'Tech Consultancy', equipment: 'Central Show Control Desk', duration: '1:50' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20241112-WA0000.mp4', poster: '/assets/images/gallery/auditorium-install.jpg', title: 'Permanent AV System Commissioning', service: 'Installs & Integrations', equipment: 'Auditorium AV Setup', duration: '2:10' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20241123-WA0004.mp4', poster: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Stage Lighting & Ambience Warmup', service: 'Stage Lighting', equipment: 'Warm LED Wash Fixtures', duration: '1:20' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20241123-WA0006.mp4', poster: '/assets/images/gallery/boardroom-av.jpg', title: 'Corporate Boardroom System Test', service: 'Installs & Integrations', equipment: 'Poly Studio & Crestron', duration: '1:05' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20241123-WA0009.mp4', poster: '/assets/images/gallery/monitor-world.jpg', title: 'Monitor Console Wireless Coordination', service: 'Audio Systems', equipment: 'Shure Axient Digital Mics', duration: '1:40' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20241129-WA0000.mp4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Main Stage Rigging Load Test', service: 'Trussing & Rigging', equipment: 'Prolyte H40V Roof Grid', duration: '1:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20241129-WA0001.mp4', poster: '/assets/images/gallery/outdoor-led-screen.jpg', title: 'Outdoor LED Screen Calibration', service: 'Video & LED Walls', equipment: 'Color Calibration & Processor', duration: '1:25' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20260402-WA0017.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Night Show Stage Production', service: 'Event Production', equipment: 'Stage Lighting & Pyros', duration: '2:05' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20260523-WA0012.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Concert Stage Light Sweep', service: 'Stage Lighting', equipment: 'Moving Head Washers', duration: '1:50' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20260625-WA0011.mp4', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Keynote Backdrop Video Loop', service: 'Video & LED Walls', equipment: 'Media Server & LED Wall', duration: '2:30' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20260701-WA0001.mp4', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Live Sound Subwoofer Test', service: 'Audio Systems', equipment: 'D&B SL Subwoofers', duration: '1:35' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID-20260701-WA0002.mp4', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Ground Support Rig Setup', service: 'Trussing & Rigging', equipment: 'Aluminum Truss Grid', duration: '1:45' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_112481231_001117_930.mp4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Main Stage Audio Soundcheck', service: 'Audio Systems', equipment: 'D&B Line Array System', duration: '2:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_140450716_172943_169.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Stage Lighting Beam Test', service: 'Stage Lighting', equipment: 'Moving Heads', duration: '1:55' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20211127_020914.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Arena Concert Production', service: 'Event Production', equipment: 'Full Arena Rig', duration: '3:10' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220419_230555.mp4', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'Product Launch Stage Production', service: 'Video & LED Walls', equipment: 'LED Walls & Lighting', duration: '3:40' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220513_200910.mp4', poster: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Destination Wedding Night Production', service: 'Stage Lighting', equipment: 'Ambient Wash & Spotlights', duration: '2:25' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220514_102256.mp4', poster: '/assets/images/gallery/corporate-keynote-screen.jpg', title: 'Corporate Conference Morning Setup', service: 'Video & LED Walls', equipment: 'Conference AV Systems', duration: '2:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220514_110326.mp4', poster: '/assets/images/gallery/foh-control-position.jpg', title: 'FOH Desk Audio Calibration', service: 'Audio Systems', equipment: 'Digital Mixing Console', duration: '2:00' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220514_214821.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Concert Night Live Performance', service: 'Event Production', equipment: 'Complete Live Show AV', duration: '4:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220514_215550.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Lighting Strobe & Laser Show', service: 'Stage Lighting', equipment: 'Strobe & Laser Rig', duration: '2:30' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220514_215833.mp4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Live Festival Crowd Audio', service: 'Audio Systems', equipment: 'D&B Line Array', duration: '3:50' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220715_101545.mp4', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Rigging Safety & Load Inspection', service: 'Trussing & Rigging', equipment: 'Rigging Hardware', duration: '3:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220806_072641.mp4', poster: '/assets/images/gallery/outdoor-led-screen.jpg', title: 'Outdoor Screen Sunrise Test', service: 'Video & LED Walls', equipment: 'Outdoor P3.9 LED', duration: '2:10' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20220806_072719.mp4', poster: '/assets/images/gallery/stage-front-of-house.jpg', title: 'Stage Sound System Power-Up', service: 'Audio Systems', equipment: 'Power Amplifiers & Subs', duration: '2:40' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20230808_223814.mp4', poster: '/assets/images/gallery/wedding-stage-wash.jpg', title: 'Grand Reception Stage Wash', service: 'Stage Lighting', equipment: 'Stage Spotlights & Wash', duration: '2:20' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_20240316_170145.mp4', poster: '/assets/images/gallery/auditorium-install.jpg', title: 'Venue Audio System Commissioning', service: 'Installs & Integrations', equipment: 'Venue Audio Setup', duration: '1:50' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_207590509_235404_853.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Night Show Visual & Sound Impact', service: 'Event Production', equipment: 'Visuals & Sound Rig', duration: '1:45' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_236470801_043607_994.mp4', poster: '/assets/images/gallery/concert-lighting-rig.jpg', title: 'Stage Light Chase Pattern Test', service: 'Stage Lighting', equipment: 'Moving Head Fixtures', duration: '1:25' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_241460317_020746_261.mp4', poster: '/assets/images/gallery/led-wall-product-launch.jpg', title: 'LED Video Processor Signal Check', service: 'Video & LED Walls', equipment: 'Video Processor', duration: '1:30' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_35540514_070109_776.mp4', poster: '/assets/images/gallery/ground-support-truss.jpg', title: 'Truss Tower Erection & Pinning', service: 'Trussing & Rigging', equipment: 'Truss Towers', duration: '1:40' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_784691004_031135_704.mp4', poster: '/assets/images/gallery/main-stage-line-array.jpg', title: 'Main Stage Line Array Rigging', service: 'Audio Systems', equipment: 'Line Array Hoists', duration: '2:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_83180428_103514_355.mp4', poster: '/assets/images/gallery/boardroom-av.jpg', title: 'Corporate AV System Test', service: 'Installs & Integrations', equipment: 'Corporate AV', duration: '1:10' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_83471107_143512_749.mp4', poster: '/assets/images/gallery/monitor-world.jpg', title: 'Monitor Desk Pre-Show Calibration', service: 'Audio Systems', equipment: 'Monitor Console', duration: '1:05' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_85011123_203826_051.mp4', poster: '/assets/images/gallery/festival-night-show.jpg', title: 'Concert Finale Lighting FX', service: 'Stage Lighting', equipment: 'Strobe & Moving Beams', duration: '1:15' },
  { src: '/A V TEC VIDEOS AND IMAGES copy/VID_99750223_110046_285.mp4', poster: '/assets/images/gallery/foh-control-position.jpg', title: 'Technical Crew Sync & Briefing', service: 'Tech Consultancy', equipment: 'Crew Comms System', duration: '1:20' }
];
