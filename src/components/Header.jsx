import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {
  FaLinkedinIn,
  FaInstagram,
  FaRegEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa'

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/isadoraleocardio/',
  instagram: 'https://www.instagram.com/entrevisadora/',
  gmail: 'mailto:leocardioisadora@gmail.com',
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header-container">
      {/* 1. LOGO (ESQUERDA) */}
      <div className="header-left">
        <h1 className="header-title">
          <Link to="/" className="header-link">
            IL
          </Link>
        </h1>
      </div>

      {/* 2. NAV (CENTRO - Visível apenas no desktop) 
          Permanece o menu mobile, mas a navegação principal é aqui */}
      <nav className={`header-nav-center ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Início
        </Link>
        <Link
          to="/sobre"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Sobre Mim
        </Link>
        <Link
          to="/portfolio"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Portfólio
        </Link>
        <Link
          to="/contato"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contato
        </Link>

        {/* Redes sociais DENTRO do menu mobile (mantidas) */}
        <div className="header-social-mobile">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={SOCIAL_LINKS.gmail}
            className="social-icon"
            aria-label="E-mail"
          >
            <FaRegEnvelope />
          </a>
        </div>
      </nav>

      {/* 3. CONTAINER DIREITO (Redes Sociais Desktop + Hambúrguer) */}
      <div className="header-right">
        {/* Redes sociais (DIREITA - Visível apenas no desktop) */}
        <div className="header-social">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={SOCIAL_LINKS.gmail}
            className="social-icon"
            aria-label="E-mail"
          >
            <FaRegEnvelope />
          </a>
        </div>

        {/* Botão hambúrguer */}
        <div
          className={`header-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  )
}

export default Header
