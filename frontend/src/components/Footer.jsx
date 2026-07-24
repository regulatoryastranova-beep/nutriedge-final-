import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Home, Info, Package, GraduationCap, MessageSquare, ArrowRight } from 'lucide-react';
import { companyInfo } from '../mock/mock';
import { productCatalogue } from '../mock/productsData';

export default function Footer() {
  return (
    <footer className="bg-[#0a2a66] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#f26522] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#2a6fd6] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg px-6 py-4">
            <img src={companyInfo.logo} alt="NutriEdge" className="h-14 w-auto" />
          </div>
        </div>

        <div className="border-t border-white/20 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <p className="text-sm text-white/80 leading-relaxed mb-5">
              Ready to build your next health product? From concept to creation, NutriEdge Lifesciences is here to support your growth. Reach out today and let&apos;s get started.
            </p>
            <h4 className="font-bold text-sm tracking-wider mb-3">CONTACT US</h4>
            <div className="h-px w-16 bg-[#f26522] mb-4" />
            <p className="text-xs tracking-widest text-white/70 mb-3">SALES DEPARTMENT</p>
            <ul className="space-y-3 text-sm">
              {companyInfo.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-[#f26522] transition-colors">{p}</a>
                </li>
              ))}
              {companyInfo.emails.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <a href={`mailto:${e}`} className="hover:text-[#f26522] transition-colors break-all">{e}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-3">QUICK LINKS</h4>
            <div className="h-px w-16 bg-[#f26522] mb-4" />
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home', Icon: Home },
                { to: '/about', label: 'About Us', Icon: Info },
                { to: '/products', label: 'Products', Icon: Package },
                { to: '/rnd', label: 'R&D', Icon: GraduationCap },
                { to: '/contact', label: 'Contact Us', Icon: MessageSquare }
              ].map(({ to, label, Icon }) => (
                <li key={label}>
                  <Link to={to} className="flex items-center gap-3 hover:text-[#f26522] transition-colors">
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-3">PRODUCTS</h4>
            <div className="h-px w-16 bg-[#f26522] mb-4" />
            <ul className="space-y-3 text-sm">
              {productCatalogue.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className="flex items-center gap-2 hover:text-[#f26522] transition-colors">
                    <ArrowRight className="w-3 h-3" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Addresses */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-3">CORPORATE OFFICE</h4>
            <div className="h-px w-16 bg-[#f26522] mb-4" />
            <div className="flex items-start gap-3 text-sm mb-6">
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              <p className="text-white/80 leading-relaxed">{companyInfo.corporateAddress}</p>
            </div>
            <h4 className="font-bold text-sm tracking-wider mb-3">FACTORY ADDRESS</h4>
            <div className="h-px w-16 bg-[#f26522] mb-4" />
            <div className="flex items-start gap-3 text-sm">
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              <p className="text-white/80 leading-relaxed">{companyInfo.factoryAddress}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} NutriEdge Lifesciences. All Rights Reserved.
          </p>
          <div className="flex gap-3">
            <a href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#f26522] hover:border-[#f26522] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#f26522] hover:border-[#f26522] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#f26522] hover:border-[#f26522] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
