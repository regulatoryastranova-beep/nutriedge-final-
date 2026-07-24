import { Beaker, Tags, Factory, Globe } from 'lucide-react';
import { expertise } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = { Beaker, Tags, Factory, Globe };

export default function Expertise() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow">OUR EXPERTISE</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2">
            What We Do Best
          </h2>
          <div className="divider-line" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end nutraceutical services combining innovation, compliance and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="group relative p-8 rounded-xl border border-gray-100 hover-lift bg-gradient-to-br from-white to-[#f7f4ec] overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#0f3d91]/5 group-hover:bg-[#f26522]/10 transition-colors duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-lg ne-gradient-blue flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#0a2a66] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
