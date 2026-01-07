import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const programRef = useRef(null);
  const loginRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (programRef.current && !programRef.current.contains(e.target)) {
        setProgramOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (menu) => (activeMenu === menu ? "active" : "");

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo">
          <a href="/" onClick={() => setActiveMenu("home")}>
            <img src="/logo.png" alt="Oratrics Logo" />
          </a>
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a
            href="/"
            className={isActive("home")}
            onClick={() => {
              setActiveMenu("home");
              setMenuOpen(false);
            }}
          >
            Home
          </a>

          <a
            href="/about_us"
            className={isActive("about_us")}
            onClick={() => {
              setActiveMenu("about_us");
              setMenuOpen(false);
            }}
          >
            About Us
          </a>

          {/* PROGRAMS DROPDOWN */}
          <div
            ref={programRef}
            className={`dropdown ${programOpen ? "open" : ""}`}
          >
            <span
              className={`dropdown-title ${isActive("programs")}`}
              onClick={() => {
                setProgramOpen(!programOpen);
                setActiveMenu("programs");
              }}
            >
              Programs <span className="caret">▾</span>
            </span>

            <div className="dropdown-menu programs-dropdown">
              <a href="/math" onClick={() => setProgramOpen(false)}>
                <span className="program-icon">📐</span>
                Oratrics Math Explorers
              </a>

              <a
                href="/personality_enrichment"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">🧠</span>
                Personality Enrichment
              </a>

              <a
                href="/public_speaking"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">🎤</span>
                Public Speaking
              </a>

              <a
                href="/creative_writing"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">✍️</span>
                Creative Writing
              </a>

              <a
                href="/confidence_building_social_skill_enhancement_program"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">💬</span>
                Confidence Building
              </a>

              <a
                href="/leadership_program"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">👑</span>
                Leadership Program
              </a>

              <a href="/money_skills" onClick={() => setProgramOpen(false)}>
                <span className="program-icon">💰</span>
                Money Skills
              </a>

              {/* Executive INSIDE dropdown */}
              <a
                href="/oratrics_executive"
                className="executive-dropdown"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">🏢</span>
                Oratrics Executive
              </a>
            </div>
          </div>

          <a
            href="/blog"
            className={isActive("blog")}
            onClick={() => {
              setActiveMenu("blog");
              setMenuOpen(false);
            }}
          >
            Blog & Stories
          </a>

          <a
            href="/careers"
            className={isActive("careers")}
            onClick={() => {
              setActiveMenu("careers");
              setMenuOpen(false);
            }}
          >
            Careers
          </a>

          {/* MOBILE ACTIONS */}
          <div className="mobile-actions">
            <a
              href="/franchise"
              className="executive-btn mobile-btn"
              onClick={() => setMenuOpen(false)}
            >
              Franchise
            </a>

            <button
              className="login-btn-red mobile-btn"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              Login ▾
            </button>

            {loginOpen && (
              <div className="mobile-login-options">
                <a
                  href="https://oratrics.in/login"
                  onClick={() => {
                    setLoginOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Student Login
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          <a href="/franchise" className="executive-btn">
            Franchise
          </a>

          <div
            ref={loginRef}
            className={`dropdown ${loginOpen ? "open" : ""}`}
          >
            <button
              className="login-btn-red"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              Login ▾
            </button>

            <div className="dropdown-menu">
              <a href="https://oratrics.in/login">Student Login</a>
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
