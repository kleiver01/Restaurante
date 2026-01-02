import './Contacto.css';

export default function Contacto() {
  return (
    <section className="contacto section--gray" id="contacto">
      <div className="container">
        <div className="text-center">
          <div className="section-icon">📍</div>
          <h2 className="section-title">Ubicación y Contacto</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Visítanos y disfruta de la mejor experiencia de carnes ahumadas
          </p>
        </div>

        <div className="contacto-content">
          <div className="contacto-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Dirección</h3>
              <p>Cra. 50 #10-Sur-100, Medellín, Antioquia</p>
              <a href="#" className="link-arrow">Ver en Google Maps →</a>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Teléfono</h3>
              <p>310 844 7134</p>
              <button className="btn-whatsapp">Reservar por WhatsApp</button>
            </div>

            <div className="info-card horarios">
              <div className="info-icon">🕐</div>
              <h3>Horarios</h3>
              <p><strong>Lunes a Miércoles:</strong> 5:00 PM - 11:00 PM</p>
              <p><strong>Jueves:</strong> Cerrado</p>
              <p><strong>Viernes:</strong> 5:00 PM - 11:00 PM</p>
              <p><strong>Sábado y Domingo:</strong> 12:00 PM - 11:00 PM</p>
            </div>
          </div>

          <div className="redes-sociales">
            <h3>Redes Sociales</h3>
            <div className="social-buttons">
              <a href="#" className="social-btn instagram">📷 Instagram</a>
              <a href="#" className="social-btn facebook">f Facebook</a>
            </div>
          </div>
        </div>

        <div className="mapa-container">
          <iframe
            width="100%"
            height="400"
            style={{ borderRadius: '12px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7518649999906!2d-75.54!3d6.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682b7f8b7f8b7%3A0x8b7f8b7f8b7f8b7f!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Ahumados al Barril"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
