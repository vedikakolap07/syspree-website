import { FaChevronDown } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img
            src="https://syspree.com/wp-content/uploads/2024/04/logosyspree.png"
            alt="Logo"
          />
        </div>

        <nav className="nav-links">
<a href="#" className="active">Home</a>
          <div className="dropdown">
            <div className="nav-item">
              <a href="#">About Us</a>
                <FaChevronDown className="dropdown-icon" />

            </div>

            <div className="dropdown-menu">
              <a href="#">Our Story</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
              <a href="#">Testimonials</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="nav-item">
              <a href="#">Services</a>
                <FaChevronDown className="dropdown-icon" />
            </div>

            <div className="dropdown-menu">
              <a href="#">Web Development</a>
              <a href="#">SEO</a>
              <a href="#">Digital Marketing</a>
              <a href="#">Branding</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="nav-item">
              <a href="#">Industries</a>
                <FaChevronDown className="dropdown-icon" />
            </div>

            <div className="dropdown-menu">
              <a href="#">Healthcare</a>
              <a href="#">Education</a>
              <a href="#">Real Estate</a>
              <a href="#">Finance</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="nav-item">
              <a href="#">Locations</a>
                <FaChevronDown className="dropdown-icon" />
            </div>

            <div className="dropdown-menu">
              <a href="#">India</a>
              <a href="#">USA</a>
              <a href="#">UAE</a>
              <a href="#">Australia</a>
            </div>
          </div>

          <div className="dropdown">
            <div className="nav-item">
              <a href="#">Our Works</a>
                <FaChevronDown className="dropdown-icon" />
            </div>

            <div className="dropdown-menu">
              <a href="#">Portfolio</a>
              <a href="#">Case Studies</a>
            </div>
          </div>

          <a href="#">Blog</a>
        </nav>

        <button className="consult-btn">
          Book Free Consultation
        </button>
      </div>
    </header>
  );
}

export default Navbar;