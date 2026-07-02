import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./views/App.tsx";
import Footer from "./components/footer.tsx";
import Marquee from "./views/Home/Marquee/marquee.tsx";
import About from "./views/Home/About/about.tsx";
import Testimonial from "./views/Home/Testimonial/Testimonial.tsx";
import Getintouch from "./views/Home/Getintouch/Getintouch.tsx";
import Capabilities from "./views/Home/Capabilities/Capabilities.tsx";
import CTA from "./views/Home/CTA/CTA.tsx";
import Media from "./views/Home/Media/Media.tsx";
import Leadership from "./views/Home/Leadership/Leadership.tsx";
import Navbar from "./views/Home/Navbar/navbar.tsx";
import Contactsection from "./views/Home/ContactSection/Contactsection.tsx";
import KnowledgeCenter from "./views/Home/KnowledgeCentre/Knowledgecentre.tsx";
import TeamSection from "./views/Home/Teamsection/Teamsection.tsx";
import GlobalPresence from "./views/Home/GlobalPresence/GlobalPresence.tsx";
import IndustriesServe from "./views/Home/IndustriesServe/IndustriesServe.tsx";
import CaseStudies from "./views/Home/CaseStudies/Casestudies.tsx";
import HeroSection from "./views/Home/Herosection/Herosection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
    <App />
    <Marquee />
    <Testimonial />
    <About />
    <CaseStudies />
    <Getintouch />
    <Capabilities />
    <CTA />
      <IndustriesServe />
    <Media />
    <GlobalPresence />
    
  

    
    <Leadership />
    <TeamSection />
    <KnowledgeCenter />
    <Contactsection />
    <Footer />
  </StrictMode>,
);
