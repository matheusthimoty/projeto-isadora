// src/pages/Portfolio.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css' // Vamos criar este CSS

const Portfolio = () => {
  const categories = [
    {
      title: 'Redações',
      description: 'Artigos, análises e textos de opinião aprofundados.',
      path: '/portfolio/redacoes',
    },
    {
      title: 'Fotojornalismo',
      description:
        'Coberturas visuais e galerias de fotos que contam histórias.',
      path: '/portfolio/fotojornalismo',
    },
    {
      title: 'Edições e Produções Audiovisuais',
      description: 'Podcasts, vídeos e projetos de multimídia.',
      path: '/portfolio/audiovisuais',
    },
  ]

  return (
    <div className="page-content">
      <section className="portfolio-index-grid">
        {categories.map((cat) => (
          <Link key={cat.title} to={cat.path} className="portfolio-card-link">
            <div className="portfolio-card">
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <span className="card-action">Ver Projetos →</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Portfolio
