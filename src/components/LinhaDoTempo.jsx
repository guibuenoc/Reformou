const fases = [
  {
    fase: 'Fase 1',
    titulo: 'Diagnóstico e projeto',
    dias: 'Dias 1 a 5',
    descricao: 'Visita técnica, levantamento de medidas, definição de escopo e projeto de interiores aprovado pelo cliente.',
  },
  {
    fase: 'Fase 2',
    titulo: 'Demolição e infraestrutura',
    dias: 'Dias 6 a 15',
    descricao: 'Remoção de revestimentos antigos, ajustes hidráulicos e elétricos e preparação das superfícies.',
  },
  {
    fase: 'Fase 3',
    titulo: 'Revestimentos e marcenaria',
    dias: 'Dias 16 a 32',
    descricao: 'Assentamento de pisos e azulejos, instalação de bancadas, marcenaria sob medida e pintura geral.',
  },
  {
    fase: 'Fase 4',
    titulo: 'Acabamento e entrega',
    dias: 'Dias 33 a 43',
    descricao: 'Instalação de iluminação, metais e louças, limpeza fina e entrega com vistoria acompanhada.',
  },
];

function LinhaDoTempo() {
  return (
    <div className="linha-tempo">
      {fases.map((f) => (
        <div className="linha-item" key={f.fase}>
          <div className="linha-coluna">
            <span className="linha-ponto"></span>
            <span className="linha-traco"></span>
          </div>
          <div className="linha-conteudo">
            <span className="linha-fase">{f.fase}</span>
            <h3 className="linha-titulo">{f.titulo}</h3>
            <span className="linha-dias">{f.dias}</span>
            <p className="linha-descricao">{f.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LinhaDoTempo;