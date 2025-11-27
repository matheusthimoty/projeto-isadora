import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
  const categories = [
    {
      title: 'Redações',
      description: 'Artigos, análises e textos de opinião aprofundados.',
      path: '/portfolio/redacoes',
      // SVG Path para o ícone de caneta/documento
      iconPath:
        'M12 20h9a1 1 0 001-1V5a1 1 0 00-1-1h-7.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0010.586 2H3a1 1 0 00-1 1v14a3 3 0 003 3h7zM16 16.5l-3 1.5 1-4-3-3 4 0 2-4 2 4 4 0-3 3 1 4z',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Fotojornalismo',
      description:
        'Coberturas visuais e galerias de fotos que contam histórias.',
      path: '/portfolio/fotojornalismo',
      // SVG Path para o ícone de câmera
      iconPath:
        'M16 12a4 4 0 10-8 0 4 4 0 008 0zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
      bgColor: 'bg-green-500',
    },
    {
      title: 'Edições e Produções Audiovisuais',
      description: 'Podcasts, vídeos e projetos de multimídia.',
      path: '/portfolio/audiovisuais',
      // SVG Path para o ícone de microfone/áudio
      iconPath:
        'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z',
      bgColor: 'bg-red-500',
    },
  ]

  return (
    <div className="page-content">
      <section className="portfolio-index-grid">
        {categories.map((cat, index) => (
          <Link
            key={cat.title}
            to={cat.path}
            className="portfolio-card-link"
            style={{ animationDelay: `${index * 0.15}s` }} // Adiciona o delay em cascata
          >
            <div className="portfolio-card">
              {/* Ícone baseado na categoria */}
              <div className={`icon-placeholder ${cat.bgColor}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-12 h-12"
                >
                  <path d={cat.iconPath} />
                </svg>
              </div>

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
