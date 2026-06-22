import { Link } from "react-router-dom";

// fallback image used when a product image fails to load
// file lives under public/images/avatar-530x290.png, so use /images/... URL
const fallbackImage = '/images/avatar-530x290.png';
const handleImgError = (e) => {
  // prevent infinite loop if fallback also fails
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImage;
};
 
const LatestNews = () => { 
  return (
    <>
      <section className="blog-carousel container">
          <h2 className="section-title fw-normal text-center text-uppercase mb-3 pb-xl-3 mb-xl-3">
            Latest News
          </h2>

          <div className="position-relative">
            <div className="swiper-container js-swiper-slider" data-settings='{
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": 3,
            "slidesPerGroup": 3,
            "effect": "none",
            "loop": true,
            "breakpoints": {
              "320": {
                "slidesPerView": 1,
                "slidesPerGroup": 1,
                "spaceBetween": 14
              },
              "768": {
                "slidesPerView": 2,
                "slidesPerGroup": 2,
                "spaceBetween": 24
              },
              "992": {
                "slidesPerView": 3,
                "slidesPerGroup": 1,
                "spaceBetween": 30
              }
            }
          }'>
              <div className="swiper-wrapper blog-grid row-cols-xl-3">
                <div className="swiper-slide blog-grid__item mb-4">
                  <div className="blog-grid__item-image">
                    <img loading="lazy" className="h-auto" src="/assets/images/post1.jpg"
                      width="450" height="300" alt="" onError={handleImgError} />
                  </div>
                  <div className="blog-grid__item-detail">
                    <div className="blog-grid__item-meta">
                      <span className="blog-grid__item-meta__author">By Admin</span>
                      <span className="blog-grid__item-meta__date">Aprial 05, 2023</span>
                    </div>
                    <div className="blog-grid__item-title mb-0">
                      <Link to="blog_single.html">Woman with good shoes is never be ugly place</Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide blog-grid__item mb-4">
                  <div className="blog-grid__item-image">
                    <img loading="lazy" className="h-auto" src="/assets/images/post2.jpg"
                      width="450" height="300" alt="" onError={handleImgError} />
                  </div>
                  <div className="blog-grid__item-detail">
                    <div className="blog-grid__item-meta">
                      <span className="blog-grid__item-meta__author">By Admin</span>
                      <span className="blog-grid__item-meta__date">Aprial 05, 2023</span>
                    </div>
                    <div className="blog-grid__item-title mb-0">
                      <Link to="blog_single.html">What Freud Can Teach Us About Furniture</Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide blog-grid__item mb-4">
                  <div className="blog-grid__item-image">
                    <img loading="lazy" className="h-auto" src="/assets/images/post3.jpg"
                      width="450" height="300" alt="" onError={handleImgError} />
                  </div>
                  <div className="blog-grid__item-detail">
                    <div className="blog-grid__item-meta">
                      <span className="blog-grid__item-meta__author">By Admin</span>
                      <span className="blog-grid__item-meta__date">Aprial 05, 2023</span>
                    </div>
                    <div className="blog-grid__item-title mb-0">
                      <Link to="blog_single.html">Habitant morbi tristique senectus</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.swiper-wrapper */}
            </div>
            {/* /.swiper-container js-swiper-slider */}
          </div>
          {/* /.position-relative */}
      </section>
    </>
  );
};

export default LatestNews;