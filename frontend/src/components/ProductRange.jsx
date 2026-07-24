import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { productCatalogue } from '../mock/productsData';
import useReveal from '../hooks/useReveal';

export default function ProductRange({ limit }) {
  const ref = useReveal();
  const gridRef = useRef(null);
  const items = limit ? productCatalogue.slice(0, limit) : productCatalogue;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll('[data-product-card]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx') || 0);
            entry.target.style.animationDelay = `${idx * 70}ms`;
            entry.target.classList.add('reveal-item');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section ref={ref} className="reveal py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow">OUR PRODUCT RANGE</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2">
            Complete Therapeutic Portfolio
          </h2>
          <div className="divider-line" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {productCatalogue.length}+ therapeutic categories spanning {productCatalogue.reduce((n, c) => n + c.products.length, 0)}+ nutraceutical formulations designed for global wellness needs.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product, idx) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              data-product-card
              data-idx={idx}
              className="group product-tilt bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 opacity-0 block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#f7f4ec] relative">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="product-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a66]/80 via-[#0a2a66]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block bg-white/95 backdrop-blur text-[#0f3d91] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.products.length} products
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-block bg-[#f26522] text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    VIEW RANGE
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#f26522] mb-1">{product.tagline}</p>
                <h3 className="font-display text-xl font-semibold text-[#0a2a66] mb-2 group-hover:text-[#f26522] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#f26522] group-hover:gap-2 transition-all">
                  View {product.products.length} Products <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 btn-primary">
              VIEW ALL CATEGORIES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
