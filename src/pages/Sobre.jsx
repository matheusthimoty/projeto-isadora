// src/pages/Sobre.jsx
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
        <h2 className="section-title">Formação Acadêmica</h2>

        <div className="formacao-item">
          <span className="bullet-point">●</span>
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
        <h2 className="section-title">Experiências Profissionais</h2>

        <div className="experiencia-item">
          <div className="experiencia-header">
            <h3 className="job-title">Repórter e Redatora</h3>
            <span className="company">Donas FC</span>
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
