import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

// IMPORTAÇÕES DOS COMPONENTES
import Portfolio from './pages/Portfolio'

// Sub-portfólios
import Essays from './pages/portfolio/Essays'
import Fotojornalismo from './pages/portfolio/Fotojornalismo'
import Audiovisuais from './pages/portfolio/AudioVisuais'

// Álbuns e Galeria
import Albums from './pages/portfolio/Albums'
import Gallery from './pages/portfolio/Gallery'

function App() {
  return (
    <>
      <Header />
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />

          {/* ROTAS PRINCIPAIS */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* ROTAS DETALHADAS DO PORTFÓLIO */}
          <Route path="/portfolio/redacoes" element={<Essays />} />
          <Route
            path="/portfolio/fotojornalismo"
            element={<Fotojornalismo />}
          />
          <Route path="/portfolio/audiovisuais" element={<Audiovisuais />} />

          {/* ÁLBUNS DE FOTOJORNALISMO */}
          <Route path="/portfolio/fotojornalismo/albuns" element={<Albums />} />

          {/* GALERIA DO ÁLBUM NBB */}
          <Route path="/portfolio/fotojornalismo/nbb" element={<Gallery />} />
        </Routes>
      </main>
    </>
  )
}

export default App
