// import "./index.css";

// function Home() {
//   return (
//     <section className="hero">
      
//       <div className="hero-left">
//         <p className="tagline">
//           RIGHT CLIENTS, RIGHT PRICE, RIGHT RESULTS TAILORED FOR YOU
//         </p>

//         <h1>
//           <span>Digital Marketing</span> and
//           <br />
//           <span>Web Development</span>
//           <br />
//           Built for <span>Your Profit</span>
//         </h1>

//         <p className="framework">
//           POWERED BY OUR PROVEN FRAMEWORK <strong>CORE.</strong>
//         </p>

//         <div className="choice-card">
//           <h2>What's your thought?</h2>

//           <label>
//             <input type="radio" name="choice" />
//             Yes, I want to increase profits through digital marketing
//             <span className="percent">88%</span>
//           </label>

//           <label>
//             <input type="radio" name="choice" />
//             No, I am not ready to grow just yet
//             <span className="percent small">12%</span>
//           </label>

//           <button>I Made My Choice</button>
//         </div>
//       </div>

//       <div className="hero-right">
//         <div className="image-container">
//           <img src="https://syspree.com/wp-content/smush-webp/2025/08/Website-Banner-1.1.jpg.webp" alt="Hero" />
//         </div>

        
//       </div>
//     </section>
//   );
// }

// export default Home;


import './styles/index.css';

// Layout Views
import About from './views/Home/About/about';
import Capabilities from './views/Home/Capabilities/Capabilities';
import Casestudies from './views/Home/CaseStudies/Casestudies';
import IndustriesServe from './views/Home/IndustriesServe/IndustriesServe';
import Leadership from './views/Home/Leadership/Leadership';
import Getintouch from './views/Home/Getintouch/Getintouch';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="app-container">
      
      {/* SECTION 1: Fixed Frame-102 (Hero Area) */}
      <section 
        className="parallax-container" 
        style={{ backgroundImage: "url('/src/assets/Frame-102.png')" }}
      >
        <div className="section-content-wrapper">
          <About />
        </div>
      </section>

      {/* SECTION 2: Capabilities Grid */}
      <section className="normal-scroll-container">
        <Capabilities />
      </section>

      {/* SECTION 3: Case Studies Grid */}
      <section className="normal-scroll-container">
        <Casestudies />
      </section>

      {/* SECTION 4: Fixed Frame-12 (Industries We Serve) */}
      <section 
        className="parallax-container" 
        style={{ backgroundImage: "url('/src/assets/Frame-12.png')" }}
      >
        <div className="section-content-wrapper">
          <IndustriesServe />
        </div>
      </section>

      {/* SECTION 5: Leadership Grid */}
      <section className="normal-scroll-container">
        <Leadership />
      </section>

      {/* SECTION 6: Fixed Frame-16 (Get In Touch Area) */}
      <section 
        className="parallax-container" 
        style={{ backgroundImage: "url('/src/assets/Frame-16.png')" }}
      >
        <div className="section-content-wrapper">
          <Getintouch />
        </div>
      </section>

      <Footer />
    </div>
  );
}