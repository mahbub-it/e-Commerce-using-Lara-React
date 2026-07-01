import { Link } from "react-router-dom";
import axios from "axios";

// fallback image used when a product image fails to load
const fallbackImage = '/images/avatar-530x290.png';
const handleImgError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImage;
};

const ProductCard = ({ id, title, price, image, category, cartItems = [], setCartItems }) => {

  const get_product = async (product_id) => {
    const response = await axios.get("http://127.0.0.1:8000/api/products/" + product_id);
    return response.data;
  };

  const add_to_cart = async () => {
    const product_data = await get_product(id);

    const product_index = cartItems.findIndex((singleProduct) => {
      return singleProduct.id === product_data.id;
    });

    if (product_index !== -1) {
      // immutable quantity update — avoids direct state mutation
      const updated = cartItems.map((item, i) =>
        i === product_index ? { ...item, quantity: Number(item.quantity) + 1 } : item
      );
      setCartItems(updated);
    } else {
      product_data.quantity = 1;
      setCartItems([...cartItems, product_data]);
    }

    // dispatch AFTER state is updated — Home.jsx listener calls setActiveOverlay('cart')
    window.dispatchEvent(new CustomEvent("open-cart"));
  };

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
                  <Link to={`/product/${id}`}>
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
                <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_prev_sm" /></svg></span>
              <span className="pc__img-next">
                <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_next_sm" /></svg></span>
            </div>
            <button
              className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside bg-secondary bg-gradient text-white"
              data-aside="cartDrawer"
              title="Add To Cart"
              onClick={add_to_cart}
            >
              <svg
                className="d-inline-block align-middle mx-2"
                width="14" height="14" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_cart" />
              </svg>
              <span className="d-inline-block align-middle">Add To Cart</span>
            </button>
          </div>

          <div className="pc__info position-relative">
            <p className="pc__category">{category?.name || "Uncategorized"}</p>
            <h6 className="pc__title mb-2">
              <Link to={`/product/${id}`}>{title}</Link>
            </h6>
            <div className="product-card__price d-flex">
              <span className="money price">${price}</span>
            </div>

            <button
              className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
              title="Add To Wishlist">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_heart" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Single ProductGridCard End */}
    </>
  );
};

export default ProductCard