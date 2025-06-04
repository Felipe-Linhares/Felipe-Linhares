import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section bg-light">
      <div className="container">
        <img
          src="/src/assets/profile.jpg"
          alt="Your Profile Picture"
          className="profile-pic"
        />
        <h1 className="hero-title">Olá, sou Felipe Linhares.</h1>
        <p className="hero-subtitle">Desenvolvedor Full-stack</p>
        <p className="hero-description">
          Sou um desenvolvedor com mais de 4 anos de experiência prática,
          atuando em todas as camadas do desenvolvimento: Front-end, Back-end,
          Mobile e DevOps.
        </p>
        {/* <div className="hero-ctas">
          <a href="#features" className="btn btn-primary">
            Skills
          </a> */}
        {/* <a
            href="https://github.com/YOUR_GITHUB_USERNAME?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Projects
          </a> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
