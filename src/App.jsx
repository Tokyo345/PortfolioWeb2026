import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Highlight from './components/Highlight/Highlight';
import Experience from './components/Experience/Experience';
import Process from './components/Process/Process';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Activities from './components/Activities/Activities';

export default function App() {
  const lenisRef = useRef(null);

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Navbar />
      <main>
        <Hero />
        <Highlight />
        <Experience />
        <Process />
        <Activities />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
