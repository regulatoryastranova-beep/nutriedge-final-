import { directorMessage, companyInfo } from '../mock/mock';
import { Quote } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function DirectorsWord() {
  const ref = useReveal();
  return (
    <section id="director" ref={ref} className="reveal py-20 ne-gradient-blue-dark text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-40 w-[500px] h-[500px] rounded-full bg-[#f26522]/15 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#2a6fd6]/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <p className="section-eyebrow text-[#ff8c47]">MESSAGE FROM LEADERSHIP</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-2">Director&apos;s Word</h2>
          <div className="divider-line" style={{ background: 'linear-gradient(90deg, #ff8c47 0%, #ffffff 100%)' }} />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#f26522]/30 to-[#2a6fd6]/30 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img src={companyInfo.directorImage} alt={directorMessage.name} className="w-full h-[440px] object-cover" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#f26522] rounded-lg px-6 py-3 shadow-xl whitespace-nowrap">
                <p className="font-bold text-white text-sm md:text-base">{directorMessage.name}</p>
                <p className="text-white/90 text-xs text-center">{directorMessage.designation}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Quote className="w-14 h-14 text-[#f26522] mb-4" />
            {directorMessage.message.split('\n\n').map((para, i) => (
              <p key={i} className="text-white/90 leading-relaxed mb-4">{para}</p>
            ))}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="font-display text-xl italic text-[#ff8c47]">&mdash; {directorMessage.name}</p>
              <p className="text-sm text-white/70">{directorMessage.designation}, NutriEdge Lifesciences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
