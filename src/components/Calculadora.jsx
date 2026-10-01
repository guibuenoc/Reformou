import { useState } from 'react';

const precos = {
  cozinha: 950,
  banheiro: 900,
  sala: 700,
  quarto: 650,
};

const nomesAmbientes = {
  cozinha: 'Cozinha',
  banheiro: 'Banheiro',
  sala: 'Sala',
  quarto: 'Quarto',
};

function Calculadora() {
  const [selecionados, setSelecionados] = useState(['cozinha']);
  const [metros, setMetros] = useState(20);
  const [padrao, setPadrao] = useState('medio');

  const multiplicador = padrao === 'simples' ? 0.8 : padrao === 'medio' ? 1 : 1.35;

  function alternar(id) {
    setSelecionados((atual) =>
      atual.includes(id)
        ? atual.filter((a) => a !== id)
        : [...atual, id]
    );
  }

  const subtotal = selecionados.reduce(
    (total, id) => total + precos[id] * metros,
    0
  );
  const total = subtotal * multiplicador;

  return (
    <div className="calculadora">
      <div className="calc-campo">
        <span className="calc-label">Ambientes</span>
        <div className="calc-chips">
          {Object.keys(precos).map((id) => (
            <button
              key={id}
              className={`chip ${selecionados.includes(id) ? 'chip-ativo' : ''}`}
              onClick={() => alternar(id)}
            >
              {nomesAmbientes[id]}
            </button>
          ))}
        </div>
      </div>

      <div className="calc-campo">
        <span className="calc-label">Área a reformar</span>
        <div className="calc-slider-linha">
          <input
            type="range"
            min="5"
            max="120"
            value={metros}
            onChange={(e) => setMetros(Number(e.target.value))}
            className="calc-range"
          />
          <span className="calc-valor-range">{metros} m²</span>
        </div>
      </div>

      <div className="calc-campo">
        <span className="calc-label">Padrão de acabamento</span>
        <div className="calc-chips">
          <button
            className={`chip ${padrao === 'simples' ? 'chip-ativo' : ''}`}
            onClick={() => setPadrao('simples')}
          >
            Simples
          </button>
          <button
            className={`chip ${padrao === 'medio' ? 'chip-ativo' : ''}`}
            onClick={() => setPadrao('medio')}
          >
            Médio
          </button>
          <button
            className={`chip ${padrao === 'alto' ? 'chip-ativo' : ''}`}
            onClick={() => setPadrao('alto')}
          >
            Alto
          </button>
        </div>
      </div>

      <div className="calc-resultado">
        <span className="calc-resultado-label">Estimativa</span>
        <span className="calc-resultado-valor">
          {total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0,
          })}
        </span>
        <span className="calc-resultado-nota">
          {selecionados.length === 0
            ? 'Selecione pelo menos um ambiente'
            : `${nomesAmbientes[selecionados[0]]}${selecionados.length > 1 ? ` +${selecionados.length - 1}` : ''} , ${metros} m², padrão ${padrao === 'simples' ? 'simples' : padrao === 'medio' ? 'médio' : 'alto'}`}
        </span>
      </div>
    </div>
  );
}

export default Calculadora;