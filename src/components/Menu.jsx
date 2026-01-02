import { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Todo');

  const menuItems = {
    Todo: [
      {
        name: 'Costillas BBQ al Barril',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=800&fit=crop',
        price: '$45.000',
        description: 'Costillas de cerdo ahumadas por 8 horas con salsa BBQ casera',
        category: 'Carnes',
        badge: 'Destacado',
      },
      {
        name: 'Brisket Ahumado',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=800&fit=crop',
        price: '$52.000',
        description: 'Pechuga de res ahumada por 12 horas, jugosa y tierna',
        category: 'Carnes',
        badge: 'Destacado',
      },
      {
        name: 'Pulled Pork',
        image: 'https://lh5.googleusercontent.com/proxy/8gqNsm20QxU3Ig2_sTNQ0nTJ-g1fY5CW6Sz0zNREFzt7aec9j11XSJyzD3qOUh9wV7u7CXxGHPeLRfygr91L3Ib_LH5TGjQpZs5Rv9SpttIeyU0osbzNYAk',
        price: '$38.000',
        description: 'Cerdo desmenuzado ahumado con salsa BBQ y coleslaw',
        category: 'Carnes',
        badge: 'Destacado',
      },
    ],
    Carnes: [],
    Entradas: [],
    Combos: [],
  };

  const categories = ['Todo', 'Carnes', 'Entradas', 'Combos'];

  const items = menuItems[activeCategory].length ? menuItems[activeCategory] : menuItems['Todo'];

  return (
    <section className="menu section--gray" id="menu">
      <div className="container">
        <div className="text-center">
          <div className="section-icon">🍽️</div>
          <h2 className="section-title">Nuestro Menú</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Carnes ahumadas con dedicación y pasión, preparadas con técnicas tradicionales
          </p>
        </div>

        <div className="menu-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map((item, index) => (
            <article key={index} className="menu-card">
              <div className="menu-image">
                <img src={item.image} alt={item.name} />
                {item.badge && <span className="badge">★ {item.badge}</span>}
              </div>
              <div className="menu-body">
                <div className="menu-title-row">
                  <h3 className="menu-title">{item.name}</h3>
                  <span className="price-inline">{item.price}</span>
                </div>
                <p className="menu-desc">{item.description}</p>
                <div className="menu-footer">
                  <span className="menu-category">{item.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
