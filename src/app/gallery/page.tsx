import PageHero from '@/components/PageHero';
import GalleryExplorer from '@/components/GalleryExplorer';
import { GALLERY_IMAGES, GALLERY_VIDEOS } from '@/data/gallery';

export const metadata = {
  title: 'AV Event & Equipment Gallery | Photos & Production Videos | AV-TEC',
  description: 'Explore live event photos, stage lighting rigs, D&B audio setups, and P2.5 LED video wall installations delivered by AV-TEC across India.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    url: '/gallery',
    title: 'AV Event & Equipment Gallery | AV-TEC',
    description: 'Explore live event photos, stage lighting rigs, D&B audio setups, and P2.5 LED video wall installations delivered by AV-TEC across India.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.avtecindia.com' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://www.avtecindia.com/gallery' },
  ],
};

export default function GalleryPage() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Our Work"
        title="Gallery"
        subtitle="Photos and videos from our events and equipment — filter, then click any tile to view it full size."
        bg="/assets/images/gallery/led-wall-product-launch.jpg"
      />
      <section className="section">
        <GalleryExplorer images={GALLERY_IMAGES} videos={GALLERY_VIDEOS} />
      </section>
    </div>
  );
}
