import { ShieldCheck, Truck, Handshake, FlaskConical, Headphones, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whyChooseUs } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const iconMap = { ShieldCheck, Truck, Handshake, FlaskConical, Headphones };

const badges = ['INNOVATIVE', 'RELIABLE', 'EXPERT-DRIVEN', 'SCALABLE'];

export default function WhyChoose() {
  const ref = useReveal();
  return (
    <>
      {/* Announcement strip */}
      <div className="bg-[#0f3d91] py-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                      backgroundSize: '50% 100%',
                      animation: 'shimmerSweep 6s linear infinite' }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-center text-white font-semibold text-xs md:text-sm tracking-widest uppercase">
            FROM CUSTOM FORMULATIONS TO LOGO PRINTING, NUTRIEDGE HELPS BUSINESSES CREATE PRODUCTS THAT STAND OUT IN THE NUTRACEUTICAL MARKET.
          </p>
        </div>
      </div>

      <section ref={ref} className="reveal relative py-24 bg-white overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-[#0f3d91]/8 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-[#f26522]/8 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle, #0a2a66 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

        <div className="max-w-7xl mx-auto px-6 relative grid lg:grid-cols-12 gap-14 items-center">
          {/* LEFT: Story + animated flask + badges + CTA */}
          <div className="lg:col-span-6 relative">
            {/* Decorative floating flask with bubbles */}
            <div className="relative w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-2xl ne-gradient-blue flex items-center justify-center wc-flask-float shadow-xl">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
              {/* Bubbles */}
              <span className="wc-bubble wc-bubble-1" />
              <span className="wc-bubble wc-bubble-2" />
              <span className="wc-bubble wc-bubble-3" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#f26522]/40 blur-2xl -z-10 wc-flask-glow" />
            </div>

            <p className="section-eyebrow mb-3">A PARTNERSHIP THAT PERFORMS</p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5">
              <span className="ne-gradient-text-blue">Partner With NutriEdge</span>
              <br />
              <span className="relative inline-block">
                <span className="text-[#0a2a66]">For Your </span>
                <span className="relative inline-block wc-highlight-word">
                  <span className="relative z-10 text-[#f26522]">Private Label Success</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 bg-[#f26522]/15 rounded -z-0" />
                </span>
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-7 max-w-xl">
              Partnering with NutriEdge Lifesciences means choosing innovation, reliability, and a team that understands your business. We deliver customized nutraceutical solutions that reflect your brand identity — backed by quality, speed, and excellence.
            </p>

            {/* Attribute pill badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {badges.map((b, i) => (
                <span
                  key={b}
                  className="wc-badge inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#0f3d91] bg-[#0f3d91]/8 hover:bg-[#0f3d91] hover:text-white px-3.5 py-2 rounded-full transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <Sparkles className="w-3 h-3" /> {b}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-testid="whychoose-cta-primary"
                className="group relative inline-flex items-center gap-2 bg-[#f26522] text-white px-7 py-3.5 rounded-md font-semibold tracking-wide text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 wc-shine pointer-events-none" />
                <span className="relative">START YOUR PROJECT</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                data-testid="whychoose-cta-secondary"
                className="inline-flex items-center gap-2 text-[#0f3d91] hover:text-[#f26522] px-2 py-3 font-semibold tracking-wide text-sm transition-colors border-b-2 border-[#0f3d91]/20 hover:border-[#f26522]"
              >
                LEARN MORE ABOUT US
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Interactive stepped list */}
          <div className="lg:col-span-6 relative">
            {/* Rotating conic gradient border */}
            <div className="absolute -inset-1 rounded-[26px] wc-gradient-border pointer-events-none opacity-40" />

            <div className="relative rounded-[24px] bg-white p-7 md:p-9 shadow-2xl border border-[#0f3d91]/10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl ne-gradient-blue flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-[#f26522] font-bold uppercase">Our Promises</p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-[#0a2a66] leading-tight">
                    Why Choose NutriEdge?
                  </h3>
                </div>
              </div>

              {/* Vertical connector line */}
              <div className="relative">
                <div className="absolute left-[27px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#0f3d91]/40 via-[#0f3d91]/20 to-[#f26522]/40" />

                <ul className="space-y-4 relative">
                  {whyChooseUs.map((item, i) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <li
                        key={item.title}
                        data-testid={`whychoose-item-${i}`}
                        className="wc-item group relative flex items-center gap-4 pl-1 pr-4 py-3 rounded-xl hover:bg-[#f7f4ec]/60 transition-all duration-300"
                        style={{ animationDelay: `${i * 100 + 200}ms` }}
                      >
                        {/* Icon disc — sits on the connector line */}
                        <div className="relative shrink-0">
                          <span className="absolute inset-0 rounded-full bg-[#f26522]/25 process-pulse-ring pointer-events-none" />
                          <div className="relative w-14 h-14 rounded-full bg-white shadow-md ring-4 ring-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 z-10">
                            <div className="w-11 h-11 rounded-full ne-gradient-blue flex items-center justify-center group-hover:from-[#f26522] group-hover:to-[#ff8c47] wc-icon-inner">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#f26522] text-white text-[10px] font-bold flex items-center justify-center shadow-md ring-2 ring-white z-20">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm md:text-[15px] font-semibold text-[#0a2a66] leading-snug group-hover:text-[#f26522] transition-colors">
                            {item.title}
                          </p>
                          {/* Underline that grows on hover */}
                          <span className="block h-0.5 w-0 bg-[#f26522] mt-1 group-hover:w-16 transition-all duration-500" />
                        </div>

                        <ArrowRight className="w-4 h-4 text-[#0f3d91] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Footer note */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between gap-3">
                <p className="text-xs text-gray-500">
                  <span className="font-bold text-[#0a2a66]">100%</span> commitment on every batch.
                </p>
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((n) => (
                    <div key={n} className="w-7 h-7 rounded-full ne-gradient-blue border-2 border-white flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">
                        {['Q', 'S', 'R'][n]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
