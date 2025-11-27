import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({
  title,
  category,
  date,
  type,
  externalLink,
  slug,
  imageUrl,
  index,
}) => {
  // Define a imagem: usa a prop imageUrl se existir, senão fica vazio
  const articleImage = imageUrl || ''

  // Define o ícone de fallback (só aparece se não tiver imagem)
  const renderIcon = () => {
    // Escolhe um ícone baseado no título
    let iconPath = ''
    let bgColor = ''

    if (title.includes('Redações')) {
      // Ícone de documento (caneta)
      iconPath =
        'M12 20h9a1 1 0 001-1V5a1 1 0 00-1-1h-7.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0010.586 2H3a1 1 0 00-1 1v14a3 3 0 003 3h7zM16 16.5l-3 1.5 1-4-3-3 4 0 2-4 2 4 4 0-3 3 1 4z'
      bgColor = 'bg-blue-500'
    } else if (title.includes('Fotojornalismo')) {
      // Ícone de câmera
      iconPath =
        'M16 12a4 4 0 10-8 0 4 4 0 008 0zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
      bgColor = 'bg-green-500'
    } else if (title.includes('Audiovisuais')) {
      // Ícone de microfone/vídeo
      iconPath =
        'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z'
      bgColor = 'bg-red-500'
    }

    if (!iconPath) return null

    return (
      <div className={`icon-placeholder ${bgColor}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-12 h-12"
        >
          <path d={iconPath} />
        </svg>
      </div>
    )
  }

  const linkText =
    type === 'photo'
      ? 'Ver Galeria'
      : type === 'video'
      ? 'Assistir / Ouvir'
      : title.includes('Projetos')
      ? 'Ver Projetos' // Novo texto para a página principal
      : 'Ler Matéria'

  // Define se usa <a> (externo) ou Link (interno)
  const finalLink = externalLink ? (
    <a
      href={externalLink}
      className="card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText} →
    </a>
  ) : (
    <Link to={`/portfolio/${slug}`} className="card-link">
      {linkText} →
    </Link>
  )

  // Estilo para o atraso da animação (efeito cascata)
  const cardStyle = {
    animationDelay: `${index * 0.1}s`,
  }

  return (
    <div
      className={`article-card ${articleImage ? 'has-image' : 'no-image'}`}
      style={cardStyle}
    >
      {articleImage ? (
        <div className="article-image-container">
          <img
            src={articleImage}
            alt={`Capa: ${title}`}
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                'https://placehold.co/600x300/e2e8f0/718096?text=Sem+Imagem'
            }}
          />
        </div>
      ) : (
        renderIcon()
      )}

      <div className="card-info">
        {articleImage && <span className="card-category">{category}</span>}
        <h3 className="card-title">{title}</h3>
        <p className="card-date">
          {articleImage ? `Publicado em: ${date}` : category}
        </p>
      </div>

      {finalLink}
    </div>
  )
}

export default ArticleCard
