import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo">🔥</div>
        <h1 className="hero-title">
          Ahumados al <span className="highlight">Barril</span>
        </h1>
        <p className="hero-subtitle">Donde el humo se convierte en sabor</p>
        <p className="hero-description">
          Carnes ahumadas con técnicas tradicionales en barriles de roble. Una experiencia<br />
          única de sabor y tradición.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Ver Menú</button>
          <button className="btn-secondary">Reservar Mesa</button>
        </div>
        <div className="hero-scroll">
          <p>Descubre más</p>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
