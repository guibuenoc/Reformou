import { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

import cozinhaAntes from '../assets/cozinha-antes.jpg';
import cozinhaDepois from '../assets/cozinha-depois.jpg';
import salaAntes from '../assets/sala-antes.jpg';
import salaDepois from '../assets/sala-depois.jpg';
import banheiroAntes from '../assets/banheiro-antes.jpg';
import banheiroDepois from '../assets/banheiro-depois.jpg';
import fachadaAntes from '../assets/fachada-antes.jpg';
import fachadaDepois from '../assets/fachada-depois.jpg';

const ambientes = [
  {
    id: 'cozinha',
    nome: 'Cozinha',
    antes: cozinhaAntes,
    depois: cozinhaDepois,
    investimento: 'R$ 28.000',
    prazo: '18 dias',
    feito: 'Troca de revestimentos, bancada nova, iluminação embutida e marcenaria renovada.',
  },
  {
    id: 'sala',
    nome: 'Sala',
    antes: salaAntes,
    depois: salaDepois,
    investimento: 'R$ 14.000',
    prazo: '10 dias',
    feito: 'Pintura geral, piso novo, iluminação redesenhada e cortinas sob medida.',
  },
  {
    id: 'banheiro',
    nome: 'Banheiro',
    antes: banheiroAntes,
    depois: banheiroDepois,
    investimento: 'R$ 9.000',
    prazo: '8 dias',
    feito: 'Revestimentos novos, cuba de apoio, metais pretos e box de vidro.',
  },
  {
    id: 'fachada',
    nome: 'Fachada',
    antes: fachadaAntes,
    depois: fachadaDepois,
    investimento: 'R$ 13.000',
    prazo: '7 dias',
    feito: 'Pintura externa, troca de portão, porta nova e jardim de entrada.',
  },
];

function Tour() {
  const [ativo, setAtivo] = useState('cozinha');
  const ambiente = ambientes.find((a) => a.id === ativo);

  return (
    <div className="tour">
      <div className="tabs" role="tablist">
        {ambientes.map((a) => (
          <button
            key={a.id}
            role="tab"
            aria-selected={ativo === a.id}
            className={`tab ${ativo === a.id ? 'tab-ativa' : ''}`}
            onClick={() => setAtivo(a.id)}
          >
            {a.nome}
          </button>
        ))}
      </div>

      <div className="painel-ambiente">
        <BeforeAfterSlider antes={ambiente.antes} depois={ambiente.depois} />

        <div className="info-ambiente">
          <p><strong>Investimento</strong>{ambiente.investimento}</p>
          <p><strong>Prazo</strong>{ambiente.prazo}</p>
          <p><strong>O que foi feito</strong>{ambiente.feito}</p>
        </div>
      </div>
    </div>
  );
}

export default Tour;