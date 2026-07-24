import PageHero from '../components/PageHero';
import { rndCapabilities } from '../mock/mock';
import { FlaskConical, TestTube2, Microscope, Lightbulb, FileCheck, Wrench } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const icons = [FlaskConical, TestTube2, Microscope, Lightbulb, FileCheck, Wrench];

export default function RnD() {
  const ref = useReveal();
  return (
    <main>
      <PageHero title="Research & Development" subtitle="Where innovation meets precision. Our R&D team pioneers advanced nutraceutical formulations that redefine wellness." />

      <section ref={ref} className="reveal py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-eyebrow">INNOVATION HUB</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2">
              Advanced R&amp;D Capabilities
            </h2>
            <div className="divider-line" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated research center staffed with scientists, formulators, and analysts continuously innovating breakthrough nutraceutical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rndCapabilities.map((cap, i) => {
              const Icon = icons[i];
              return (
                <div key={cap.title} className="group p-8 rounded-xl border border-gray-100 hover-lift bg-gradient-to-br from-white to-[#f7f4ec] relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#0f3d91]/5 group-hover:bg-[#f26522]/10 transition-colors duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-lg ne-gradient-blue flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#0a2a66] mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 ne-gradient-blue-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="max-w-7xl mx-auto px-6 relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-eyebrow text-[#ff8c47]">FROM CONCEPT TO CREATION</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-4">Custom Formulation Development</h2>
            <div className="h-1 w-16 bg-[#f26522] mb-6 rounded" />
            <p className="text-white/85 leading-relaxed mb-4">
              Our R&amp;D team collaborates closely with clients to co-create formulations that align with their brand vision. From initial concept and raw-material selection to stability studies and regulatory filing – we handle it all.
            </p>
            <ul className="space-y-3">
              {['Ingredient sourcing and evaluation', 'Prototype and pilot batches', 'Sensory and stability testing', 'Regulatory dossier preparation'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f26522]" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '15+', l: 'R&D Scientists' },
              { n: '500+', l: 'Formulations' },
              { n: '50+', l: 'Patents & Filings' },
              { n: '100%', l: 'GMP Compliance' }
            ].map((s) => (
              <div key={s.l} className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold ne-gradient-text mb-2">{s.n}</p>
                <p className="text-xs text-white/80 tracking-widest uppercase">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
