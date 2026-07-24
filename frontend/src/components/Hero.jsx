import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { companyInfo } from '../mock/mock';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a2a66]">
      {/* Full-bleed factory video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/video/factory.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={companyInfo.factoryImage}
        data-testid="hero-factory-video"
      />

      {/* Global dark tint over video for text readability across the whole hero */}
      <div className="absolute inset-0 bg-[#0a2a66]/40" />

      {/* Subtle grid pattern for texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-28 pb-20 w-full">
        {/* Left-anchored semi-transparent overlay panel */}
        <div className="max-w-xl animate-fade-in-up">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Panel backdrop: deep blue, glass, subtle border */}
            <div
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: 'rgba(10, 42, 102, 0.82)' }}
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            {/* Corner glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#f26522]/20 blur-3xl pointer-events-none" />

            <div className="relative p-7 md:p-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
                <Award className="w-4 h-4 text-[#f26522]" />
                <span className="text-[11px] tracking-widest text-white font-semibold">
                  USFDA &bull; WHO GMP &bull; ISO CERTIFIED
                </span>
              </div>

              <p className="text-[#ff8c47] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                Contract Development &amp; Manufacturing Organization (CDMO)
              </p>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5">
                {companyInfo.tagline}
              </h1>

              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-7 max-w-lg">
                Manufacturing superior-quality supplements in an FSSAI-approved A-grade facility with a focus on quality, compliance and innovation.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  data-testid="hero-inquire-btn"
                  className="inline-flex items-center gap-2 bg-[#f26522] hover:bg-[#ff8c47] text-white px-6 py-3 rounded-md font-semibold tracking-wide text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  INQUIRE NOW
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  data-testid="hero-explore-btn"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 text-white hover:bg-white hover:text-[#0a2a66] px-6 py-3 rounded-md font-semibold tracking-wide text-sm transition-all"
                >
                  EXPLORE PRODUCTS
                </Link>
              </div>

              {/* Stats row inside overlay */}
              <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/15">
                {[
                  { n: '30+', l: 'Clients' },
                  { n: '15+', l: 'Countries' },
                  { n: '300+', l: 'Products' },
                  { n: '100+', l: 'Brands' }
                ].map((stat) => (
                  <div key={stat.l}>
                    <p className="text-xl md:text-3xl font-bold text-white mb-0.5">{stat.n}</p>
                    <p className="text-[10px] tracking-widest text-white/75 uppercase">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live indicator badge — subtle nod that the background is a live-facility video */}
      <div className="hidden md:flex absolute top-24 right-8 z-10 items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
        <span className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
        <span className="text-[10px] tracking-widest text-white font-semibold">LIVE • FACTORY FOOTAGE</span>
      </div>

      {/* Soft fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
