import { ShieldCheck, Truck, Handshake, FlaskConical, Headphones, ChevronsRight } from 'lucide-react';
import { whyChooseUs } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = { ShieldCheck, Truck, Handshake, FlaskConical, Headphones };

export default function WhyChoose() {
  const ref = useReveal();
  return (
    <>
      <div className="bg-[#0f3d91] py-5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white font-semibold text-xs md:text-sm tracking-widest uppercase">
            FROM CUSTOM FORMULATIONS TO LOGO PRINTING, NUTRIEDGE HELPS BUSINESSES CREATE PRODUCTS THAT STAND OUT IN THE NUTRACEUTICAL MARKET.
          </p>
        </div>
      </div>

      <section ref={ref} className="reveal py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 rounded-full ne-gradient-blue flex items-center justify-center mb-6">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mb-4 leading-tight">
              Partner With NutriEdge For Your Private Label Success
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Partnering with NutriEdge Lifesciences means choosing innovation, reliability, and a team that understands your business. We deliver customized nutraceutical solutions that reflect your brand identity – backed by quality, speed, and excellence.
            </p>
          </div>

          <div className="border-2 border-[#0f3d91]/10 rounded-lg p-8 bg-[#f7f4ec]">
            <h3 className="text-center font-bold text-lg mb-6 ne-gradient-text-blue">
              WHY CHOOSE NUTRIEDGE FOR PRIVATE LABELING?
            </h3>
            <ul className="space-y-3">
              {whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <li key={item.title} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0f3d91]" />
                    </div>
                    <div className="flex-1 ne-gradient-blue text-white text-xs md:text-sm font-semibold py-3 px-4 rounded-full flex items-center gap-2 group-hover:shadow-lg transition-all">
                      <ChevronsRight className="w-4 h-4 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
