import ExperienceSection from "./components/ExperienceSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <ScrollProgress />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
