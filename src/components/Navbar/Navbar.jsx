import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="Oratrics Logo" />
        </div>

        {/* DESKTOP MENU */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Programs</a>
          <a href="#">Book Demo</a>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </nav>

        {/* LOGIN BUTTON */}
        <div className="login-btn">
          <button>
            <span className="user-icon">👤</span> Login
          </button>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
