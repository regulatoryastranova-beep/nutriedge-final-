import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle }) {
  return (
    <section className="pt-32 pb-16 ne-gradient-blue-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#f26522]/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link to="/" className="hover:text-[#f26522]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{title}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">{title}</h1>
          {subtitle && <p className="mt-4 text-white/85 max-w-2xl">{subtitle}</p>}
          <div className="h-1 w-20 bg-[#f26522] mt-6 rounded" />
        </div>
      </div>
    </section>
  );
}
