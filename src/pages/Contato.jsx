// src/pages/Contato.jsx
import React from 'react'

const Contato = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Entre em Contato</h1>
      <p className="page-subtitle">
        Vamos conversar sobre seu projeto de conteúdo ou jornalismo.
      </p>

      <div className="contact-form-container">
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem / Resumo do Projeto</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Gostaria de solicitar uma matéria, uma revisão, ou discutir uma pauta."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Enviar Mensagem
          </button>
        </form>

        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Ou me envie um e-mail diretamente: **isadora@jornalismo.com**
          (fictício)
        </p>
      </div>
    </div>
  )
}

export default Contato
