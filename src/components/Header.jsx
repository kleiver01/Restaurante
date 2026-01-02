import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">🔥</div>
            <div className="logo-text">
              <h1 className="logo-title">Ahumados al Barril</h1>
              <p className="logo-subtitle">Donde el humo se convierte en sabor</p>
            </div>
          </div>
          
          <nav className="nav">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn-reservar">Reservar</button>
          </div>
        </div>
      </div>
    </header>
  );
}
