import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../mock/mock';
import useReveal from '../hooks/useReveal';

export default function Testimonials() {
  const ref = useReveal();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length]
  ];

  return (
    <section ref={ref} className="reveal py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 items-center">
          {/* Left card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full ne-gradient-blue flex items-center justify-center text-white font-bold">
                NE
              </div>
              <div>
                <p className="font-bold text-[#0a2a66]">NutriEdge Lifesciences</p>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-[#0a2a66]">4.9</span>
                  <div className="flex">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-[#f26522] text-[#f26522]" />)}
                  </div>
                </div>
                <p className="text-xs text-gray-500">Based on reviews</p>
              </div>
            </div>
            <button className="w-full bg-[#0f3d91] hover:bg-[#0a2a66] text-white rounded-md py-2.5 text-sm font-semibold transition-colors">
              Review us on Google
            </button>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6 relative">
            {visible.map((t, i) => (
              <div key={i} className="bg-[#f7f4ec] rounded-xl p-6 relative">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-[#0f3d91]/15" />
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, s) => <Star key={s} className="w-4 h-4 fill-[#f26522] text-[#f26522]" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#0f3d91]/10">
                  <div className="w-10 h-10 rounded-full bg-[#0f3d91] text-white flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2a66] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-3 md:col-span-2">
              <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-[#0f3d91]/30 flex items-center justify-center hover:bg-[#0f3d91] hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-[#f26522] w-6' : 'bg-[#0f3d91]/30'}`} />
                ))}
              </div>
              <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-[#0f3d91]/30 flex items-center justify-center hover:bg-[#0f3d91] hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
