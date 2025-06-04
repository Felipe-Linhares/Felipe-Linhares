import React from "react";
import "./Features.css";

const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="skills-container">
          {" "}
          <div className="skills-type-section">
            <h3 className="skills-type-title">Hard Skills</h3>
            <div className="features-grid">
              {" "}
              <div className="feature-item">
                <span className="icon">🐍</span> <h4>Python & Django DRF</h4>
                <p>
                  Desenvolvimento de APIs robustas com Python e Django Rest
                  Framework.{" "}
                </p>
              </div>
              <div className="feature-item">
                <span className="icon">💻</span> <h4>Web & Mobile</h4>
                <p>
                  Desenvolvimento de aplicações web e mobile utilizando Angular
                  Framework e Flutter para soluções multiplataforma.
                </p>
              </div>
              <div className="feature-item">
                <span className="icon">☁️</span>
                <h4>DevOps & Cloud</h4>
                <p>
                  Deploy e automação com Docker, NGINX e serviços em nuvem (AWS,
                  Huawei Cloud).
                </p>
              </div>
              <div className="feature-item">
                <span className="icon">📊</span>{" "}
                <h4>Banco de Dados & Boas Práticas</h4>
                <p>
                  Gestão de dados com PostgreSQL, aplicando Código Limpo e
                  Arquitetura Limpa.
                </p>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="skills-type-section">
            <h3 className="skills-type-title">Soft Skills</h3>
            <div className="features-grid">
              {" "}
              <div className="feature-item">
                <span className="icon">🤝</span>
                <h4>Trabalho em Equipe</h4>
                <p>
                  Colaboração efetiva e contribuição positiva em equipes
                  multidisciplinares.
                </p>
              </div>
              <div className="feature-item">
                <span className="icon">💡</span>
                <h4>Resolução de Problemas</h4>
                <p>
                  Capacidade analítica e abordagem estruturada para solucionar
                  desafios.
                </p>
              </div>
              <div className="feature-item">
                <span className="icon">🔄</span>
                <h4>Adaptabilidade</h4>
                <p>
                  Flexibilidade para lidar com mudanças e aprender novas
                  tecnologias.
                </p>
              </div>
              <div className="feature-item">
                <span className="icon">📢</span>
                <h4>Comunicação</h4>
                <p>
                  Habilidade em transmitir ideias complexas de forma clara e
                  eficiente.
                </p>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Features;
