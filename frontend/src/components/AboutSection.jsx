import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../mock/mock';
import useReveal from '../hooks/useReveal';

export default function AboutSection() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal py-20 bg-[#f7f4ec] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0f3d91]/10 to-[#f26522]/10 rounded-2xl blur-lg" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={companyInfo.factoryImage} alt="NutriEdge Factory" className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-5 hidden md:block">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-2xl font-bold ne-gradient-text-blue">30+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Global Clients</p>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <p className="text-2xl font-bold ne-gradient-text-blue">15+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Export Countries</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="section-eyebrow">ABOUT NUTRIEDGE</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2 mb-4">
              Delivering Superior Nutraceutical Solutions
            </h2>
            <div className="h-1 w-16 bg-[#f26522] mb-6 rounded" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NutriEdge Lifesciences is a leading contract manufacturer and exporter of nutraceutical, wellness, and health-supplement products. With a modern A-grade facility located in Ahmedabad, we blend advanced science with world-class manufacturing standards to deliver products that meet global compliance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              From concept and formulation to packaging and export, our end-to-end capabilities empower brands to grow with confidence. Every product is a promise of purity, potency, and performance.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {['USFDA Approved Facility', 'WHO GMP Certified', 'ISO 22000:2018', 'HALAL &amp; KOSHER', '100+ Global Brands', 'Export to 15+ Countries'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#0a2a66] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#f26522] shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <Link to="/about" className="inline-flex items-center gap-2 btn-primary">
              LEARN MORE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
