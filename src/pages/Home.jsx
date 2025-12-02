// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
// 💡 IMPORTAÇÃO DA IMAGEM
import IsadoraFoto from '../assets/isadora-profile.webp'

const Home = () => {
  return (
    <div id="home" className="home-container">
      {/* Mudei de <section> para <div> para facilitar o layout flex */}
      <div className="hero-content">
        {/* COLUNA 1: TEXTO */}
        <section className="hero-text">
          <h1 className="hero-name">Isadora Leocardio</h1>
          <p className="hero-profession">Jornalista </p>
          <p className="hero-description">
            Jornalista em formação apaixonada pela comunicação e com desejo de
            contribuir na área seja por texto, imagem ou vídeo. Tenho interesse
            em produção de conteúdo, redação e reportagem, especialmente no
            jornalismo esportivo. Gosto de unir a criatividade, o design e a
            informação para atravessarem diversos meios e que dialoguem com o
            público de forma leve e cativante. Meu objetivo é crescer como
            comunicadora esportiva, contribuindo para uma cobertura mais humana,
            acessível e diversa.
          </p>
          <div className="hero-buttons"></div>
        </section>

        {/* COLUNA 2: IMAGEM */}
        <div className="hero-image-container">
          <img
            src={IsadoraFoto}
            alt="Foto de perfil da jornalista Isadora do Roque"
            className="isadora-profile-pic"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
