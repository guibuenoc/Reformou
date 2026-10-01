import 'img-comparison-slider';

function BeforeAfterSlider({ antes, depois }) {
  return (
    <div className="slider-box">
      <img-comparison-slider>
        <img slot="first" src={antes} alt="Antes da reforma" />
        <img slot="second" src={depois} alt="Depois da reforma" />
      </img-comparison-slider>
      <span className="tag tag-antes">Antes</span>
      <span className="tag tag-depois">Depois</span>
    </div>
  );
}

export default BeforeAfterSlider;