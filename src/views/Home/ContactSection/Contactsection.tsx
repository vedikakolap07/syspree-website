import "./Contactsection.css";

function Contactsection() {
  return (
    <>
      {/* Testimonial Section with Scoped Class Names */}
      <section className="ct-testimonial-section">
        <p className="ct-testimonial-subtitle">SEE WHAT OUR CLIENTS SAY</p>

        <h2 className="ct-testimonial-heading">
          <span>Trusted</span> by businesses across industries for
          <br /> impactful digital and web solutions
        </h2>

        <div className="ct-carousel-container">
          <button className="ct-nav-arrow ct-left-arrow">‹</button>

          <div className="ct-testimonial-card">
            <p className="ct-testimonial-text">
              "SySpree Digital has been an incredible partner for our
              business..."
            </p>

            <div className="ct-client-info">
              <img
                src="https://syspree.com/wp-content/uploads/2024/10/whirly-bird-single-logo.png"
                alt="Zee Industries Logo"
                className="ct-client-logo"
              />
              <span className="ct-client-name">Zee Industries</span>
            </div>
          </div>

          <button className="ct-nav-arrow ct-right-arrow">›</button>
        </div>

        {/* Pagination Dots */}
        <div className="ct-pagination-dots">
          <span className="ct-dot"></span>
          <span className="ct-dot"></span>
          <span className="ct-dot"></span>
          <span className="ct-dot ct-active"></span>
          <span className="ct-dot"></span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <p className="contact-subtitle">CONTACT US</p>

        <h2>Get in Touch</h2>

        <div className="top-line"></div>

        <form className="contact-form">
          <textarea
            placeholder="How can we help you? Send us your details here"
            rows={4}
          ></textarea>

          <div className="row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone No" />
          </div>

          <input
            className="requirement"
            type="text"
            placeholder="Requirements"
          />

          <div className="captcha">reCAPTCHA</div>

          <button>Get in Touch</button>
          <br />
          <div className="divider"></div>
        </form>
      </section>

      {/* Office Section */}
      <section className="office-section">
        <div className="office-grid">
          <div className="office-column">
            <div className="office-card">
              <h3>Singapore Office:</h3>
              <div className="info">
                <span>📞</span>
                <p>+65 8900 0811</p>
              </div>
              <hr />
              <h4>SYSPREE DIGITAL PTE LTD.</h4>
              <div className="info">
                <span>📍</span>
                <p>
                  7 Temasek Boulevard, #12-07 Suntec Tower One, Singapore,
                  038987
                </p>
              </div>
              <hr />
              <div className="info">
                <span>⦿</span>
                <p>UEN : 201931082K</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="office-card">
              <h3>United Arab Emirates (UAE):</h3>
              <div className="info">
                <span>📞</span>
                <p>
                  +971 48714592
                  <br />
                  +971 505312199
                </p>
              </div>
              <div className="info">
                <span>📍</span>
                <p>
                  SySpree Digital
                  <br />
                  Aspect Tower 1005 A office no.
                  <br />
                  Business Bay, UAE
                </p>
              </div>
            </div>
            <div className="info">
              <span>Email</span>
              <p>contactus@syspree.com</p>
            </div>
          </div>

          <div className="office-column">
            <div className="office-card">
              <h3>India office:</h3>
              <div className="info">
                <span>📞</span>
                <p>+91 8652398888</p>
              </div>
              <div className="info">
                <span>📞</span>
                <p>
                  +91 22 41275220,
                  <br />
                  +91 2246048068
                </p>
              </div>
              <h4>SYSPREE DIGITAL PVT LTD.</h4>
              <div className="info">
                <span>📍</span>
                <p>
                  1101-B, 11th Floor,
                  <br />
                  Dev Corpora, 'A' Wing,
                  <br />
                  Eastern Express Highway,
                  <br />
                  Cadbury Junction,
                  <br />
                  Thane (W), Mumbai,
                  <br />
                  Maharashtra 400601, India.
                </p>
              </div>
              <div className="info">
                <span>⦿</span>
                <p>
                  (CIN): U72900MH2021FTC372638
                  <br />
                  GSTIN : 27ABHCS6321H1Z9
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactsection;
