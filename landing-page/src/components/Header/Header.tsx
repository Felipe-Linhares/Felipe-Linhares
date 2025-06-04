import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={handleNavLinkClick}>
              Início
            </a>
          </li>
          <li>
            <a href="#features" onClick={handleNavLinkClick}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavLinkClick}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavLinkClick}>
              Contatos
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Felipe-Linhares"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavLinkClick}
            >
              GitHub
            </a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
