import { useEffect, useState, useCallback } from 'react';

interface MagazinePage {
  title: string;
  caption: string;
  url: string;
  alt: string;
}

const pages: MagazinePage[] = [
  { title: 'Spring Recap',          caption: 'the cover',           url: '/images/spring-2026/magazine/page-1.jpg', alt: 'progsu spring recap magazine cover' },
  { title: 'True Progsuvian?',      caption: 'spring kickoff quiz', url: '/images/spring-2026/magazine/page-2.jpg', alt: 'are you a true progsuvian quiz and spring kickoff recap' },
  { title: 'AIGT × Progsu Ideathon',caption: 'rebuilding the atl',  url: '/images/spring-2026/magazine/page-3.jpg', alt: 'aigt x progsu ideathon recap' },
  { title: 'Hacklanta',             caption: 'hackathons are back',  url: '/images/spring-2026/magazine/page-4.jpg', alt: 'hacklanta hackathon recap' },
  { title: 'Mario Kart Networking', caption: 'mbrdna night',         url: '/images/spring-2026/magazine/page-5.jpg', alt: 'mario kart at a networking event with mbrdna' },
  { title: 'Progirls',              caption: 'new initiative',       url: '/images/spring-2026/magazine/page-6.jpg', alt: 'progirls initiative for the women of progsu' },
  { title: 'Do You Even Vibe Code?',caption: 'claude workshop',      url: '/images/spring-2026/magazine/page-7.jpg', alt: 'do you even vibe code, claude workshop recap' },
  { title: 'Progcast',              caption: 'subscribe now',        url: '/images/spring-2026/magazine/page-8.jpg', alt: 'progcast podcast subscribe now' },
];

export default function Spring2026RecapGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : Math.max(0, i - 1))),
    [],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : Math.min(pages.length - 1, i + 1))),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  return (
    <section className="w-full bg-background text-foreground border-t border-white/[0.06] py-16 md:py-24">
      <div className="mx-auto max-w-[896px] px-6 md:px-8">
        <header className="mb-8 flex items-end justify-between border-b border-white/[0.07] pb-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold italic tracking-tight">
              Spring 2026 Recap
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tap a page to read it full size
            </p>
          </div>
          <span className="hidden sm:block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
            {pages.length} pages
          </span>
        </header>

        {/* Responsive grid, reads left to right, wraps onto new rows */}
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {pages.map((page, i) => (
            <li key={page.url}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${page.title}, page ${i + 1} of ${pages.length}`}
                className="group relative block w-full overflow-hidden rounded-lg border border-border bg-card text-left shadow-lg transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src={page.url}
                    alt={page.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-black/50 px-2 py-0.5 text-[0.65rem] font-mono text-white/70 backdrop-blur-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3">
                  <h3 className="text-sm font-bold leading-tight text-white sm:text-base">{page.title}</h3>
                  <em className="text-xs not-italic text-white/60">{page.caption}</em>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {isOpen && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${pages[openIndex].title}, page ${openIndex + 1} of ${pages.length}`}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6">
            <span className="font-mono text-sm text-white/60">
              {openIndex + 1} / {pages.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image + side nav */}
          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              disabled={openIndex === 0}
              aria-label="Previous page"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:pointer-events-none disabled:opacity-25 sm:left-4 sm:p-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={pages[openIndex].url}
                alt={pages[openIndex].alt}
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              <figcaption className="mt-3 text-center text-white">
                <span className="font-bold">{pages[openIndex].title}</span>
                <span className="text-white/50"> · {pages[openIndex].caption}</span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              disabled={openIndex === pages.length - 1}
              aria-label="Next page"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:pointer-events-none disabled:opacity-25 sm:right-4 sm:p-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
