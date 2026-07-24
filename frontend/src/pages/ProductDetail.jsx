import { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Search } from 'lucide-react';
import PageHero from '../components/PageHero';
import { productCatalogue } from '../mock/productsData';

export default function ProductDetail() {
  const { categoryId } = useParams();
  const [query, setQuery] = useState('');

  const category = useMemo(() => productCatalogue.find((c) => c.id === categoryId), [categoryId]);

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    if (!query.trim()) return category.products;
    const q = query.toLowerCase();
    return category.products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.ingredients.toLowerCase().includes(q) || p.form.toLowerCase().includes(q)
    );
  }, [category, query]);

  if (!category) return <Navigate to="/products" replace />;

  return (
    <main>
      <PageHero title={category.name} subtitle={category.description} />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#0f3d91] font-semibold hover:text-[#f26522] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to All Categories
            </Link>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-[#0a2a66]">{category.products.length}</span> products in {category.name}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16 items-start">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                  <img src={category.image} alt={category.name} className="w-full h-72 object-cover" />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#f26522] mb-1">{category.tagline}</p>
                <h2 className="font-display text-2xl font-semibold text-[#0a2a66] mb-3">About {category.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{category.description}</p>
                <div className="space-y-2 mb-6">
                  {['GMP certified manufacturing', 'Custom formulation available', 'Private label ready', 'Global export approved'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-[#0a2a66]">
                      <CheckCircle2 className="w-4 h-4 text-[#f26522]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  REQUEST QUOTE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
                <div>
                  <h2 className="font-display text-3xl font-semibold ne-gradient-text-blue">Complete Product Range</h2>
                  <div className="h-1 w-16 bg-[#f26522] mt-2 rounded" />
                </div>
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#0f3d91] text-sm"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="hidden md:grid grid-cols-12 bg-[#f7f4ec] text-[#0a2a66] font-bold text-xs tracking-wider uppercase">
                  <div className="col-span-1 p-4">#</div>
                  <div className="col-span-4 p-4">Product Name</div>
                  <div className="col-span-5 p-4">Active Ingredients</div>
                  <div className="col-span-2 p-4">Dosage Form</div>
                </div>
                <div className="divide-y divide-gray-100">
                  {filteredProducts.length === 0 && (
                    <p className="p-8 text-center text-sm text-gray-500">No products match your search.</p>
                  )}
                  {filteredProducts.map((product, i) => (
                    <div key={product.name + i} className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 hover:bg-[#f7f4ec]/50 transition-colors p-4 md:p-0 border-b md:border-b-0 border-gray-100">
                      <div className="md:col-span-1 md:p-4 flex md:block items-center gap-2">
                        <span className="md:hidden text-xs font-bold text-[#f26522]">#</span>
                        <span className="text-sm font-bold text-[#f26522]">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="md:col-span-4 md:p-4">
                        <p className="font-semibold text-[#0a2a66] group-hover:text-[#f26522] transition-colors text-sm leading-relaxed">{product.name}</p>
                      </div>
                      <div className="md:col-span-5 md:p-4">
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{product.ingredients}</p>
                      </div>
                      <div className="md:col-span-2 md:p-4 flex items-start">
                        <span className="inline-block text-[10px] md:text-xs font-semibold bg-[#0f3d91]/10 text-[#0f3d91] px-2.5 py-1 rounded-full">
                          {product.form}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f4ec] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="text-center">
            <p className="section-eyebrow">DISCOVER MORE</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold ne-gradient-text-blue mt-2">Explore Other Categories</h3>
            <div className="divider-line" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete range of {productCatalogue.length - 1} additional therapeutic categories — hover on the strip to pause.
            </p>
          </div>
        </div>

        {/* Auto-scrolling stack of ALL other categories */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f7f4ec] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f7f4ec] to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-5 marquee-track"
            style={{ width: 'max-content' }}
            data-testid="explore-other-categories-stack"
          >
            {[...productCatalogue.filter((c) => c.id !== categoryId), ...productCatalogue.filter((c) => c.id !== categoryId)].map((c, i) => (
              <Link
                to={`/products/${c.id}`}
                key={`${c.id}-${i}`}
                data-testid={`other-category-card-${c.id}-${i}`}
                className="group shrink-0 w-56 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden bg-[#f7f4ec] relative">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a66]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#f26522] px-2.5 py-1 rounded-full">
                      EXPLORE <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#f26522] uppercase tracking-wider mb-1">{c.tagline || 'Category'}</p>
                  <p className="text-sm font-bold text-[#0a2a66] group-hover:text-[#f26522] transition-colors leading-tight">{c.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{c.products?.length || 0} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
