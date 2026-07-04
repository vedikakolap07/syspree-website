import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            className="logo"
            src="https://syspree.com/wp-content/uploads/2024/04/logosyspree.png"
            alt="Syspree Logo"
            width={100}
          />

          <div className="socials">
            <h3>Socials</h3>

            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
            </div>

            <div className="payments">
              <h3>Payments</h3>

              <img
                src="https://syspree.com/wp-content/smush-webp/2024/08/Footer-logos-1.png.webp"
                alt="Payment Methods"
              />
              <img
                src="https://syspree.com/wp-content/smush-webp/2024/08/Footer-logos-2.png.webp"
                alt="Payment Methods"
              />
            </div>
          
            <img
              className="award"
              src="https://threebestrated.in/awards/web_designers-thane-2026-drk.svg"
              alt="Award"
              width={100}
            />
          </div>
        </div>

        <div className="footer-column">
          <h3>QUICKLINKS</h3>
          <a href="">Blogs</a>
          <a>About Us</a>
          <a>Careers</a>
          <a>Contact Us</a>
          <a>Case Studies</a>
          <a>Policies</a>
        </div>

        <div className="footer-column">
          <h3>SERVICES</h3>
          <a>Web Design And Development</a>
          <a>Digital Marketing</a>
          <a>Artificial Intelligence</a>
          <a>Information Technology</a>
          <a>Outsourcing</a>
        </div>

        <div className="footer-column">
          <h3>INDUSTRIES</h3>
          <a> E-commerce</a>
          <a>Technology and SaaS</a>
          <a>Consulting and Corporate Services</a>
          <a>Education and Training</a>
          <a>Healthcare</a>
          <a>Interior Designers and Renovators</a>
          <a>Travel and Tourism</a>
          <a>Hospitality and FnB</a>
        </div>

        <div className="footer-column">
          <h3>LOCATIONS</h3>
          <a> India</a>
          <a>Singapore</a>
          <a>Consulting and Corporate Services</a>
          <a>Education and Training</a>
          <a>Healthcare</a>
          <a>Interior Designers and Renovators</a>
          <a>Travel and Tourism</a>
          <a>Hospitality and FnB</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2014–2026 · SySpree.Com · All Rights Reserved
      </div>
    </footer>
  );
}
export default Footer;
