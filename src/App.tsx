import './styles/index.css';

// 1. IMPORT BACKGROUND WALLPAPERS CORRECTLY AS JAVASCRIPT MODULES
import bgFrame102 from './assets/Frame-102.png';
import bgFrame12 from './assets/Frame-12.png';
import bgFrame16 from './assets/Frame-16.png';
import bgFrame4 from './assets/Frame-4.png';
import bgFrame6 from './assets/Frame-6.png';
import bgFrame7 from './assets/Frame-7.png';
import bgFrame8 from './assets/Frame-8.png';
// 2. IMPORT ALL YOUR COMPONENT VIEWS
import Navbar from "./views/Home/Navbar/navbar.tsx";
import HeroSection from "./views/Home/Herosection/Herosection.tsx";
import Marquee from "./views/Home/Marquee/marquee.tsx";
import Testimonial from "./views/Home/Testimonial/Testimonial.tsx";
import About from "./views/Home/About/about.tsx";
import CaseStudies from "./views/Home/CaseStudies/Casestudies.tsx";
import Getintouch from "./views/Home/Getintouch/Getintouch.tsx";
import Capabilities from "./views/Home/Capabilities/Capabilities.tsx";
import CTA from "./views/Home/CTA/CTA.tsx";
import IndustriesServe from "./views/Home/IndustriesServe/IndustriesServe.tsx";
import Media from "./views/Home/Media/Media.tsx";
import GlobalPresence from "./views/Home/GlobalPresence/GlobalPresence.tsx";
import Leadership from "./views/Home/Leadership/Leadership.tsx";
import TeamSection from "./views/Home/Teamsection/Teamsection.tsx";
import KnowledgeCenter from "./views/Home/KnowledgeCentre/Knowledgecentre.tsx";
import Contactsection from "./views/Home/ContactSection/Contactsection.tsx";
import Footer from "./components/footer.tsx";

export default function App() {
  return (
    <div className="app-container">
      {/* Top Header Navigation */}
      <Navbar />


      {/* PARALLAX LAYER 1: About Section (Floats on Frame-102) */}
      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame102})` }}
      >
        <div className="section-content-wrapper">
          <HeroSection />
        </div>
      </section>

      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame4})` }}
      >
        <div className="section-content-wrapper">
          <Marquee />
        </div>
      </section>

      {/* 3D Testimonial Slider Grid */}
      <section className="normal-scroll-container">
        <Testimonial />
      </section>

      {/* PARALLAX LAYER 1: About Section (Floats on Frame-102) */}
      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame6})` }}
      >
        <div className="section-content-wrapper">
          <About />
        </div>
      </section>

      {/* Scrolling Content Block */}
      <section className="normal-scroll-container">
        <CaseStudies />
      </section>

      {/* PARALLAX LAYER 2: Get In Touch Form */}
      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame7})` }}
      >
        <div className="section-content-wrapper">
          <Getintouch />
        </div>
      </section>

      {/* Core Operational Grids */}
      <section className="normal-scroll-container">
        <Capabilities />
        <CTA />
      </section>

      {/* PARALLAX LAYER 3: Industries We Serve (Floats on Frame-12) */}
      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame7})` }}
      >
        <div className="section-content-wrapper">
          <IndustriesServe />
        </div>
      </section>

      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame8})` }}
      >
        <div className="section-content-wrapper">
          <Media />
        </div>
      </section>
      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame12})` }}
      >
        <div className="section-content-wrapper">
          <GlobalPresence />
        </div>
      </section>
        <section className="normal-scroll-container">


        <Leadership />
        <TeamSection />
      

      </section>

      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame16})` }}
      >
        <div className="section-content-wrapper">
          <KnowledgeCenter />
        </div>
      </section>


      <section
        className="parallax-container"
        style={{ backgroundImage: `url(${bgFrame16})` }}
      >
        <div className="section-content-wrapper">
          <Contactsection />
        </div>
      </section>
      {/* Lower Brand Info Sections */}
    

      {/* Site Footer */}
      <Footer />
    </div>
  );
}