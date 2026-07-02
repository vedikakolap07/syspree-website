import "./index.css";

function Home() {
  return (
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

          <label>
            <input type="radio" name="choice" />
            Yes, I want to increase profits through digital marketing
            <span className="percent">88%</span>
          </label>

          <label>
            <input type="radio" name="choice" />
            No, I am not ready to grow just yet
            <span className="percent small">12%</span>
          </label>

          <button>I Made My Choice</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-container">
          <img src="https://syspree.com/wp-content/smush-webp/2025/08/Website-Banner-1.1.jpg.webp" alt="Hero" />
        </div>

        
      </div>
    </section>
  );
}

export default Home;