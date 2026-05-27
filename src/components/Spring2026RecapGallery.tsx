import React from 'react';
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery';

const galleryData: GalleryItem[] = [
  { common: 'Spring Kickoff',       binomial: 'opening night',          photo: { url: '/images/spring-2026/magazine/page-1.jpg', text: 'spring 2026 recap, page 1', by: 'progsu' } },
  { common: 'Workshops',            binomial: 'hands-on sessions',      photo: { url: '/images/spring-2026/magazine/page-2.jpg', text: 'spring 2026 recap, page 2', by: 'progsu' } },
  { common: 'Hacklanta',            binomial: 'hackathon weekend',      photo: { url: '/images/spring-2026/magazine/page-3.jpg', text: 'spring 2026 recap, page 3', by: 'progsu' } },
  { common: 'Mercedes-Benz Visit',  binomial: 'industry networking',    photo: { url: '/images/spring-2026/magazine/page-4.jpg', text: 'spring 2026 recap, page 4', by: 'progsu' } },
  { common: 'Member Spotlight',     binomial: 'community highlights',   photo: { url: '/images/spring-2026/magazine/page-5.jpg', text: 'spring 2026 recap, page 5', by: 'progsu' } },
  { common: 'Progcast Launch',      binomial: 'podcast premiere',       photo: { url: '/images/spring-2026/magazine/page-6.jpg', text: 'spring 2026 recap, page 6', by: 'progsu' } },
  { common: 'Eboard Interest',      binomial: 'leadership meeting',     photo: { url: '/images/spring-2026/magazine/page-7.jpg', text: 'spring 2026 recap, page 7', by: 'progsu' } },
  { common: 'Summer Internships',   binomial: 'looking ahead',          photo: { url: '/images/spring-2026/magazine/page-8.jpg', text: 'spring 2026 recap, page 8', by: 'progsu' } },
];

export default function Spring2026RecapGallery() {
  return (
    <div className="w-full bg-background text-foreground" style={{ height: '500vh' }}>
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
          <h1 className="text-4xl font-bold">Spring 2026 Recap</h1>
          <p className="text-muted-foreground">Scroll to browse the magazine collection</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery items={galleryData} />
        </div>
      </div>
    </div>
  );
}
