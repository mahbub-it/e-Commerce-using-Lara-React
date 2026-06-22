import { Link } from "react-router-dom";


// fallback image used when a product image fails to load
// file lives under public/images/avatar-530x290.png, so use /images/... URL
const fallbackImage = '/images/avatar-530x290.png';
const handleImgError = (e) => {
  // prevent infinite loop if fallback also fails
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImage;
};

// Destructuring props
const ProductGridCard = ({title, image, price, category}) => {
 
  return (
    <>
    {/* Single ProductGridCard Start */}
      <div className="col-6 col-md-4 col-lg-3">
        <div className="product-card mb-3 mb-md-4 mb-xxl-5">
          <div className="pc__img-wrapper">
            <div
              className="swiper-container background-img js-swiper-slider"
              data-settings='{"resizeObserver": true}'>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <Link to="product1_simple.html">
                      <img loading="lazy" 
                      src={image || fallbackImage}
                      onError={handleImgError}
                      alt={title} 
                      width="330" height="400" 
                      className="pc__img" 
                      /> 
                    </Link>
                  </div>
                  {/* /.pc__img-wrapper */}
              </div>
              <span className="pc__img-prev">
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_prev_sm" /></svg></span>
              <span className="pc__img-next">
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_next_sm" /></svg></span>
            </div>
            <button
              className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside bg-secondary bg-gradient text-white"
              data-aside="cartDrawer"
              title="Add To Cart"
            >
              <svg
                className="d-inline-block align-middle mx-2"
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_cart" />
              </svg>
              <span className="d-inline-block align-middle">Add To Cart</span>
            </button>
          </div>

          <div className="pc__info position-relative">
            <p className="pc__category">{category?.name || "Uncategorized"}</p>
            <h6 className="pc__title mb-2">
              <Link to="product1_simple.html">{title}</Link>
            </h6>
            <div className="product-card__price d-flex">
              <span className="money price">${price}</span>
            </div>

            <button
              className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
              title="Add To Wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_heart" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    {/* Single ProductGridCard End */}
    </>
  )
}

export default ProductGridCard