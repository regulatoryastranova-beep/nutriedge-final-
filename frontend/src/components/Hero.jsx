import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { companyInfo } from '../mock/mock';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden ne-gradient-blue-dark">
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-[#f26522]/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#2a6fd6]/25 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Award className="w-4 h-4 text-[#f26522]" />
              <span className="text-xs tracking-widest text-white font-semibold">USFDA &bull; WHO GMP &bull; ISO CERTIFIED</span>
            </div>

            <p className="text-[#ff8c47] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Contract Development &amp; Manufacturing Organization (CDMO)
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              {companyInfo.tagline}
            </h1>

            <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-xl">
              Manufacturing superior-quality supplements in an FSSAI-approved A-grade facility with a focus on quality, compliance and innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#f26522] hover:bg-[#ff8c47] text-white px-8 py-4 rounded-md font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                INQUIRE NOW
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 text-white hover:bg-white hover:text-[#0a2a66] px-8 py-4 rounded-md font-semibold tracking-wide transition-all"
              >
                EXPLORE PRODUCTS
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4 md:gap-6 mt-14 pt-10 border-t border-white/20 max-w-2xl">
              {[
                { n: '30+', l: 'Clients' },
                { n: '15+', l: 'Countries' },
                { n: '300+', l: 'Products' },
                { n: '100+', l: 'Brands' }
              ].map((stat) => (
                <div key={stat.l}>
                  <p className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.n}</p>
                  <p className="text-[10px] md:text-xs tracking-widest text-white/70 uppercase">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative animate-slide-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f26522]/30 to-[#2a6fd6]/30 blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={companyInfo.factoryImage}
                  alt="NutriEdge Factory"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a66]/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs tracking-widest text-[#f26522] font-semibold mb-1">STATE-OF-THE-ART FACILITY</p>
                  <p className="text-xl font-semibold">15,000 Sq. Ft. Manufacturing</p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-float">
                <p className="text-xs text-[#0a2a66]/70 font-semibold">Certified</p>
                <p className="text-lg font-bold text-[#0f3d91]">USFDA &bull; GMP</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#f26522] rounded-lg shadow-xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="text-xs text-white/90 font-semibold">Established Trust</p>
                <p className="text-lg font-bold text-white">100+ Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
