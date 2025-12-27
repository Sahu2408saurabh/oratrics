import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="Oratrics Logo" />
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <a href="/">Home</a>
          <a href="/about">About Us</a>

          {/* PROGRAMS */}
          <div className={`dropdown ${programOpen ? "mobile-open" : ""}`}>
            <span
              className="dropdown-title"
              onClick={() => setProgramOpen(!programOpen)}
            >
              Programs ▾
            </span>

            <div className="dropdown-menu">
              <a href="#">Oratrics Math Explorers</a>
              <a href="#">Personality Enrichment</a>
              <a href="#">Public Speaking</a>
              <a href="#">Creative Writing</a>
              <a href="#">Confidence Building Social Skill</a>
              <a href="#">Leadership Program</a>
            </div>
          </div>

          <a href="/blog">Blog & Stories</a>
          <a href="/career">Career</a>

          {/* ===== MOBILE ACTIONS ===== */}
          <div className="mobile-actions">
            <button className="executive-btn mobile-btn">
              Oratrics Executive
            </button>

            <button
              className="login-btn-red mobile-btn"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              Login ▾
            </button>

            {loginOpen && (
              <div className="mobile-login-options">
                <a href="/parent-login">Parent Login</a>
                <a href="/student-login">Student Login</a>
              </div>
            )}
          </div>

        </nav>

        {/* ===== DESKTOP ACTIONS ===== */}
        <div className="nav-actions">
          <button className="executive-btn">
            Oratrics Executive
          </button>

          <div className="dropdown">
            <button className="login-btn-red">
              Login ▾
            </button>

            <div className="dropdown-menu login-menu">
              <a href="/parent-login">Parent Login</a>
              <a href="/student-login">Student Login</a>
            </div>
          </div>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setProgramOpen(false);
            setLoginOpen(false);
          }}
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
