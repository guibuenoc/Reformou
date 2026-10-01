import { useState } from 'react';

function Contato() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  function enviar(e) {
    e.preventDefault();

    if (!nome.trim() || !whatsapp.trim() || !mensagem.trim()) {
      setErro('Preencha todos os campos antes de enviar.');
      return;
    }

    if (whatsapp.replace(/\D/g, '').length < 10) {
      setErro('Digite um WhatsApp válido, com DDD.');
      return;
    }

    setErro('');
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="contato-sucesso">
        <h3>Obrigado, {nome}!</h3>
        <p>Recebemos seu contato. Vamos te chamar no WhatsApp em breve pra agendar a visita técnica.</p>
      </div>
    );
  }

  return (
    <form className="contato-form" onSubmit={enviar}>
      <div className="contato-campo">
        <label htmlFor="nome">Seu nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Como você se chama?"
        />
      </div>

      <div className="contato-campo">
        <label htmlFor="whatsapp">WhatsApp</label>
        <input
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="contato-campo">
        <label htmlFor="mensagem">Conte um pouco do seu imóvel</label>
        <textarea
          id="mensagem"
          rows="4"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Ex: quero reformar a cozinha e o banheiro do meu apartamento..."
        />
      </div>

      {erro && <p className="contato-erro">{erro}</p>}

      <button type="submit" className="contato-botao">
        Quero um orçamento
      </button>
    </form>
  );
}

export default Contato;