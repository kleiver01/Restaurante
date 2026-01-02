import { useState } from 'react';
import './Galeria.css';

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState('Todo');

  const galleryImages = {
    Todo: [
      { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=1200&fit=crop', category: 'Platos', alt: 'Costilla ahumada' },
      { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=1200&fit=crop', category: 'Platos', alt: 'Pechuga ahumada' },
      { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=1200&fit=crop', category: 'Proceso', alt: 'Proceso de ahumado' },
      { src: 'https://img.freepik.com/premium-photo/chef-is-pouring-sauce-plate-food_1255479-7603.jpg', category: 'Proceso', alt: 'Leña para ahumar' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXR8RD83XNjvHyEOEct_UrEk6n8e8H11maOQ&s', category: 'Ambiente', alt: 'Interior del restaurante' },
      { src: 'https://lh5.googleusercontent.com/proxy/8gqNsm20QxU3Ig2_sTNQ0nTJ-g1fY5CW6Sz0zNREFzt7aec9j11XSJyzD3qOUh9wV7u7CXxGHPeLRfygr91L3Ib_LH5TGjQpZs5Rv9SpttIeyU0osbzNYAk', category: 'Ambiente', alt: 'Mesa servida' },
    ],
    Platos: [
      { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=1200&fit=crop', category: 'Platos', alt: 'Costilla ahumada' },
      { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=1200&fit=crop', category: 'Platos', alt: 'Pechuga ahumada' },
      { src: 'https://lh5.googleusercontent.com/proxy/8gqNsm20QxU3Ig2_sTNQ0nTJ-g1fY5CW6Sz0zNREFzt7aec9j11XSJyzD3qOUh9wV7u7CXxGHPeLRfygr91L3Ib_LH5TGjQpZs5Rv9SpttIeyU0osbzNYAk', category: 'Platos', alt: 'Pulled pork' },
    ],
    Proceso: [
      { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=1200&fit=crop', category: 'Proceso', alt: 'Fuego tradicional' },
      { src: 'https://img.freepik.com/premium-photo/chef-is-pouring-sauce-plate-food_1255479-7603.jpg', category: 'Proceso', alt: 'Leña de roble' },
      { src: 'https://www.shutterstock.com/image-photo/close-chef-serving-dish-restaurant-600nw-2472669243.jpg', category: 'Proceso', alt: 'Ahumado en acción' },
    ],
    Ambiente: [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXR8RD83XNjvHyEOEct_UrEk6n8e8H11maOQ&s', category: 'Ambiente', alt: 'Restaurante' },
      { src: 'https://img.freepik.com/fotos-premium/chef-prepara-comida-frente-visitantes-restaurante_109285-10240.jpg', category: 'Ambiente', alt: 'Comedor' },
      { src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&h=1200&fit=crop', category: 'Ambiente', alt: 'Clientes disfrutando' },
    ],
  };

  const filters = ['Todo', 'Platos', 'Proceso', 'Ambiente'];

  return (
    <section className="galeria section--dark" id="galeria">
      <div className="container">
        <div className="text-center">
          <div className="section-icon">📸</div>
          <h2 className="section-title">Galería</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Descubre el arte del ahumado a través de nuestras imágenes
          </p>
        </div>

        <div className="galeria-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`galeria-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="galeria-grid">
          {galleryImages[activeFilter].map((image, index) => (
            <div key={index} className="galeria-item">
              <div className="galeria-image-wrapper">
                <div className="galeria-image">
                  <img src={image.src} alt={image.alt} />
                </div>
                <div className="galeria-overlay">
                  <p className="galeria-text">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
