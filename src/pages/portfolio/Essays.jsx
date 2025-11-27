import React from 'react'
import ArticleCard from '../../components/ArticleCard'
import { ESSAYS_DATA } from '../../data/essaysData'
import '../portfolio/Essays.css'

const Essays = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Redações</h1>
      <p className="page-subtitle">
        Textos aprofundados, análises táticas e artigos de opinião sobre futebol
        feminino e jornalismo esportivo.
      </p>

      <section className="essays-grid">
        {ESSAYS_DATA.map((article, index) => (
          <ArticleCard
            key={article.id}
            index={index}
            title={article.title}
            category={article.category}
            date={article.date}
            slug={article.slug}
            type={article.type}
            externalLink={article.externalLink}
            imageUrl={article.imageUrl}
          />
        ))}
      </section>

      {ESSAYS_DATA.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '40px' }}>
          Nenhuma redação encontrada no momento.
        </p>
      )}
    </div>
  )
}

export default Essays
