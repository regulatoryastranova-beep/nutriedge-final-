import { packagingTypes } from '../mock/mock';
import useReveal from '../hooks/useReveal';

export default function Packaging() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-20 bg-[#0f3d91] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(242,101,34,0.3) 0, transparent 40%)'
      }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <p className="section-eyebrow text-[#ff8c47]">PACKAGING SOLUTIONS</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-2">
            Smart Packaging For Smarter Wellness
          </h2>
          <div className="divider-line" style={{ background: 'linear-gradient(90deg, #ff8c47 0%, #ffffff 100%)' }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {packagingTypes.map((pkg) => (
            <div key={pkg.name} className="group bg-white/95 rounded-lg overflow-hidden hover-lift">
              <div className="aspect-square overflow-hidden bg-[#f7f4ec]">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm md:text-base font-bold tracking-wider text-[#0a2a66]">{pkg.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-16 h-0.5 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
