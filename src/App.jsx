// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
// IMPORTANDO OS NOVOS COMPONENTES
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'

function App() {
  return (
    <>
      <Header />
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ROTAS ATUALIZADAS */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </>
  )
}

export default App
