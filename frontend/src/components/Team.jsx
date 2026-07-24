import { Users, Sparkles } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Team() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0f3d91]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="section-eyebrow">OUR PEOPLE</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2">
              The Team Behind NutriEdge
            </h2>
            <div className="h-1 w-16 bg-[#f26522] mt-3 rounded" />
            <p className="text-gray-700 leading-relaxed mt-6">
              A passionate team of scientists, formulation experts, quality analysts and operations
              professionals — united by a single mission: to build superior nutraceuticals that help
              brands scale globally.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-[#f7f4ec] border border-gray-100" data-testid="team-stat-scientists">
                <div className="w-10 h-10 rounded-lg ne-gradient-blue flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-[#0a2a66]">50+</p>
                <p className="text-xs text-gray-600 tracking-wider uppercase mt-0.5">Skilled Professionals</p>
              </div>
              <div className="p-4 rounded-xl bg-[#f7f4ec] border border-gray-100" data-testid="team-stat-scientists-2">
                <div className="w-10 h-10 rounded-lg bg-[#f26522] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-[#0a2a66]">10+</p>
                <p className="text-xs text-gray-600 tracking-wider uppercase mt-0.5">R&amp;D Scientists</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Formulation', 'Quality Control', 'R&D', 'Regulatory', 'Production', 'Packaging'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-wider uppercase text-[#0f3d91] bg-[#0f3d91]/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Team photo with decorative frame */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0f3d91]/20 via-[#f26522]/15 to-[#2a6fd6]/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/team/nutriedge-team.jpeg"
                  alt="NutriEdge Team"
                  data-testid="team-photo"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a2a66]/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <p className="text-[10px] tracking-widest text-[#ff8c47] font-semibold">TEAM NUTRIEDGE</p>
                  <p className="text-sm md:text-base font-semibold">Better Science. Better Lives.</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-5 py-3 items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f26522]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#f26522]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold tracking-widest">UNITED BY</p>
                  <p className="text-sm font-bold text-[#0a2a66]">Quality &amp; Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
