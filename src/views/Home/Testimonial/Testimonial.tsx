import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
  },
  {
    id: 2,
    image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
  },
  {
    id: 3,
    image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(1); // Middle card active by default

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Automatic smooth translation loop
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">OUR CLIENTS SPEAK FOR US</h2>

      <div className="testimonial-slider-fullwidth">
        <button className="arrow left" onClick={handlePrev} aria-label="Previous">
          &#10094;
        </button>

        <div className="cards-viewport-3d">
          {testimonials.map((item, index) => {
            // Determine explicit relative 3D placement in the carousel loop
            let positionClass = "";
            if (index === activeIndex) {
              positionClass = "center-card";
            } else if (
              index === activeIndex - 1 ||
              (activeIndex === 0 && index === testimonials.length - 1)
            ) {
              positionClass = "left-card";
            } else {
              positionClass = "right-card";
            }

            return (
              <div className={`card-perspective-wrapper ${positionClass}`} key={item.id}>
                <div className="card-inner-frame">
                  <img src={item.image} alt="Client Testimonial" />
                  {/* Visual gradient overlay matching the fade-out effect on side panels */}
                  <div className="edge-fade-overlay"></div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={handleNext} aria-label="Next">
          &#10095;
        </button>
      </div>
    </section>
  );
}