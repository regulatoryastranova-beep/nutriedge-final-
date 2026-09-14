import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import RnD from './pages/RnD';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
   document.title = 'NutriEdge Lifesciences | Nutraceutical & Pharmaceutical Manufacturing';
  }, []);

  return (
    <div className="App font-sans">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rnd" element={<RnD />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
