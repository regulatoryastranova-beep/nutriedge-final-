import { Award, ShieldCheck, BadgeCheck, Sparkles, Globe2, Leaf, HeartPulse, Scroll, FileBadge, FlaskConical, CheckCircle2 } from 'lucide-react';
import { certifications } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconRotation = [Award, ShieldCheck, BadgeCheck, Sparkles, Globe2, Leaf, HeartPulse, Scroll, FileBadge, FlaskConical, CheckCircle2];

export default function Certifications() {
  const ref = useReveal();
  // Duplicate for seamless infinite marquee
  const items = [...certifications, ...certifications];

  return (
    <section ref={ref} className="reveal py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-center">
          <p className="section-eyebrow">CERTIFIED EXCELLENCE</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2">
            Membership &amp; Accreditation
          </h2>
          <div className="divider-line" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            NutriEdge Lifesciences operates with globally recognized certifications, ensuring premium quality standards, regulatory compliance, manufacturing excellence, and trusted nutraceutical production.
          </p>
        </div>
      </div>

      {/* Marquee slider */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 marquee-track" style={{ width: 'max-content' }}>
          {items.map((cert, i) => {
            const Icon = iconRotation[i % iconRotation.length];
            return (
              <div
                key={`${cert.code}-${i}`}
                className="shrink-0 w-48 h-48 rounded-xl bg-[#f7f4ec] border-2 border-transparent hover:border-[#0f3d91]/30 flex flex-col items-center justify-center p-5 group transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-[#0f3d91] transition-colors">
                  <Icon className="w-8 h-8 text-[#0f3d91] group-hover:text-white transition-colors" />
                </div>
                <p className="text-center text-sm font-bold text-[#0a2a66] leading-tight">{cert.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
