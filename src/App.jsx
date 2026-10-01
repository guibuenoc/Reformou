import "./App.css";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Tour from "./components/Tour";
import Numeros from "./components/Numeros";
import Calculadora from "./components/Calculadora";
import LinhaDoTempo from "./components/LinhaDoTempo";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";

import logoReformou from "./assets/logo-reformou.png";
import cozinhaAntes from "./assets/cozinha-antes.jpg";
import cozinhaDepois from "./assets/cozinha-depois.jpg";

function App() {
  return (
    <>
      <header className="menu">
        <a href="#inicio" className="logo-area">
          <img className="logo-img" src={logoReformou} alt="Logo Reformou" />
          <span className="logo-texto">Reformou</span>
        </a>
        <nav>
          <a href="#tour">Tour</a>
          <a href="#numeros">Números</a>
          <a href="#calculadora">Calculadora</a>
          <a href="#obra">Obra</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>

        <section id="inicio" className="hero">
          <h1>Cada imóvel tem duas histórias. A segunda é a mais bonita.</h1>
          <p>Puxe e compare o antes e o depois.</p>

          <div className="slider-area">
            <BeforeAfterSlider antes={cozinhaAntes} depois={cozinhaDepois} />
          </div>
        </section>

        <section id="tour">
          <h2>Tour por ambientes</h2>
          <Tour />
        </section>

        <section id="numeros">
          <h2>A obra em números</h2>
          <Numeros />
        </section>

        <section id="calculadora">
          <h2>Quanto sai a sua?</h2>
          <Calculadora />
        </section>

        <section id="obra">
          <h2>Linha do tempo da obra</h2>
          <LinhaDoTempo />
        </section>

        <section id="sobre">
          <h2>Quem faz acontecer</h2>
          <Sobre />
        </section>

        <section id="contato">
          <h2>Quer ver isso no seu imóvel?</h2>
          <Contato />
        </section>

      </main>

      <footer>
        <p>Projeto demonstrativo. Imagens ilustrativas para fins de portfólio. Valores são estimativas médias de mercado.</p>
        <p>Reformou, 2026</p>
      </footer>
    </>
  );
}

export default App;