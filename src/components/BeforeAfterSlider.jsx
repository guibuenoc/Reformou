import 'img-comparison-slider';
import cozinhaAntes from '../assets/cozinha-antes.jpg';
import cozinhaDepois from '../assets/cozinha-depois.jpg';

function BeforeAfterSlider() {
  return (
    <div className="slider-box">
      <img-comparison-slider>
        <img slot="first" src={cozinhaAntes} alt="Cozinha antes da reforma" />
        <img slot="second" src={cozinhaDepois} alt="Cozinha depois da reforma" />
      </img-comparison-slider>
      <span className="tag tag-antes">Antes</span>
      <span className="tag tag-depois">Depois</span>
    </div>
  );
}

export default BeforeAfterSlider;