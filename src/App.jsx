import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './components/Hero';
import Services from './components/Services';
import Plans from './components/Plans';
import Projects from './components/Projects';
import Terms from './components/Terms';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Utility Components
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader only on first visit per session
    const visited = sessionStorage.getItem('uminno_visited');
    if (visited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('uminno_visited', 'true');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />

          <main>
            <Hero />
            <Services />
            <Plans />
            <Projects />
            <Terms />
            {/* <Testimonials /> */}
            {/* <FAQ /> */}
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
