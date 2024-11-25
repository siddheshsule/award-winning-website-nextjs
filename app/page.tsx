import About from '@/components/About';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className='relative min-h-screen w-screen overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </div>
  );
}
