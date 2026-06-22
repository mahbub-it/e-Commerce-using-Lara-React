import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  useEffect(() => {
    // Initialize Swiper for the slider component
    const initSwiper = () => {
      if (window.Swiper) {
        const sliderContainer = document.querySelector('.slideshow.js-swiper-slider');
        
        if (sliderContainer && !sliderContainer.classList.contains('swiper-container-initialized')) {
          try {
            const settings = {
              autoplay: {
                delay: 5000
              },
              slidesPerView: 1,
              effect: "fade",
              loop: true,
              pagination: {
                el: ".slideshow-pagination",
                type: "bullets",
                clickable: true
              }
            };

            // eslint-disable-next-line no-undef
            new Swiper(sliderContainer, settings);
            sliderContainer.classList.add('swiper-container-initialized');
          } catch (error) {
            console.warn('Swiper initialization error:', error);
          }
        }
      }
    };

    // Call after a small delay to ensure DOM is ready
    const timer = setTimeout(initSwiper, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SliderShow */}
      <section className="swiper-container js-swiper-slider slideshow full-width_padding-20 slideshow-md" data-settings='{
        "autoplay": {
          "delay": 5000
        },
        "slidesPerView": 1,
        "effect": "fade",
        "loop": true,
        "pagination": {
          "el": ".slideshow-pagination",
          "type": "bullets",
          "clickable": true
        }
      }'>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg">
                  <img 
                  loading="lazy" src="./images/slider2.webp" 
                  width="1863" 
                    height="700" 
                    alt=""
                    className="slideshow-bg__img object-fit-cover object-position-right" 
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Prevents infinite loops if fallback also fails
                      e.currentTarget.src = "/images/avatar-1860-700.png"; 
                    }}
                  />
                </div>
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                    TRENDING 2023
                  </h6>
                  <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    Interior Designs
                  </h2>
                  <p className="animate animate_fade animate_btt animate_delay-6">
                    Lorem ipsum dolor sit amet, consectetur elit.<br />Odio
                    pulvinar in ipsum amet.
                  </p>
                  <Link to="shop1.html"
                    className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Buy
                    Now</Link>
                </div>
              </div>
            </div>
            {/* /.slideshow-item 1 */}
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                <div className="slideshow-bg">
                  <img 
                    loading="lazy" 
                    src="./images/slider1.jpg" 
                    width="1863" 
                    height="700" 
                    alt=""
                    className="slideshow-bg__img object-fit-cover object-position-right" 
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Prevents infinite loops if fallback also fails
                      e.currentTarget.src = "/images/avatar-1860-700.png"; 
                    }}
                  />
                </div>
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                    TRENDING 2023
                  </h6>
                  <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    Interior Designs
                  </h2>
                  <p className="animate animate_fade animate_btt animate_delay-6">
                    Lorem ipsum dolor sit amet, consectetur elit.<br />Odio
                    pulvinar in ipsum amet.
                  </p>
                  <Link to="shop1.html"
                    className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Buy
                    Now</Link>
                </div>
              </div>
            </div>
            {/* /.slideshow-item 2 */}
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                 <div className="slideshow-bg">
                  <img 
                    loading="lazy" 
                    src="./images/slider2.jpg" 
                    width="1863" 
                    height="700" 
                    alt=""
                    className="slideshow-bg__img object-fit-cover object-position-right" 
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Prevents infinite loops if fallback also fails
                      e.currentTarget.src = "/images/avatar-1860-700.png"; 
                    }}
                  />
                </div>
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                    TRENDING 2023
                  </h6>
                  <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    Interior Designs
                  </h2>
                  <p className="animate animate_fade animate_btt animate_delay-6">
                    Lorem ipsum dolor sit amet, consectetur elit.<br />Odio
                    pulvinar in ipsum amet.
                  </p>
                  <Link to="shop1.html"
                    className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Buy
                    Now</Link>
                </div>
              </div>
            </div>
            {/* /.slideshow-item 3 */}
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                 <div className="slideshow-bg">
                  <img 
                    loading="lazy" 
                    src="./images/slider3.jpg" 
                    width="1863" 
                    height="700" 
                    alt=""
                    className="slideshow-bg__img object-fit-cover object-position-right" 
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Prevents infinite loops if fallback also fails
                      e.currentTarget.src = "/images/avatar-1860-700.png"; 
                    }}
                  />
                </div>
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                    TRENDING 2023
                  </h6>
                  <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    Interior Designs
                  </h2>
                  <p className="animate animate_fade animate_btt animate_delay-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Odio
                    pulvinar in ipsum amet.
                  </p>
                  <Link to="shop1.html"
                    className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Buy
                    Now</Link>
                </div>
              </div>
            </div>
            {/* /.slideshow-item 4 */}
            <div className="swiper-slide">
              <div className="overflow-hidden position-relative h-100">
                 <div className="slideshow-bg">
                  <img 
                    loading="lazy" 
                    src="./images/slider4.jpg" 
                    width="1863" 
                    height="700" 
                    alt=""
                    className="slideshow-bg__img object-fit-cover object-position-right" 
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Prevents infinite loops if fallback also fails
                      e.currentTarget.src = "/images/avatar-1860-700.png"; 
                    }}
                  />
                </div>
                <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
                  <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                    TRENDING 2023
                  </h6>
                  <h2 className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5">
                    Interior Designs
                  </h2>
                  <p className="animate animate_fade animate_btt animate_delay-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Odio
                    pulvinar in ipsum amet.
                  </p>
                  <Link to="shop1.html"
                    className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7">Buy
                    Now</Link>
                </div>
              </div>
            </div>
          </div>
          {/* /.slideshow-wrapper js-swiper-slider */}

          <div className="slideshow-pagination position-left-center"></div>
          {/* /.products-pagination */}
        </section>
        {/* /.SliderShow */}

        <div className="mb-3 pb-1"></div>
   </>
  );
};

export default Slider;