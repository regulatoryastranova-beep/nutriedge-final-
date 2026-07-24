import { useState, useMemo } from 'react';
import PageHero from '../components/PageHero';
import { galleryImages } from '../mock/mock';
import { X, Search } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Gallery() {
  const ref = useReveal();
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return galleryImages;
    const q = query.toLowerCase();
    return galleryImages.filter((g) => g.caption.toLowerCase().includes(q));
  }, [query]);

  return (
    <main>
      <PageHero title="Gallery" subtitle="Explore our complete product range, packaging solutions and manufacturing capabilities in pictures." />

      <section ref={ref} className="reveal py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="section-eyebrow">VISUAL SHOWCASE</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#0a2a66] mt-1">
                {filtered.length} Photos
              </h2>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search gallery..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#0f3d91] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setSelected(img)}
                className="reveal-item group bg-[#f7f4ec] rounded-xl overflow-hidden border border-gray-100 hover-lift text-left"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-3">
                  <img src={img.src} alt={img.caption} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-semibold text-[#0a2a66] group-hover:text-[#f26522] transition-colors">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-16">No images match your search.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/85 z-[100] flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.caption} className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl bg-white" />
            <p className="text-white text-lg font-semibold">{selected.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
}
