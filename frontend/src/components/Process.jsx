import { FlaskConical, Cog, Microscope, Package, ClipboardCheck, Boxes, TruckIcon, MapPin, ThumbsUp } from 'lucide-react';
import { processSteps } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = [FlaskConical, Cog, Microscope, Package, ClipboardCheck, Boxes, TruckIcon, MapPin];

export default function Process() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-20 bg-[#f7f4ec] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <p className="section-eyebrow">OUR WORKFLOW</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold ne-gradient-text-blue mt-2">PROCESS</h2>
            <div className="h-1 w-16 bg-[#f26522] mt-3 rounded" />
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-md">
            <div className="w-12 h-12 rounded-full bg-[#f26522]/10 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-[#f26522]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold tracking-widest">HAPPY</p>
              <p className="font-bold text-[#0a2a66]">CUSTOMER</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 border-t-2 border-dashed border-[#0f3d91]/40" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[i];
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center group">
                  <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border-4 border-[#f7f4ec] relative z-10">
                    <div className="w-20 h-20 rounded-full ne-gradient-blue flex items-center justify-center">
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#f26522] text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-[#0a2a66] uppercase tracking-wider mb-1">{step.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-tight hidden md:block">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
