import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import WhyNutriEdge from '../components/WhyNutriEdge';
import Packaging from '../components/Packaging';
import Certifications from '../components/Certifications';
import AboutSection from '../components/AboutSection';
import ProductRange from '../components/ProductRange';
import Expertise from '../components/Expertise';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import DirectorsWord from '../components/DirectorsWord';
import GlobalPresence from '../components/GlobalPresence';
import MakeYourBrand from '../components/MakeYourBrand';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <WhyNutriEdge />
      <Packaging />
      <MakeYourBrand />
      <AboutSection />
      <ProductRange limit={6} />
      <Expertise />
      <Process />
      <GlobalPresence />
      <Certifications />
      <Testimonials />
      <div className="pt-16" />
      <DirectorsWord />
    </main>
  );
}
