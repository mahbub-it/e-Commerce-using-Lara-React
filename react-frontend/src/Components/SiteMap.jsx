import { useState } from 'react';
import { Link } from 'react-router-dom';

const SiteMap = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('women');

  const categories = {
    women: {
      title: 'WOMEN',
      items: [
        'New', 'Best Sellers', 'Collaborations', 'Sets', 'Denim', 'Jackets & Coats',
        'Overshirts', 'Trousers', 'Jeans', 'Dresses', 'Sweatshirts and Hoodies',
        'T-shirts & Tops', 'Shirts & Blouses', 'Shorts and Bermudas', 'Shoes',
        'Accessories', 'Bags', 'Gift Card'
      ]
    },
    men: {
      title: 'MEN',
      items: [
        'New', 'Best Sellers', 'Collaborations', 'Sets', 'Denim', 'Jackets & Coats',
        'Overshirts', 'Trousers', 'Jeans', 'T-shirts & Tops', 'Shirts & Blouses',
        'Sweatshirts and Hoodies', 'Shorts', 'Shoes', 'Accessories', 'Bags'
      ]
    },
    kids: {
      title: 'KIDS',
      items: [
        'New', 'Best Sellers', 'Baby', 'Girl', 'Boy', 'Accessories', 'Shoes'
      ]
    }
  };

  return (
    <>
      {/* Sitemap Overlay */}
      <div 
        className="sitemap-overlay position-fixed w-100 h-100 top-0 start-0 bg-dark bg-opacity-50"
        onClick={onClose}
        style={{ zIndex: 1049 }}
      ></div>
      
      {/* Sitemap Modal */}
      <div className="sitemap position-fixed w-100 h-100 top-0 start-0 d-flex" style={{ zIndex: 1050 }}>
        {/* Background Image - Hidden on mobile */}
        <div className="w-50 d-none d-lg-flex align-items-center justify-content-center">
          <img 
            loading="lazy" 
            src="/images/avatar-530x290.png" 
            alt="Site map"
            className="w-100 h-100" 
            style={{ objectFit: 'cover' }} 
          />
        </div>
        
        {/* Sitemap Content */}
        <div className="sitemap__links flex-grow-1 bg-white overflow-auto w-100 w-lg-50">
          <div className="container-fluid h-100 d-flex flex-column">
            {/* Header with Category Tabs */}
            <div className="sitemap__header py-4 border-bottom sticky-top bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <ul className="nav nav-pills gap-3 list-unstyled m-0">
                  {Object.keys(categories).map((category) => (
                    <li key={category} className="nav-item">
                      <button
                        className={`nav-link rounded-1 text-uppercase fw-medium px-3 py-2 ${
                          activeCategory === category ? 'active' : ''
                        }`}
                        onClick={() => setActiveCategory(category)}
                        style={{
                          border: 'none',
                          backgroundColor: activeCategory === category ? '#000' : 'transparent',
                          color: activeCategory === category ? '#fff' : '#000',
                          cursor: 'pointer'
                        }}
                      >
                        {categories[category].title}
                      </button>
                    </li>
                  ))}
                </ul>
                <button 
                  type="button" 
                  className="btn-close-lg border-0 bg-transparent p-2"
                  onClick={onClose}
                  aria-label="Close sitemap"
                ></button>
              </div>
            </div>

            {/* Content Area */}
            <div className="sitemap__body py-5 flex-grow-1">
              <div className="row">
                <div className="col-12 col-md-10">
                  <ul className="sitemap__list list-unstyled">
                    {categories[activeCategory].items.map((item, index) => (
                      <li key={index} className="sitemap__item mb-4">
                        <Link 
                          to="#" 
                          className="text-decoration-none text-dark fw-500"
                          onClick={(e) => {
                            e.preventDefault();
                            onClose();
                          }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteMap;
