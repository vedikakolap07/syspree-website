import "./Leadership.css";

function Leadership() {
  return (
    <section className="leadership">
      {/* Target Title Block with Culture Meta Text */}
      <div className="community-title">
        <p className="culture-meta">OUR CULTURE</p>
        <h2>Our Community</h2>
      </div>

      <div className="leadership-container">
        {/* Left Side text layout container */}
        <div className="leadership-text-column">
          <h3>OUR LEADERSHIP</h3>

          <div className="leadership-paragraphs">
            <p>
              At Syspree, our leadership team is at the forefront of innovation
              and strategic growth. It is the backbone of our success and the
              driving force behind our clients' success.
            </p>

            <p>
              Caahill, as the Head of Business Management, Operations, and
              Fulfillment, plays a pivotal role in ensuring seamless project
              execution and operational excellence. His leadership guarantees that
              Syspree’s clients receive top-tier solutions with measurable impact.
            </p>

            <p>
              Jay, as the Head of Sales, drives Syspree’s market growth and excels
              at strengthening client relationships. His leadership in expanding
              Syspree’s reach ensures we stay competitive and deliver exceptional
              services.
            </p>

            <p>
              Together, they lead Syspree to deliver transformative results that
              drive your business forward.
            </p>
          </div>
        </div>

        {/* Right Side image column container */}
        <div className="leadership-images">
          <div className="leader-card">
            <img
              src="https://syspree.com/wp-content/uploads/2024/10/1-240x300.png"
              alt="Caahill - Head of Operations"
            />
          </div>
          <div className="leader-card">
            <img
              src="https://syspree.com/wp-content/uploads/2024/10/2-240x300.png"
              alt="Jay - Head of Sales"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;