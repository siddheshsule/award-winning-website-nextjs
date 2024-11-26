import About from '@/components/About';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Story from '@/components/Story';

export default function Home() {
  return (
    <div className='relative min-h-screen w-screen overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      
    </div>
  );
}
