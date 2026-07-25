import { certifications } from '../mock/mock';
import useReveal from '../hooks/useReveal';

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

        <div className="flex gap-5 marquee-track" style={{ width: 'max-content' }} data-testid="certifications-marquee">
          {items.map((cert, i) => (
            <div
              key={`${cert.code}-${i}`}
              data-testid={`certification-card-${cert.code}`}
              className="shrink-0 w-52 h-52 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center p-5 group transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-xl bg-[#f7f4ec] flex items-center justify-center mb-3 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  loading={i < 11 ? 'eager' : 'lazy'}
                  decoding="async"
                  width="80"
                  height="80"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-center text-sm font-bold text-[#0a2a66] leading-tight group-hover:text-[#f26522] transition-colors">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
