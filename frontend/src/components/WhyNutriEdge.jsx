import { Factory, Package, Boxes, ScanSearch, Headphones, Leaf } from 'lucide-react';
import { whyNutriEdgePrinciples, companyInfo } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = { Factory, Package, Boxes, ScanSearch, Headphones, Leaf };

export default function WhyNutriEdge() {
  const ref = useReveal();
  const left = whyNutriEdgePrinciples.slice(0, 3);
  const right = whyNutriEdgePrinciples.slice(3, 6);

  return (
    <section ref={ref} className="reveal py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(15,61,145,0.04) 0%, transparent 60%)'
      }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <p className="section-eyebrow">WHY CHOOSE NUTRIEDGE</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold ne-gradient-text-blue mt-2">Why NutriEdge?</h2>
          <div className="divider-line" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Six principles that shape every formulation, every batch, and every partnership we build.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left cards */}
          <div className="space-y-6">
            {left.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <PrincipleCard key={p.number} p={p} Icon={Icon} delay={i * 120} align="left" />
              );
            })}
          </div>

          {/* Center logo */}
          <div className="flex items-center justify-center py-6">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-[#0f3d91]/15 animate-slow-spin" />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#f26522]/25 animate-reverse-spin" />
              <div className="absolute inset-8 rounded-full border border-[#0f3d91]/10" />
              <div className="absolute inset-10 rounded-full bg-white shadow-inner flex items-center justify-center p-8">
                <img src={companyInfo.logo} alt="NutriEdge" className="w-full h-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              {/* Orbit dots */}
              <div className="absolute inset-0 animate-slow-spin">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#f26522] shadow-md" />
              </div>
              <div className="absolute inset-4 animate-reverse-spin">
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#0f3d91]" />
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="space-y-6">
            {right.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <PrincipleCard key={p.number} p={p} Icon={Icon} delay={i * 120 + 100} align="right" />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({ p, Icon, delay, align }) {
  return (
    <div
      className="reveal-item relative border-t-2 border-[#0f3d91]/20 pt-4 pb-2 pl-2 pr-6 group hover:border-[#f26522] transition-colors"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`flex items-start gap-4 ${align === 'right' ? '' : ''}`}>
        <div className="w-14 h-14 rounded-full bg-[#f7f4ec] flex items-center justify-center shrink-0 group-hover:bg-[#0f3d91] transition-colors">
          <Icon className="w-7 h-7 text-[#0f3d91] group-hover:text-white transition-colors" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-[#0a2a66] group-hover:text-[#f26522] transition-colors">{p.title}</h3>
            <span className="text-xs font-bold text-gray-400">{p.number}</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mt-2">{p.description}</p>
        </div>
      </div>
    </div>
  );
}
