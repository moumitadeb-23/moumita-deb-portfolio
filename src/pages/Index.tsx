
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Goals from '@/components/Goals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
