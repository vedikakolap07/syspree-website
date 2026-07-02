import React, { useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="hero-page-wrapper">
      <section className="hero-layout-container">
        {/* LEFT CONTENT COLUMN */}
        <div className="hero-text-side">
          <p className="hero-top-subtitle">
            RIGHT CLIENTS, RIGHT PRICE, RIGHT RESULTS TAILORED FOR YOU
          </p>
          
          <h1 className="hero-main-title">
            <span className="brand-orange">Digital Marketing</span> and{" "}
            <span className="brand-orange">Web Development</span> Built for{" "}
            <span className="brand-orange">Your Profit</span>
          </h1>
          
          <p className="hero-framework-tag">
            POWERED BY OUR PROVEN FRAMEWORK <strong>CORE.</strong>
          </p>

          {/* POLL CARD */}
          <div className="thought-poll-card">
            <h3 className="poll-header">Whats your thought?</h3>
            
            <div className="poll-options-list">
              <label className="poll-item">
                <input 
                  type="radio" 
                  name="thought-poll" 
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={() => setSelectedOption("yes")}
                />
                <span className="radio-custom"></span>
                <span className="option-text">
                  Yes, I want to increase profits through digital marketing <span className="percentage-text">88%</span>
                </span>
              </label>

              <label className="poll-item">
                <input 
                  type="radio" 
                  name="thought-poll" 
                  value="no"
                  checked={selectedOption === "no"}
                  onChange={() => setSelectedOption("no")}
                />
                <span className="radio-custom"></span>
                <span className="option-text">
                  No, I am not ready to grow just yet <span className="percentage-text">12%</span>
                </span>
              </label>
            </div>

            <div className="poll-action-wrapper">
              <button className="poll-submit-btn">I Made My Choice</button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE COLUMN */}
        <div className="hero-graphics-side">
          <img 
            src="https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg" 
            alt="5x Growth Results Showcase" 
            className="main-showcase-img"
          />
        </div>
      </section>
    </div>
  );
}