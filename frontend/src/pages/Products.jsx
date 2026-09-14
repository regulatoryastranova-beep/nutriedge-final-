import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import ProductRange from '../components/ProductRange';
import Packaging from '../components/Packaging';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Products() {
   useEffect(() => {
  document.title = 'Nutraceutical & Pharmaceutical Products | NutriEdge Lifesciences';

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      'content',
      'Explore NutriEdge Lifesciences pharmaceutical and nutraceutical products, including gummies, effervescent tablets, immunity supplements, orthopedic, gynecological, dermatology and other healthcare formulations.'
    );
  }
}, []);
  return (
    <main>
      <PageHero title="Our Products" subtitle="A comprehensive range of nutraceutical dosage forms manufactured with global quality standards." />
      <ProductRange />
      <Packaging />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mb-4">
            Ready to Launch Your Nutraceutical Brand?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to develop custom formulations tailored to your brand and market.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 btn-primary">
            REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
