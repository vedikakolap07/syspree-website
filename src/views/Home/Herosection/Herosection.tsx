import "./Herosection.css";

function Home() {
  return (
    <>
    <section className="hero">
      
      <div className="hero-left">
        <p className="tagline">
          RIGHT CLIENTS, RIGHT PRICE, RIGHT RESULTS TAILORED FOR YOU
        </p>

        <h1>
          <span>Digital Marketing</span> and
          <br />
          <span>Web Development</span>
          <br />
          Built for <span>Your Profit</span>
        </h1>

        <p className="framework">
          POWERED BY OUR PROVEN FRAMEWORK <strong>CORE.</strong>
        </p>

        <div className="choice-card">
          <h2>What's your thought?</h2>

          {/* Applied the flexbox wrapper classes here */}
          <div className="choice-option">
            <label className="option-text-wrapper">
              <input type="radio" name="choice" />
              <span>Yes, I want to increase profits through digital marketing</span>
            </label>
            <span className="percent">88%</span>
          </div>

          <div className="choice-option">
            <label className="option-text-wrapper">
              <input type="radio" name="choice" />
              <span>No, I am not ready to grow just yet</span>
            </label>
            <span className="percent small">12%</span>
          </div>

          <button>I Made My Choice</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-container">
          <img src="https://syspree.com/wp-content/smush-webp/2025/08/Website-Banner-1.1.jpg.webp" alt="Hero" />
        </div>
      </div>
      
    </section>
    <div>
      <img src="./assets/wave.png"
></img>        </div>
</>
  );
}

export default Home;
