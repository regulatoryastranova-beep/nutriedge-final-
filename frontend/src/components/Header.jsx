import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { companyInfo, navigationLinks } from '../mock/mock';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md py-2' : 'py-3 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={companyInfo.logo}
            alt="NutriEdge Lifesciences"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors flex items-center gap-1 ${
                  location.pathname === link.path
                    ? 'text-[#f26522]'
                    : 'text-[#0a2a66] hover:text-[#f26522]'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
              {location.pathname === link.path && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#f26522]" />
              )}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.path}
                      className="block px-4 py-2 text-sm text-[#0a2a66] hover:bg-[#f7f4ec] hover:text-[#f26522]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="btn-primary text-sm inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            INQUIRE NOW
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#0a2a66]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-semibold tracking-wide ${
                  location.pathname === link.path
                    ? 'text-[#f26522]'
                    : 'text-[#0a2a66]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm text-center">
              INQUIRE NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
