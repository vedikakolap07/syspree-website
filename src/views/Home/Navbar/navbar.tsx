import './navbar.css'
function Navbar(){
  return(

<header className="navbar">
  <div className="nav-container">

    <div className="logo">
      <img src="https://syspree.com/wp-content/uploads/2024/04/logosyspree.png" alt="Logo" />
    </div>

    <nav className="nav-links">
      <a href="#">Home</a>

      <div className="nav-item">
        <a href="#">About Us</a>
        <span>▼</span>
      </div>

      <div className="nav-item">
        <a href="#">Services</a>
        <span>▼</span>
      </div>

      <div className="nav-item">
        <a href="#">Industries</a>
        <span>▼</span>
      </div>

      <div className="nav-item">
        <a href="#">Locations</a>
        <span>▼</span>
      </div>

      <div className="nav-item">
        <a href="#">Our Works</a>
        <span>▼</span>
      </div>

      <a href="#">Blog</a>
    </nav>

    <button className="consult-btn">
      Book Free Consultation
    </button>

  </div>
</header>
)
}
export default Navbar;