import React from 'react';
import './about.css';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      {/* 2-COLUMN GRID HOLDING TEXT AND GRAPHIC ONLY */}
      <div className="about-container">
        
        {/* LEFT COLUMN: TEXT PANEL */}
        <div className="about-left-panel">
          <span className="subtitle">MORE LEADS. BETTER CONVERSIONS. GREAT SALES.</span>
          <h2>
            About Syspree:<br />
            <span className="highlight">Powerhouse of Digital Success</span>
          </h2>
          
          {/* THE FIXED, SHORTER SCROLLABLE TEXTBOX */}
          <div className="about-scroll-textbox">
            <p>
              At Syspree, we don't just create digital strategies—we engineer business growth. 
              As a powerhouse of digital success, we specialize in high-impact digital marketing, 
              web development, and AI-driven marketing solutions designed to drive revenue, 
              amplify brand presence, and maximize ROI.
            </p>
            <p>
              Our expertise spans across SEO, social media marketing, performance marketing, 
              website design & development, branding, and AI-powered automation. We don't believe 
              in one-size-fits-all approaches. Every campaign, website, and strategy is built with 
              precision—tailored to your industry, your audience, and your business goals.
            </p>
            <p>
              <strong>Data-Driven Execution:</strong> We use real-time insights to optimize 
              every touchpoint for maximum conversions, scaling companies systematically through 
              continuous refinement.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: FIXED GRAPHIC FRAME */}
        <div className="about-right-fixed-panel">
          <div className="core-graphic-card">
            <img src="https://syspree.com/wp-content/uploads/2024/10/Core-Framework-01-2-1024x1024.png" alt="CORE Framework Diagram" className="core-img" />
          </div>
        </div>

      </div>

      {/* BUTTON ROW OUTSIDE THE GRID FOR GLOBAL CENTERING */}
      <div className="about-btn-row">
        <button className="about-btn" type="button">
          Discover more about Syspree and our team
        </button>
      </div>
    </section>
  );
};

export default AboutSection;