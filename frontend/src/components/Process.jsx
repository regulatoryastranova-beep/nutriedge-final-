import { FlaskConical, Cog, Microscope, Package, ClipboardCheck, Boxes, TruckIcon, MapPin, ThumbsUp, ChevronRight, Sparkles } from 'lucide-react';
import { processSteps } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = [FlaskConical, Cog, Microscope, Package, ClipboardCheck, Boxes, TruckIcon, MapPin];

// Alternating accent colors give each step its own identity
const accentPalette = [
  { ring: 'from-[#0f3d91] to-[#2a6fd6]', chip: 'bg-[#0f3d91]' },
  { ring: 'from-[#f26522] to-[#ff8c47]', chip: 'bg-[#f26522]' },
  { ring: 'from-[#1e5bb8] to-[#4a86d9]', chip: 'bg-[#1e5bb8]' },
  { ring: 'from-[#ff8c47] to-[#f26522]', chip: 'bg-[#ff8c47]' },
  { ring: 'from-[#0f3d91] to-[#2a6fd6]', chip: 'bg-[#0f3d91]' },
  { ring: 'from-[#f26522] to-[#ff8c47]', chip: 'bg-[#f26522]' },
  { ring: 'from-[#1e5bb8] to-[#4a86d9]', chip: 'bg-[#1e5bb8]' },
  { ring: 'from-[#ff8c47] to-[#f26522]', chip: 'bg-[#ff8c47]' },
];

export default function Process() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-24 bg-[#f7f4ec] relative overflow-hidden">
      {/* Decorative background layers */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0f3d91]/6 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f26522]/6 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, #0a2a66 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Corner sparkle */}
      <div className="absolute top-10 right-10 hidden lg:block pointer-events-none">
        <Sparkles className="w-8 h-8 text-[#f26522]/40 process-sparkle" />
      </div>

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
          {/* Animated gradient connector line */}
          <div className="absolute top-16 left-0 right-0 h-1 process-connector-line rounded-full opacity-70 z-0" />

          {/* Traveling glow dot along the line */}
          <div className="absolute top-[58px] left-0 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_6px_rgba(242,101,34,0.7)] process-travel-dot z-0">
            <div className="absolute inset-0 rounded-full bg-[#f26522]" />
          </div>

          <div className="grid grid-cols-8 gap-4 relative z-10">
            {processSteps.map((step, i) => {
              const Icon = iconMap[i];
              const accent = accentPalette[i];
              return (
                <div
                  key={step.step}
                  data-testid={`process-step-${step.step}`}
                  className="reveal-item flex flex-col items-center text-center group process-step"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="relative mb-5">
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full bg-[#f26522]/25 process-pulse-ring pointer-events-none" />
                    {/* Rotating gradient conic */}
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 process-conic-spin pointer-events-none"
                          style={{ background: 'conic-gradient(from 0deg, #f26522, #0f3d91, #2a6fd6, #f26522)' }} />

                    <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#f7f4ec] relative z-10 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${accent.ring} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-inner`}>
                        <Icon className="w-9 h-9 text-white drop-shadow" />
                      </div>
                      <span className={`absolute -top-2 -right-2 w-9 h-9 rounded-full ${accent.chip} text-white text-xs font-bold flex items-center justify-center shadow-lg ring-4 ring-[#f7f4ec]`}>
                        {String(step.step).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Small decorative underline that grows on hover */}
                  <div className="h-0.5 w-6 bg-[#f26522] rounded-full mb-2 opacity-0 group-hover:opacity-100 group-hover:w-10 transition-all duration-500" />

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
              const accent = accentPalette[i];
              return (
                <div
                  key={step.step}
                  data-testid={`process-step-${step.step}`}
                  className="reveal-item flex gap-5 items-start group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative shrink-0">
                    <span className="absolute inset-0 rounded-full bg-[#f26522]/20 process-pulse-ring pointer-events-none" />
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${accent.ring} flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`absolute -top-1 -right-1 w-7 h-7 rounded-full ${accent.chip} text-white text-[10px] font-bold flex items-center justify-center shadow-md ring-2 ring-[#f7f4ec] z-20`}>
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
