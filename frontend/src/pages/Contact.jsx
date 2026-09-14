import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHero from '../components/PageHero';
import { Phone, Mail, MapPin, Send, Building2, Loader2 } from 'lucide-react';
import { companyInfo } from '../mock/mock';
import { useToast } from '../hooks/use-toast';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact NutriEdge Lifesciences | Pharmaceutical Manufacturing India';
  }, []);

  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      toast({ title: 'Thank you!', description: 'Your inquiry has been received. Our team will contact you shortly.' });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      const msg = err?.response?.data?.detail || 'Could not send your inquiry. Please try again or email us directly.';
      toast({ title: 'Something went wrong', description: typeof msg === 'string' ? msg : 'Please try again.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <PageHero title="Contact Us" subtitle="Let's build your next nutraceutical success story together." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {[
            { Icon: Phone, title: 'Call Us', items: companyInfo.phones, hrefBase: 'tel:' },
            { Icon: Mail, title: 'Email Us', items: companyInfo.emails, hrefBase: 'mailto:' },
            { Icon: MapPin, title: 'Corporate Office', items: [companyInfo.corporateAddress] }
          ].map(({ Icon, title, items, hrefBase }) => (
            <div key={title} className="group p-8 rounded-xl bg-[#f7f4ec] hover-lift">
              <div className="w-14 h-14 rounded-lg ne-gradient-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0a2a66] mb-3">{title}</h3>
              <ul className="space-y-2">
                {items.map((it) => (
                  <li key={it} className="text-gray-700 text-sm leading-relaxed">
                    {hrefBase ? (
                      <a href={`${hrefBase}${it.replace(/\s/g, '')}`} className="hover:text-[#f26522] transition-colors break-all">{it}</a>
                    ) : it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#f7f4ec]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-eyebrow">GET IN TOUCH</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold ne-gradient-text-blue mt-2 mb-4">
              Send Us Your Inquiry
            </h2>
            <div className="h-1 w-16 bg-[#f26522] mb-6 rounded" />
            <p className="text-gray-700 leading-relaxed mb-8">
              Ready to bring your nutraceutical brand vision to life? Fill out the form and our team will get in touch with you within 24 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#0f3d91]" />
                </div>
                <div>
                  <p className="font-bold text-[#0a2a66] mb-1">Factory Address</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{companyInfo.factoryAddress}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#f26522]" />
                </div>
                <div>
                  <p className="font-bold text-[#0a2a66] mb-1">Corporate Office</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{companyInfo.corporateAddress}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0a2a66] mb-2 tracking-wider">FULL NAME *</label>
                <input required name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0f3d91] transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0a2a66] mb-2 tracking-wider">PHONE *</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0f3d91] transition-colors" placeholder="+91 00000 00000" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#0a2a66] mb-2 tracking-wider">EMAIL *</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0f3d91] transition-colors" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#0a2a66] mb-2 tracking-wider">SUBJECT</label>
              <input name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0f3d91] transition-colors" placeholder="Custom formulation inquiry" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#0a2a66] mb-2 tracking-wider">MESSAGE *</label>
              <textarea required name="message" value={form.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0f3d91] transition-colors resize-none" placeholder="Tell us about your product idea..." />
            </div>
            <button type="submit" disabled={submitting} className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
              {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> SENDING...</>) : (<>SEND INQUIRY <Send className="w-4 h-4" /></>)}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
