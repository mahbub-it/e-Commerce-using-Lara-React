import { useState } from 'react';
import { Link } from 'react-router-dom';

// Reusable component that handles fallback for background images
const SafeBackgroundImage = ({ src, fallbackSrc = "/images/avatar-530x290.png", className }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <>
      {/* Hidden element to check if the image loads successfully */}
      <img
        src={src}
        alt=""
        style={{ display: 'none' }}
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
      />
      <div
        className={className}
        style={{ backgroundImage: `url('${currentSrc}')` }}
      ></div>
    </>
  );
};

const Masonry = () => {
    return (
    <>
        {/* Shop by collection Masonry */}
        <section className="collections-grid collections-grid_masonry gutters-20">
          <div className="h-md-100 full-width_padding-20">
            <div className="row h-md-100">
              <div className="col-lg-5 h-md-100">
                <div className="collection-grid__item position-relative h-md-100">
                  <SafeBackgroundImage 
                    src="/assets/images/home/collection_grid_1.jpg" 
                    className="background-img" 
                  />
                  <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                    <h3 className="text-uppercase mb-0">Furniture</h3>
                    <p className="mb-3">954 Products</p>
                    <Link to="shop1.html" className="btn-link default-underline text-uppercase fw-medium">Shop Now</Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 d-flex flex-column">
                <div className="position-relative flex-grow-1">
                  <div className="row h-md-100">
                    <div className="col-md-6 h-md-100">
                      <div className="collection-grid__item h-md-100 position-relative">
                        
                        {/* Updated this part with fallback logic */}
                        <SafeBackgroundImage 
                          src="/assets/images/home/collection_grid_20.jpg" 
                          className="background-img" 
                        />

                        <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                          <h3 className="text-uppercase mb-0">Clocks</h3>
                          <p className="mb-3">710 Products</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 h-md-100">
                      <div className="collection-grid__item h-md-100 position-relative">
                        <SafeBackgroundImage 
                          src="/assets/images/home/collection_grid_3.jpg" 
                          className="background-img" 
                        />
                        <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                          <h3 className="text-uppercase mb-0">Accessories</h3>
                          <p className="mb-3">954 Products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="position-relative flex-grow-1 mt-lg-3 pt-lg-1">
                  <div className="row h-md-100">
                    <div className="col-md-6 h-md-100">
                      <div className="collection-grid__item h-md-100 position-relative">
                        <SafeBackgroundImage 
                          src="/assets/images/home/collection_grid_4.jpg" 
                          className="background-img" 
                        />
                        <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                          <h3 className="text-uppercase mb-0">Lighting</h3>
                          <p className="mb-3">184 Products</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 h-md-100">
                      <div className="collection-grid__item h-md-100 position-relative">
                        <SafeBackgroundImage 
                          src="/assets/images/home/collection_grid_5.jpg" 
                          className="background-img" 
                        />
                        <div className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2">
                          <h3 className="text-uppercase mb-0">Toys</h3>
                          <p className="mb-3">245 Products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
     </>
  );
};

export default Masonry;
