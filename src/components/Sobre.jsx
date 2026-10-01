import engenheiro from '../assets/sobre-engenheiro.jpg';
import designer from '../assets/sobre-designer.jpg';
import mestre from '../assets/sobre-mestre.jpg';

const equipe = [
  {
    nome: 'Carlos Menezes',
    cargo: 'Engenheiro civil',
    foto: engenheiro,
    bio: 'Responsável técnico das obras. Há 15 anos cuida de estruturas, instalações e da segurança de cada reforma.',
  },
  {
    nome: 'Fernanda Lopes',
    cargo: 'Designer de interiores',
    foto: designer,
    bio: 'Projeta os ambientes, escolhe acabamentos e acompanha cada detalhe até o resultado final.',
  },
  {
    nome: 'Antônio Ribeiro',
    cargo: 'Mestre de obras',
    foto: mestre,
    bio: 'Mais de 25 anos de canteiro. Comanda a execução no dia a dia e garante que prazo e qualidade andem juntos.',
  },
];

function Sobre() {
  return (
    <div className="sobre-intro">
      <p>
        Uma equipe pequena e experiente, que cuida do seu imóvel do projeto à entrega,
        com um responsável técnico acompanhando cada etapa.
      </p>

      <div className="sobre-grid">
        {equipe.map((p) => (
          <div className="sobre-card" key={p.nome}>
            <img className="sobre-foto" src={p.foto} alt={`Foto de ${p.nome}`} />
            <h3 className="sobre-nome">{p.nome}</h3>
            <span className="sobre-cargo">{p.cargo}</span>
            <p className="sobre-bio">{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;