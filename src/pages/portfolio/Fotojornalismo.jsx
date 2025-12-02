import { Link } from 'react-router-dom'
import './Fotojornalismo.css'

export default function Fotojornalismo() {
  const albuns = [
    {
      title: 'Cobertura NBB — Corinthians x Mogi Basquete',
      description: '14 fotos da partida no Ginásio Wlamir Marques.',
      path: '/portfolio/fotojornalismo/nbb',
      thumb: '/assets/foto (1).jpg', // usa a primeira foto como miniatura
    },
  ]

  return (
    <div className="fotojornalismo-container">
      <h1 className="page-title">Fotojornalismo</h1>
      <p className="page-subtitle">
        Galerias fotográficas de eventos e reportagens.
      </p>

      <div className="albums-grid">
        {albuns.map((album, index) => (
          <Link
            to={album.path}
            key={index}
            className="album-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="album-thumb">
              <img src={album.thumb} alt={album.title} />
            </div>

            <div className="album-info">
              <h2>{album.title}</h2>
              <p>{album.description}</p>
              <span className="album-link">Ver Álbum →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
