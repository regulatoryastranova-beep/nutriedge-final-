import { useEffect, useRef, useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'ar', label: 'Arabic' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'zh-CN', label: 'Chinese' },
  { code: 'ru', label: 'Russian' },
  { code: 'de', label: 'German' },
  { code: 'ja', label: 'Japanese' },
  { code: 'sw', label: 'Swahili' }
];

// Loads Google Translate script and mounts a hidden widget. Re-triggers translation
// by directly setting the widget's language cookie / select value.
export default function LanguageSwitcher({ dark = false }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('en');
  const menuRef = useRef(null);

  // Load Google Translate widget once
  useEffect(() => {
    if (window.__gtLoaded) return;
    window.__gtLoaded = true;

    window.googleTranslateElementInit = () => {
      /* global google */
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.map((l) => l.code).join(','),
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    };

    const s = document.createElement('script');
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const selectLang = (code) => {
    setCurrent(code);
    setOpen(false);
    // Trigger Google Translate by manipulating its cookie & the hidden select
    const setCookie = (val) => {
      document.cookie = `googtrans=${val};path=/`;
      document.cookie = `googtrans=${val};domain=${window.location.hostname};path=/`;
    };
    if (code === 'en') {
      setCookie('/en/en');
    } else {
      setCookie(`/en/${code}`);
    }
    // Reload to apply
    window.location.reload();
  };

  // Detect current language from cookie on mount
  useEffect(() => {
    const m = document.cookie.match(/googtrans=\/en\/([a-z-]+)/i);
    if (m) setCurrent(m[1]);
  }, []);

  const currentLabel = LANGUAGES.find((l) => l.code === current)?.label || 'English';

  return (
    <div ref={menuRef} className="relative">
      <div id="google_translate_element" style={{ position: 'absolute', top: -9999, left: -9999 }} />
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${dark ? 'text-white/90 hover:text-white' : 'text-[#0a2a66] hover:text-[#f26522]'}`}
        aria-label="Choose language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden md:inline">{currentLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl border border-gray-100 py-1 z-50 max-h-80 overflow-y-auto">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLang(lang.code)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-[#0a2a66] hover:bg-[#f7f4ec] hover:text-[#f26522] transition-colors text-left"
            >
              <span>{lang.label}</span>
              {current === lang.code && <Check className="w-4 h-4 text-[#f26522]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
