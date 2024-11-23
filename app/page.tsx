import About from '@/components/About';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='relative min-h-screen w-screen overflow-hidden'>
      <Hero />
      <About />
    </div>
  );
}
