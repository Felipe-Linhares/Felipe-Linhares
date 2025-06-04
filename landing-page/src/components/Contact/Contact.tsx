import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/felipe-linhares"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
            <span className="link-text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Felipe-Linhares"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
            <span className="link-text">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
