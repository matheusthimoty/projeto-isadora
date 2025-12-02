import { Link } from 'react-router-dom'
import './Albums.css'

export default function Albums() {
  return (
    <section className="albums-section">
      <h1>Álbuns — Fotojornalismo</h1>

      <div className="albums-grid">
        <Link to="/portfolio/fotojornalismo/nbb" className="album-card">
          <div className="album-thumb"></div>
          <h2>Corinthians x Mogi — NBB</h2>
        </Link>
      </div>
    </section>
  )
}
