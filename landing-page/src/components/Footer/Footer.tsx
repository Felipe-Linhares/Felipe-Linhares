import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Felipe Linhares. All rights
          reserved.
        </p>
        {/* <div className="social-links">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {/* Add other social links if desired */}
        {/* </div>  */}
      </div>
    </footer>
  );
};

export default Footer;
