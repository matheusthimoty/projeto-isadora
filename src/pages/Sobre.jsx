import React from 'react'
import './Sobre.css' // Importa o CSS da página

const Sobre = () => {
  return (
    <div className="sobre-container">
      <h1 className="sobre-title">Sobre Mim</h1>
      <p className="sobre-subtitle">
        Conheça um pouco da minha trajetória profissional.
      </p>

      {/* 1. SEÇÃO DE FORMAÇÃO ACADÊMICA */}
      <section className="section-block section-formacao">
        <div className="section-header-icon">
          {/* Ícone de Formação (Estrela/Diploma) */}
          <svg
            className="icon-star"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <h2 className="section-title">Formação Acadêmica</h2>
        </div>

        <div className="formacao-item">
          <p className="formacao-description">
            <span className="degree">Bacharelado em Jornalismo</span>
            <span className="institution">
              (FAPCOM - Faculdade Paulus de Tecnologia e Comunicação)
            </span>
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO DE EXPERIÊNCIAS PROFISSIONAIS */}
      <section className="section-block section-experiencia">
        <div className="section-header-icon">
          {/* Ícone de Experiência (Maleta/Trabalho) */}
          <svg
            className="icon-briefcase"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20H14V16H10V20ZM4 6V18C4 19.11 4.9 20 6 20H8V16H16V20H18C19.11 20 20 19.11 20 18V6C20 4.9 19.11 4 18 4H14V2H10V4H6C4.9 4 4 4.9 4 6ZM18 10H6V8H18V10Z" />
          </svg>
          <h2 className="section-title">Experiências Profissionais</h2>
        </div>

        <div className="experiencia-item">
          <div className="experiencia-header">
            <h3 className="job-title">Repórter e Redatora</h3>
            <span className="company">Donas FC</span>
            <span className="date-range">2023 - Presente</span>
          </div>
          <ul className="job-description-list">
            <li>
              Faço cobertura de futebol feminino em competições nacionais e
              internacionais.
            </li>
            <li>
              Produzo análises, entrevistas e matérias sobre jogos e mercado da
              bola.
            </li>
          </ul>
        </div>

        {/* Você pode adicionar mais experiências aqui, se desejar */}
      </section>
    </div>
  )
}

export default Sobre
