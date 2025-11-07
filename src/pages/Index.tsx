import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductFlow from '@/components/ProductFlow';
import HorizontalScroll from '@/components/HorizontalScroll';
import Pricing from '@/components/Pricing';
import Integrations from '@/components/Integrations';
import SuperadminShowcase from '@/components/SuperadminShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  useSmoothScroll();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <CursorEffect />
      <Navbar />
      <Hero />
      <Features />
      <ProductFlow />
      <HorizontalScroll />
      <Pricing />
      <Integrations />
      <SuperadminShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
