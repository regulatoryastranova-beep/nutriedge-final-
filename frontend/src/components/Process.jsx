import { FlaskConical, Cog, Microscope, Package, ClipboardCheck, Boxes, TruckIcon, MapPin, ThumbsUp, ChevronRight } from 'lucide-react';
import { processSteps } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = [FlaskConical, Cog, Microscope, Package, ClipboardCheck, Boxes, TruckIcon, MapPin];

export default function Process() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-24 bg-[#f7f4ec] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0f3d91]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, #0a2a66 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 gap-6">
          <div>
            <p className="section-eyebrow">OUR WORKFLOW</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold ne-gradient-text-blue mt-2">PROCESS</h2>
            <div className="h-1 w-16 bg-[#f26522] mt-3 rounded" />
            <p className="text-gray-600 mt-4 max-w-lg">From concept to delivery — a seamless 8-step journey engineered for excellence at every stage.</p>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-lg process-happy-badge">
            <div className="w-12 h-12 rounded-full bg-[#f26522]/10 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-[#f26522]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold tracking-widest">HAPPY</p>
              <p className="font-bold text-[#0a2a66]">CUSTOMER</p>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal connected timeline */}
        <div className="hidden lg:block relative">
          {/* Animated dashed connector */}
          <svg className="absolute top-16 left-0 w-full h-2 z-0" preserveAspectRatio="none" viewBox="0 0 1000 4">
            <line x1="0" y1="2" x2="1000" y2="2" stroke="#0f3d91" strokeWidth="2" strokeDasharray="8 8" opacity="0.35">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1.5s" repeatCount="indefinite" />
            </line>
          </svg>

          <div className="grid grid-cols-8 gap-4 relative z-10">
            {processSteps.map((step, i) => {
              const Icon = iconMap[i];
              return (
                <div
                  key={step.step}
                  data-testid={`process-step-${step.step}`}
                  className="reveal-item flex flex-col items-center text-center group process-step"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="relative mb-5">
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full bg-[#f26522]/20 process-pulse-ring pointer-events-none" />
                    <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#f7f4ec] relative z-10 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                      <div className="w-20 h-20 rounded-full ne-gradient-blue flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Icon className="w-9 h-9 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-[#f26522] text-white text-xs font-bold flex items-center justify-center shadow-lg ring-4 ring-[#f7f4ec]">
                        {String(step.step).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-[#0a2a66] uppercase tracking-wider mb-1 group-hover:text-[#f26522] transition-colors">{step.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-tight">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical timeline with animated arrows */}
        <div className="lg:hidden relative">
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#0f3d91] via-[#0f3d91]/40 to-[#f26522]" />
          <div className="space-y-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[i];
              return (
                <div
                  key={step.step}
                  data-testid={`process-step-${step.step}`}
                  className="reveal-item flex gap-5 items-start group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative shrink-0">
                    <span className="absolute inset-0 rounded-full bg-[#f26522]/20 process-pulse-ring pointer-events-none" />
                    <div className="w-16 h-16 rounded-full ne-gradient-blue flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#f26522] text-white text-[10px] font-bold flex items-center justify-center shadow-md ring-2 ring-[#f7f4ec] z-20">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-sm group-hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold text-[#0a2a66] uppercase tracking-wider group-hover:text-[#f26522] transition-colors">{step.name}</h4>
                      <ChevronRight className="w-4 h-4 text-[#f26522] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
