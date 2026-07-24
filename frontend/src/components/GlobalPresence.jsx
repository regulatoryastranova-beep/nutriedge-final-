import RotatingGlobe from './RotatingGlobe';
import { globalPresence } from '../mock/mock';
import useReveal from '../hooks/useReveal';

export default function GlobalPresence() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(15,61,145,0.06) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(242,101,34,0.06) 0%, transparent 40%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <p className="section-eyebrow">GLOBAL FOOTPRINT</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold ne-gradient-text-blue mt-2">
            Exporting To 15+ Countries
          </h2>
          <div className="divider-line" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connecting India with global markets across Asia, Africa, Europe, Oceania, America and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 flex items-center justify-center">
            <RotatingGlobe size={560} />
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-[#0a2a66] mb-4">Our Global Partners</h3>
            <div className="h-1 w-16 bg-[#f26522] mb-6 rounded" />

            <div className="grid grid-cols-2 gap-2 mb-6 max-h-72 overflow-hidden">
              {globalPresence.map((c) => (
                <div key={c.code} className="flex items-center gap-2 py-1.5 text-sm text-[#0a2a66]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f26522]" />
                  <span>{c.country}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { n: '15+', l: 'Countries' },
                { n: '30+', l: 'Global Clients' },
                { n: '300+', l: 'Products' },
                { n: '100+', l: 'Brands' }
              ].map((s) => (
                <div key={s.l} className="bg-[#f7f4ec] rounded-xl p-4 text-center border border-[#0f3d91]/10">
                  <p className="text-2xl md:text-3xl font-bold ne-gradient-text-blue">{s.n}</p>
                  <p className="text-xs text-gray-600 tracking-widest uppercase">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
