import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section bg-light">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm [Your Name], a front-end developer passionate about creating
            memorable and functional digital experiences. With X years of
            experience (or "a recent graduate with..." or "always curious
            about..."), my journey in web development began with a fascination
            for how technology can simplify and enrich people's lives.
          </p>
          <p>
            My main tools include <strong>React</strong> and{" "}
            <strong>TypeScript</strong>, but I'm always open to learning new
            technologies and approaches to solve complex problems. I constantly
            seek to improve my skills in interface design, performance, and
            accessibility.
          </p>
          <p>
            When I'm not coding, you can find me [your hobbies, e.g., reading
            about new technologies, playing video games, practicing a sport]. I
            love challenges and the opportunity to collaborate on projects that
            aim to make a difference.
          </p>
          <a
            href="URL_TO_YOUR_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary download-cv-btn"
          >
            Download Resume
          </a>
          {/* Remember to replace URL_TO_YOUR_RESUME.pdf */}
        </div>
      </div>
    </section>
  );
};

export default About;
