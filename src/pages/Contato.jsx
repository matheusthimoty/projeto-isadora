import React, { useState } from 'react'
import './Contato.css'
import { FaPaperPlane } from 'react-icons/fa'

// 🚨 🚨 ENDPOINT DO FORMSPREE INSERIDO COM SUCESSO! 🚨 🚨
// Agora o formulário enviará os dados para este destino.
const FORMSPREE_URL = 'https://formspree.io/f/mblvlbyy'
// -----------------------------------------------------------------------------

// 💡 E-MAIL DE CONTATO DIRETO (ESTE É O EMAIL QUE APARECE PARA O PÚBLICO)
// Lembre-se que este email deve ser o que a Isadora deseja que o público veja.
const EMAIL_DIRETO = 'isadora.jornalismo@email.com'

const Contato = () => {
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Esta verificação não é mais necessária já que o endpoint foi inserido,
    // mas a lógica de envio continua a mesma.
    if (FORMSPREE_URL === 'SUA_URL_DO_FORMSPREE_AQUI') {
      console.error(
        'ERRO: Configure o FORMSPREE_URL no código antes de testar!',
      )
      setStatus('error')
      return
    }

    setIsSending(true) // Começa a enviar
    setStatus('sending')

    const form = event.target
    const data = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset() // Limpa o formulário após o sucesso
      } else {
        // Se a resposta não for OK, algo deu errado (ex: Formspree com problema)
        setStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
      setStatus('error')
    } finally {
      setIsSending(false) // Termina o envio, sucesso ou erro
    }
  }

  // Função para renderizar a mensagem de status
  const renderStatusMessage = () => {
    if (status === 'success') {
      return <p className="status-success">Mensagem enviada com sucesso!</p>
    }
    if (status === 'error') {
      return (
        <p className="status-error">
          Ops! Houve um erro no envio. Por favor, tente novamente ou envie um
          e-mail diretamente.
        </p>
      )
    }
    if (status === 'sending') {
      return <p className="status-sending">Enviando...</p>
    }
    return null
  }

  return (
    <div className="contato-container">
      <h1 className="page-title">Entre em Contato</h1>
      <p className="page-subtitle">Fale comigo!</p>

      <div className="contact-form-container">
        {renderStatusMessage()}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem / Resumo do Projeto</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Descreva brevemente o que você gostaria de conversar..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-submit"
            disabled={isSending || status === 'success'}
          >
            <FaPaperPlane className="submit-icon" />
            {isSending ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>

        <p className="email-direto-info">
          Ou me envie um e-mail diretamente para:{' '}
          <a href={`mailto:${EMAIL_DIRETO}`} className="email-link">
            {EMAIL_DIRETO}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contato
