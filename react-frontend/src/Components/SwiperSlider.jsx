

// fallback image used when a product image fails to load
// file lives under public/images/avatar-530x290.png, so use /images/... URL
const fallbackImage = '/images/avatar-530x290.png';
const handleImgError = (e) => {
  // prevent infinite loop if fallback also fails
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImage;
};

export const SwiperSlider = () => {
  return (
    <>
    {/* Carousel swiper-slider */}
        <section className="brands-carousel container">
          <h2 className="d-none">Brands</h2>
          <div className="position-relative">
            <div className="swiper-container js-swiper-slider" data-settings='{
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": 7,
            "slidesPerGroup": 7,
            "effect": "none",
            "loop": true,
            "breakpoints": {
              "320": {
                "slidesPerView": 2,
                "slidesPerGroup": 2,
                "spaceBetween": 14
              },
              "768": {
                "slidesPerView": 4,
                "slidesPerGroup": 4,
                "spaceBetween": 24
              },
              "992": {
                "slidesPerView": 7,
                "slidesPerGroup": 1,
                "spaceBetween": 30,
                "pagination": false
              }
            }
          }'>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img loading="lazy" src="/assets/images/brands/brand1.webp" width="120" height="20"
                    alt="" onError={handleImgError} />
                </div>
                <div className="swiper-slide">
                  <img loading="lazy" src="/assets/images/brands/brand2.webp" width="87" height="20"
                    alt="" onError={handleImgError} />
                </div>
                <div className="swiper-slide">
                  <img loading="lazy" src="/assets/images/brands/brand3.webp" width="132" height="22"
                    alt="" onError={handleImgError} />
                </div>
                <div className="swiper-slide">
                  <img loading="lazy" src="/assets/images/brands/brand4.webp" width="72" height="21"
                    alt="" onError={handleImgError} />
                </div>
                <div className="swiper-slide">
                  <img loading="lazy" src="/assets/images/brands/brand5.webp" width="123" height="31"
                    alt="" onError={handleImgError} />
                </div>
                <div className="swiper-slide">
                  <img loading="lazy" src="/assets/images/brands/brand6.webp" width="137" height="22"
                    alt="" onError={handleImgError} />
                </div>
                <div className="swiper-slide">
                  <img loading="lazy" src="/assets/images/brands/brand7.webp" width="94" height="21"
                    alt="" onError={handleImgError} />
                </div>
              </div>
              {/* /.swiper-wrapper */}
            </div>
            {/* /.swiper-container js-swiper-slider */}
          </div>
          {/* /.position-relative */}
        </section>
        {/* /.products-carousel container */}
    </>
  )
}

export default SwiperSlider;
