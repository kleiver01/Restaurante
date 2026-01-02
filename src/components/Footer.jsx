import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">🔥</div>
              <div>
                <h3>Ahumados al Barril</h3>
                <p>Donde el humo se convierte en sabor</p>
              </div>
            </div>
            <p className="footer-description">
              Carnes ahumadas con técnicas tradicionales en barriles de roble. 
              Una experiencia única de sabor y tradición en Medellín.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">f</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📍 calle 15 #8c-43 La Virginia, Risaralda </p>
            <p>📞 310 844 7134</p>
            <p>⏰ Lun-Mié: 5PM - 11PM<br/>Vie: 5PM - 11PM<br/>Sáb-Dom: 12PM - 11PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Ahumados al Barril. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
