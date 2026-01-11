import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Confidence from "../../assets/images/Confidence.png";
import Leadership from "../../assets/images/Leadership.png";
import Maths from "../../assets/images/Maths.png";
import Money from "../../assets/images/Money.png";
import Personality from "../../assets/images/Personality.png";
import Public from "../../assets/images/Public.png";
import Writing from "../../assets/images/Writing.png";
import Exective from "../../assets/images/Exective.png";

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
       

        <div className="logo">
          <Link href="/" onClick={() => setActiveMenu("home")}>
      <Image
  src="/assets/oratricslogo.webp"
  alt="Oratrics Logo"
  width={150}
  height={42}
  priority
/>             </Link>
        </div>

       
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            href="/"
            className={isActive("home")}
            onClick={() => {
              setActiveMenu("home");
              setMenuOpen(false);
            }}
          >
            Home
          </Link>

          <Link
            href="/about_us"
            className={isActive("about_us")}
            onClick={() => {
              setActiveMenu("about_us");
              setMenuOpen(false);
            }}
          >
            About Us
          </Link>

         
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
              <Link href="/math" onClick={() => setProgramOpen(false)}>
                <span className="program-icon">
                                       <img
                    src="/images/Maths.png"
                    alt="Math Icon"
                    className="math-icon "
                  />
                </span>
                Oratrics Math Explorers
              </Link>

              <Link
                href="/personality_enrichment"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">
                  <img
                    src="/images/Personality.png"
                    alt="Personality"
                   
                    className="math-icon "
                  />
                </span>
                Personality Enrichment
              </Link>

              <Link
                href="/public_speaking"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">
                  <img
                    src="/images/Public.png"
                    alt="Public"
                    className="math-icon "
                  />
                </span>
                Public Speaking
              </Link>

              <Link
                href="/creative_writing"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">
                  <img
                    src="/images/Writing.png"
                    alt="Writing"
                    className="math-icon "
                  />
                </span>
                Creative Writing
              </Link>

              <Link
                href="/confidence_building_social_skill_enhancement_program"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">
                  <img
                    src="/images/Confidence.png"
                    alt="Confidence"
                    className="math-icon "
                  />
                </span>
                Confidence Building
              </Link>

              <Link
                href="/leadership_program"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">
                  <img
                    src="/images/Leadership.png"
                    alt="Leadership"
                    className="math-icon "
                  />
                </span>
                Leadership Program
              </Link>

              <Link href="/money_skills" onClick={() => setProgramOpen(false)}>
                <span className="program-icon">
                  <img
                    src="/images/Money.png"
                    alt="Money"
                    className="math-icon "
                  />
                </span>
                Money Skills
              </Link>

              
              <Link
                href="/oratrics_executive"
                className="executive-dropdown"
                onClick={() => setProgramOpen(false)}
              >
                <span className="program-icon">
                   <img
                    src="/images/Exective.png"
                    style={{}}
                    alt="Exective"
                    className="math-icon "
                  />
                </span>
                Oratrics Executive
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            className={isActive("blog")}
            onClick={() => {
              setActiveMenu("blog");
              setMenuOpen(false);
            }}
          >
            Blog & Stories
          </Link>

          <Link
            href="/careers"
            className={isActive("careers")}
            onClick={() => {
              setActiveMenu("careers");
              setMenuOpen(false);
            }}
          >
            Careers
          </Link>

          
          <div className="mobile-actions">
            <Link
              href="/franchise"
              className="executive-btn mobile-btn"
              onClick={() => setMenuOpen(false)}
            >
              Franchise
            </Link>

            <button
              className="login-btn-red mobile-btn"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              Login ▾
            </button>

            {loginOpen && (
              <div className="mobile-login-options">
                <Link
                  href="https://oratrics.in/login"
                  onClick={() => {
                    setLoginOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Student Login
                </Link>
              </div>
            )}
          </div>
        </nav>

        
        <div className="nav-actions">
          <Link href="/franchise" className="executive-btn">
            Franchise
          </Link>

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
              <Link href="https://oratrics.in/login">Student Login</Link>
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