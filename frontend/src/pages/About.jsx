import PageHero from '../components/PageHero';
import AboutSection from '../components/AboutSection';
import DirectorsWord from '../components/DirectorsWord';
import Certifications from '../components/Certifications';
import Expertise from '../components/Expertise';
import GlobalPresence from '../components/GlobalPresence';
import WhyNutriEdge from '../components/WhyNutriEdge';
import { Target, Eye, Sparkles, Calendar, Users, Award, Factory, CheckCircle2 } from 'lucide-react';
import { companyInfo, milestones, infrastructure } from '../mock/mock';
import useReveal from '../hooks/useReveal';

const milestoneIconMap = { Calendar, Factory, Award, Users };

function Milestones() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-eyebrow">OUR JOURNEY</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2">Milestones &amp; Achievements</h2>
          <div className="divider-line" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 border-t-2 border-dashed border-[#0f3d91]/40" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((m, i) => {
              const Icon = milestoneIconMap[m.icon] || Calendar;
              return (
                <div key={i} className="relative text-center group" style={{ animationDelay: `${i * 120}ms` }}>
                  <div className="relative z-10 w-32 h-32 rounded-full bg-white shadow-xl mx-auto flex items-center justify-center mb-5 border-4 border-[#f7f4ec] group-hover:scale-105 transition-transform">
                    <div className="w-24 h-24 rounded-full ne-gradient-blue flex flex-col items-center justify-center text-white">
                      <Icon className="w-6 h-6 mb-1" />
                      <p className="font-bold text-lg">{m.year}</p>
                    </div>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[#0a2a66] mb-2">{m.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  const ref = useReveal();
  return (
    <section id="infrastructure" ref={ref} className="reveal py-20 bg-[#f7f4ec]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-eyebrow">OUR FACILITY</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2">Infrastructure</h2>
          <div className="divider-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0f3d91]/10 to-[#f26522]/10 rounded-2xl blur-lg" />
            <img src={companyInfo.factoryImage} alt="Factory" className="relative rounded-2xl shadow-2xl w-full h-[440px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4">
              <p className="text-xs text-gray-500 tracking-widest uppercase font-semibold">Facility Area</p>
              <p className="text-2xl font-bold ne-gradient-text-blue">15,000 Sq. Ft.</p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0a2a66] mb-4">{infrastructure.headline}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A state-of-the-art A-grade campus in Kathwada GIDC, Ahmedabad, equipped with automated manufacturing lines, temperature-controlled zones and an accredited quality-control laboratory.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {infrastructure.facts.map((f) => (
                <li key={f.label} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#f26522] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#0a2a66]">{f.label}</p>
                    <p className="text-xs text-gray-600">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 tracking-wider uppercase font-semibold">
              Compliant with USFDA &bull; HACCP &bull; HALAL &bull; KOSHER &bull; WHO-GMP
            </p>
          </div>
        </div>

        {/* Daily Production Capacity */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <p className="section-eyebrow">DAILY PRODUCTION CAPACITY</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold ne-gradient-text-blue mt-2">Manufacturing Scale</h3>
            <div className="h-1 w-16 bg-[#f26522] mt-3 mx-auto rounded" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {infrastructure.capacity.map((c, i) => (
              <div
                key={i}
                className="reveal-item p-5 rounded-xl bg-gradient-to-br from-[#f7f4ec] to-white border border-[#0f3d91]/10 text-center hover-lift"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <p className="text-2xl md:text-3xl font-bold ne-gradient-text-blue mb-1">{c.qty}</p>
                <p className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider">{c.unit}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 tracking-widest uppercase font-semibold mt-8">
            Private Label &bull; Contract Manufacturing &bull; Custom Formulations
          </p>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main>
      <PageHero title="About Us" subtitle="Building a healthier tomorrow through science, integrity, and world-class nutraceutical manufacturing." />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {[
            { Icon: Target, title: 'Our Mission', text: 'To empower brands worldwide with premium nutraceutical products that combine cutting-edge science with uncompromising quality.' },
            { Icon: Eye, title: 'Our Vision', text: 'To be the most trusted nutraceutical CDMO (Contract Development & Manufacturing Organization) partner globally, driving innovation for healthier lives across generations.' },
            { Icon: Sparkles, title: 'Our Values', text: 'Integrity, quality, transparency, and customer-first thinking guide every decision we make at NutriEdge Lifesciences.' }
          ].map(({ Icon, title, text }, i) => (
            <div key={title} className="group p-8 rounded-xl bg-[#f7f4ec] hover-lift reveal-item" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="w-14 h-14 rounded-lg ne-gradient-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0a2a66] mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <AboutSection />
      <WhyNutriEdge />
      <Milestones />
      <GlobalPresence />
      <Infrastructure />

      <Expertise />
      <DirectorsWord />
      <Certifications />
    </main>
  );
}
