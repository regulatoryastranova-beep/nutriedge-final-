import { FileDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { companyInfo } from '../mock/mock';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const number = '917041783028';
  const message = encodeURIComponent("Hello Nutriedge");
  const waHref = `https://wa.me/${number}?text=${message}`;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* PDF Catalogue Download */}
      <a
        href={companyInfo.cataloguePdf}
        download="NutriEdge-Catalogue.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Catalogue"
        className="group flex items-center gap-3"
      >
        <span className="hidden md:inline-block bg-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-[#0a2a66] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Download Catalogue
        </span>
        <span className="relative flex">
          <span className="w-14 h-14 rounded-full bg-[#f26522] shadow-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <FileDown className="w-6 h-6" />
          </span>
          <span className="absolute -top-1 -left-1 bg-white text-[#f26522] text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-[#f26522]/20">
            PDF
          </span>
        </span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-3 group"
      >
        <span className="hidden md:inline-block bg-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-[#0a2a66] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Chat with us
        </span>
        <span className="relative flex">
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
          <span className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M20.52 3.449C12.831-3.984 1.116 1.62.001 12.032c-.302 2.848.457 5.649 2.144 7.998L.049 24l4.104-1.966c9.084 4.732 20.213-1.831 20.221-11.998.014-2.888-1.121-5.605-3.854-7.587zM12.05 21.786c-2.145 0-4.245-.575-6.076-1.664l-.436-.258-4.267 1.113 1.145-4.161-.284-.435C.686 12.75 1.988 6.28 6.998 3.673c5.008-2.607 11.146-.34 13.335 4.902 2.185 5.238-.4 11.29-5.635 13.156a10.34 10.34 0 01-2.648.055z"/>
            </svg>
          </span>
        </span>
      </a>
    </div>
  );
}
