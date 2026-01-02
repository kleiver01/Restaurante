import './Nosotros.css';

export default function Nosotros() {
  return (
    <section className="nosotros section--dark" id="nosotros">
      <div className="container">
        <div className="text-center">
          <div className="section-icon">🔥</div>
          <h2 className="section-title">Sobre Nosotros</h2>
          <div className="title-underline"></div>
        </div>

        <div className="nosotros-content">
          <div className="nosotros-text">
            <p>
              En Ahumados al Barril, llevamos el arte del ahumado tradicional a otro nivel. 
              Utilizando barriles de roble y técnicas ancestrales, cada corte de carne se 
              transforma en una experiencia única de sabor. Nuestro proceso lento y cuidadoso 
              garantiza carnes jugosas, tiernas y llenas de ese característico sabor ahumado 
              que nos distingue.
            </p>
          </div>

          <div className="nosotros-quote">
            <div className="quote-icon">"</div>
            <p className="quote-text">
              El verdadero sabor nace del tiempo, la paciencia y el fuego perfecto. 
              Cada corte cuenta una historia de tradición y pasión.
            </p>
            <p className="quote-author">— Fundador</p>
          </div>
        </div>
      </div>
    </section>
  );
}
