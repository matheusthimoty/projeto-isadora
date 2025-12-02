import React, { useState } from 'react'
import './Gallery.css'

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  // MANTENDO A LÓGICA ORIGINAL DO CAMINHO DO ARQUIVO COM PARÊNTESES
  const photos = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    src: `/src/assets/nbb/Foto (${i + 1}).jpg`,
  }))

  const openModal = (photo) => {
    setSelectedPhoto(photo)
    document.body.style.overflow = 'hidden' // Bloqueia o scroll do corpo
  }

  const closeModal = () => {
    setSelectedPhoto(null)
    document.body.style.overflow = 'auto' // Restaura o scroll do corpo
  }

  return (
    <>
      <section className="gallery-section">
        <h2>Cobertura — Corinthians x Mogi Basquete (NBB)</h2>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item"
              onClick={() => openModal(photo)}
            >
              <img src={photo.src} alt={`Foto ${photo.id}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedPhoto.src}
              alt={`Ampliada: Foto ${selectedPhoto.id}`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  )
}
