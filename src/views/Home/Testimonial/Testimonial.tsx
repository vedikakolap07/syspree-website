import { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  { id: 1, image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg" },
  { id: 2, image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg" },
  { id: 3, image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg" },
  { id: 4, image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg" },
  { id: 5, image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg" },
  { id: 6, image: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg" },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Fixed 3-second interval cycle
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">OUR CLIENTS SPEAK FOR US</h2>

      <div className="testimonial-slider-container">
        <button className="arrow left" onClick={handlePrev} aria-label="Previous">
          &#10094;
        </button>

        <div className="cards-viewport">
          {testimonials.map((item, index) => {
            let positionClass = "hidden-card";

            const total = testimonials.length;
            const leftIndex = (activeIndex - 1 + total) % total;
            const rightIndex = (activeIndex + 1) % total;
            const exitLeftIndex = (activeIndex - 2 + total) % total;
            const enterRightIndex = (activeIndex + 2) % total;

            if (index === activeIndex) {
              positionClass = "center-card";
            } else if (index === leftIndex) {
              positionClass = "left-card";
            } else if (index === rightIndex) {
              positionClass = "right-card";
            } else if (index === exitLeftIndex) {
              positionClass = "exit-left";
            } else if (index === enterRightIndex) {
              positionClass = "enter-right";
            }

            return (
              <div className={`testimonial-card ${positionClass}`} key={item.id}>
                <div className="card-inner">
                  <img src={item.image} alt="Client Testimonial" />
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