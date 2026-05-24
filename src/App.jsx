import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import WhyHireMe from './components/WhyHireMe.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import DiscussCTA from './components/DiscussCTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import './App.css';

const ScrollTopButton = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Zoom in={trigger}>
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1300 }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navbar />
      <Box component="main">
        <Hero />
        <Services />
        <Experience />
        <WhyHireMe />
        <Projects />
        <Testimonials />
        <DiscussCTA />
        <About />
        <Contact />
      </Box>
      <Footer />
      <WhatsAppFab />
      <ScrollTopButton />
    </Box>
  );
}

export default App;
