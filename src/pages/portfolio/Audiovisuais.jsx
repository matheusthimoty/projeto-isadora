import React from 'react'
import ArticleCard from '../../components/ArticleCard' // Reutiliza o Card
import { AUDIO_DATA } from '../../data/audioData' // Importa os dados de áudio/vídeo
import '../portfolio/Essays.css' // Reutiliza o CSS de Grid e Títulos (essays.css)

const Audiovisuais = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Edições e Produções Audiovisuais</h1>
      <p className="page-subtitle">
        Podcasts, vídeos e produções multimídia, demonstrando habilidades em
        edição e roteirização.
      </p>

      {/* Reutiliza o mesmo estilo de Grid do Essays.css */}
      <section className="essays-grid">
        {AUDIO_DATA.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            category={article.category}
            date={article.date}
            slug={article.slug}
            type={article.type} // 'video'
          />
        ))}
      </section>

      {AUDIO_DATA.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '40px' }}>
          Nenhuma produção audiovisual encontrada no momento.
        </p>
      )}
    </div>
  )
}

export default Audiovisuais
