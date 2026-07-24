import { TrendingUp, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { standOutFeatures } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = { TrendingUp, Package };

export default function MakeYourBrand() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-24 bg-[#f7f4ec] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-eyebrow">PRIVATE LABEL SOLUTIONS</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold ne-gradient-text-blue mt-2 leading-tight">
              Make Your Brand<br />Stand Out
            </h2>
            <div className="h-1 w-20 bg-[#f26522] my-6 rounded" />
            <p className="text-gray-700 leading-relaxed mb-8">
              Looking to create high-quality nutritional products under your own label? NutriEdge Private Label Services empowers brands with end-to-end support &ndash; from formulation and manufacturing to packaging and market-ready solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {standOutFeatures.map((feature, i) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div
                    key={feature.title}
                    className="reveal-item bg-white rounded-xl p-6 shadow-sm hover-lift border border-[#0f3d91]/10"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="w-14 h-14 rounded-lg ne-gradient-blue flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-[#0a2a66] tracking-wider text-sm mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <Link to="/contact" className="inline-flex items-center gap-2 btn-primary">
              GET STARTED <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#0f3d91]/10 to-[#f26522]/10 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/make-your-brand-standout.png"
                alt="Make Your Brand Stand Out"
                className="w-full h-auto object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
