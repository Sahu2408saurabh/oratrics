import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeClassName = "active";

  return (
    <header className="navbar">
      <div className="nav-container">

        


        <div className="logo">
          <NavLink to="/">
            <img src="/logo.png" alt="Oratrics Logo" />
          </NavLink>
        </div>

        


        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about_us"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>

          



          <div
            ref={programRef}
            className={`dropdown ${programOpen ? "open" : ""}`}
          >
            <span
              className="dropdown-title"
              onClick={() => setProgramOpen(!programOpen)}
            >
              Programs <span className="caret">▾</span>
            </span>

            <div className="dropdown-menu">
              <NavLink to="/math" onClick={() => setProgramOpen(false)}>
                Oratrics Math Explorers
              </NavLink>
              <NavLink to="/personality_enrichment" onClick={() => setProgramOpen(false)}>
                Personality Enrichment
              </NavLink>
              <NavLink to="/public_speaking" onClick={() => setProgramOpen(false)}>
                Public Speaking
              </NavLink>
              <NavLink to="/creative_writing" onClick={() => setProgramOpen(false)}>
                Creative Writing
              </NavLink>
              <NavLink to="/confidence_building_social_skill_enhancement_program" onClick={() => setProgramOpen(false)}>
                Confidence Building Social Skill
              </NavLink>
              <NavLink to="/leadership_program" onClick={() => setProgramOpen(false)}>
                Leadership Program
              </NavLink>
              <NavLink to="/money_skills" onClick={() => setProgramOpen(false)}>
                Money Skills
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            onClick={() => setMenuOpen(false)}
          >
            Blog & Stories
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? activeClassName : "")}
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </NavLink>

          
          <div className="mobile-actions">
            <NavLink
              to="/oratrics_executive"
              className="executive-btn mobile-btn"
              onClick={() => setMenuOpen(false)}
            >
              Oratrics Executive
            </NavLink>

            <button
              className="login-btn-red mobile-btn"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              Login <span className="caret">▾</span>
            </button>

            {loginOpen && (
              <div className="mobile-login-options">
                <NavLink to="/login" onClick={() => setLoginOpen(false)}>
                  Student Login
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        
        <div className="nav-actions">
          <NavLink to="/oratrics_executive" className="executive-btn">
            Oratrics Executive
          </NavLink>

          <div
            ref={loginRef}
            className={`dropdown ${loginOpen ? "open" : ""}`}
          >
            <button
              className="login-btn-red"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              Login <span className="caret">▾</span>
            </button>

            <div className="dropdown-menu">
              <NavLink
                to="https://oratrics.in/login"
                className={({ isActive }) => (isActive ? activeClassName : "")}
              >
                Student Login
              </NavLink>
            </div>
          </div>
        </div>

        
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
