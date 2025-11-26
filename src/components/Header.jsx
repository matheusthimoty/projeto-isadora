// src/components/Header.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

// 💡 IMPORTAR ÍCONES DO REACT-ICONS
import { FaLinkedinIn, FaInstagram, FaRegEnvelope } from 'react-icons/fa'

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/isadoraleocardio/',
  instagram: 'https://www.instagram.com/entrevisadora/',
  gmail: 'mailto:leocardioisadora@gmail.com',
}

const Header = () => {
  return (
    <header className="header-container">
      {/* 1. Nome/Logo (Canto Esquerdo) */}
      <div className="header-left">
        <h1 className="header-title">
          <Link to="/" className="header-link">
            Isadora Leocardio
          </Link>
        </h1>
      </div>

      {/* 2. Navegação Principal (Centro) */}
      <nav className="header-nav-center">
        <Link to="/sobre" className="nav-link">
          Sobre Mim
        </Link>
        <Link to="/portfolio" className="nav-link">
          Portfólio
        </Link>
        <Link to="/contato" className="nav-link">
          Contato
        </Link>
      </nav>

      {/* 3. Ícones Sociais (Canto Direito) */}
      <div className="header-social">
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn" // Boa prática de acessibilidade
        >
          {/* 💡 ÍCONE DO LINKEDIN */}
          <FaLinkedinIn />
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          {/* 💡 ÍCONE DO INSTAGRAM */}
          <FaInstagram />
        </a>
        <a
          href={SOCIAL_LINKS.gmail}
          className="social-icon"
          aria-label="E-mail"
        >
          {/* 💡 ÍCONE DE E-MAIL */}
          <FaRegEnvelope />
        </a>
      </div>
    </header>
  )
}

export default Header
