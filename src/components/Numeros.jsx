import { useState, useEffect, useRef } from 'react';

const dados = [
  { valor: 64, prefixo: '', sufixo: ' mil', rotulo: 'Investimento total na reforma' },
  { valor: 43, prefixo: '', sufixo: ' dias', rotulo: 'Prazo total da obra' },
  { valor: 72, prefixo: '', sufixo: ' m²', rotulo: 'Área reformada' },
  { valor: 18, prefixo: '', sufixo: '%', rotulo: 'Valorização estimada do imóvel' },
];

function Numeros() {
  const [visivel, setVisivel] = useState(false);
  const [contagem, setContagem] = useState(dados.map(() => 0));
  const ref = useRef(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observador.observe(ref.current);
    }

    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (!visivel) return;

    const duracao = 1500;
    const inicio = performance.now();

    function animar(agora) {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      setContagem(dados.map((d) => Math.round(d.valor * progresso)));

      if (progresso < 1) {
        requestAnimationFrame(animar);
      }
    }

    requestAnimationFrame(animar);
  }, [visivel]);

  return (
    <div className="numeros-grid" ref={ref}>
      {dados.map((d, i) => (
        <div className="numero-card" key={d.rotulo}>
          <span className="numero-valor">
            {d.prefixo}{contagem[i]}{d.sufixo}
          </span>
          <span className="numero-rotulo">{d.rotulo}</span>
        </div>
      ))}
    </div>
  );
}

export default Numeros;