import { Link } from "react-router-dom";

const MainHeader = ({settings, cartCount, onOpenLogin, onOpenCart, onOpenSitemap }) => {

  return (
    <>
      {/* Header Type 5 */}
      <header id="header" className="header header_sticky header-fullwidth">
        <div className="header-desk header-desk_type_5">
          <div className="logo">
            <Link to="/">
              <img src={settings.logo_url || 'No Image'} alt="DreamWebdev" className="logo__image d-block" />
            </Link> 
          </div>
          {/* /.logo */}

          <form action="https://uomo-html.flexkitux.com/Demo9/" method="GET"
            className="header-search search-field d-none d-xxl-flex">
            <button className="btn header-search__btn" type="submit">
              <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_search" />
              </svg>
            </button>
            <input className="header-search__input w-100" type="text" name="search-keyword" placeholder="Search products..." />
            <div className="hover-container position-relative">
              <div className="js-hover__open">
                <input className="header-search__category search-field__actor border-0 bg-white w-100" type="text"
                  name="search-category" placeholder="All Category" readOnly={true} />
          </div>
              <div className="header-search__category-list js-hidden-content mt-2">
                <ul className="search-suggestion list-unstyled">
                  <li className="search-suggestion__item js-search-select">
                    All Category
                  </li>
                  <li className="search-suggestion__item js-search-select">Men</li>
                  <li className="search-suggestion__item js-search-select">Women</li>
                  <li className="search-suggestion__item js-search-select">Kids</li>
                </ul>
              </div>
            </div>
          </form>
          {/* /.header-search */}

          <nav className="navigation mx-auto mx-xxl-0">
            <ul className="navigation__list list-unstyled d-flex">
              <li className="navigation__item">
                <Link to="#" className="navigation__link">Home</Link>
            <div className="box-menu" style={{ width: '800px' }}>
              <div className="col pe-4">
                <ul className="sub-menu__list list-unstyled">
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo1/index.html" className="menu-link menu-link_us-s">Home 1</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo2/index.html" className="menu-link menu-link_us-s">Home 2</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo3/index.html" className="menu-link menu-link_us-s">Home 3</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo4/index.html" className="menu-link menu-link_us-s">Home 4</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo5/index.html" className="menu-link menu-link_us-s">Home 5</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo6/index.html" className="menu-link menu-link_us-s">Home 6</Link>
                  </li>
                </ul>
              </div>

              <div className="col pe-4">
                <ul className="sub-menu__list list-unstyled">
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo7/index.html" className="menu-link menu-link_us-s">Home 7</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo8/index.html" className="menu-link menu-link_us-s">Home 8</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="index.html" className="menu-link menu-link_us-s">Home 9</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo10/index.html" className="menu-link menu-link_us-s">Home 10</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo11/index.html" className="menu-link menu-link_us-s">Home 11</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo12/index.html" className="menu-link menu-link_us-s">Home 12</Link>
                  </li>
                </ul>
              </div>

              <div className="col pe-4">
                <ul className="sub-menu__list list-unstyled">
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo13/index.html" className="menu-link menu-link_us-s">Home 13</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo14/index.html" className="menu-link menu-link_us-s">Home 14</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo15/index.html" className="menu-link menu-link_us-s">Home 15</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo16/index.html" className="menu-link menu-link_us-s">Home 16</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo17/index.html" className="menu-link menu-link_us-s">Home 17</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo18/index.html" className="menu-link menu-link_us-s">Home 18</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul className="sub-menu__list list-unstyled">
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo19/index.html" className="menu-link menu-link_us-s">Home 19</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo20/index.html" className="menu-link menu-link_us-s">Home 20</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo21/index.html" className="menu-link menu-link_us-s">Home 21</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo22/index.html" className="menu-link menu-link_us-s">Home 22</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="https://uomo-html.flexkitux.com/Demo23/index.html" className="menu-link menu-link_us-s">Home 23</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.box-menu */}
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">Shop</Link>
            <div className="mega-menu">
              <div className="container d-flex">
                <div className="col pe-4">
                  <Link to="#" className="sub-menu__title">Shop List</Link>
                  <ul className="sub-menu__list list-unstyled">
                    <li className="sub-menu__item"><Link to="shop1.html" className="menu-link menu-link_us-s">Shop List V1</Link></li>
                    <li className="sub-menu__item"><Link to="shop2.html" className="menu-link menu-link_us-s">Shop List V2</Link></li>
                    <li className="sub-menu__item"><Link to="shop3.html" className="menu-link menu-link_us-s">Shop List V3</Link></li>
                    <li className="sub-menu__item"><Link to="shop4.html" className="menu-link menu-link_us-s">Shop List V4</Link></li>
                    <li className="sub-menu__item"><Link to="shop5.html" className="menu-link menu-link_us-s">Shop List V5</Link></li>
                    <li className="sub-menu__item"><Link to="shop6.html" className="menu-link menu-link_us-s">Shop List V6</Link></li>
                    <li className="sub-menu__item"><Link to="shop7.html" className="menu-link menu-link_us-s">Shop List V7</Link></li>
                    <li className="sub-menu__item"><Link to="shop8.html" className="menu-link menu-link_us-s">Shop List V8</Link></li>
                    <li className="sub-menu__item"><Link to="shop9.html" className="menu-link menu-link_us-s">Shop List V9</Link></li>
                    <li className="sub-menu__item"><Link to="shop10.html" className="menu-link menu-link_us-s">Shop Item Style</Link></li>
                    <li className="sub-menu__item"><Link to="shop11.html" className="menu-link menu-link_us-s">Horizontal Scroll</Link></li>
                  </ul>
                </div>

                <div className="col pe-4">
                  <Link to="#" className="sub-menu__title">Shop Detail</Link>
                  <ul className="sub-menu__list list-unstyled">
                    <li className="sub-menu__item"><Link to="product2_variable.html" className="menu-link menu-link_us-s">Shop Detail V1</Link></li>
                    <li className="sub-menu__item"><Link to="product7_v2.html" className="menu-link menu-link_us-s">Shop Detail V2</Link></li>
                    <li className="sub-menu__item"><Link to="product8_v3.html" className="menu-link menu-link_us-s">Shop Detail V3</Link></li>
                    <li className="sub-menu__item"><Link to="product9_v4.html" className="menu-link menu-link_us-s">Shop Detail V4</Link></li>
                    <li className="sub-menu__item"><Link to="product10_v5.html" className="menu-link menu-link_us-s">Shop Detail V5</Link></li>
                    <li className="sub-menu__item"><Link to="product11_v6.html" className="menu-link menu-link_us-s">Shop Detail V6</Link></li>
                    <li className="sub-menu__item"><Link to="product12_v7.html" className="menu-link menu-link_us-s">Shop Detail V7</Link></li>
                    <li className="sub-menu__item"><Link to="product13_v8.html" className="menu-link menu-link_us-s">Shop Detail V8</Link></li>
                    <li className="sub-menu__item"><Link to="product14_v9.html" className="menu-link menu-link_us-s">Shop Detail V9</Link></li>
                    <li className="sub-menu__item"><Link to="product15_v10.html" className="menu-link menu-link_us-s">Shop Detail V10</Link></li>
                    <li className="sub-menu__item"><Link to="product16_v11.html" className="menu-link menu-link_us-s">Shop Detail V11</Link></li>
                  </ul>
                </div>

                <div className="col pe-4">
                  <Link to="#" className="sub-menu__title">Other Pages</Link>
                  <ul className="sub-menu__list list-unstyled">
                    <li className="sub-menu__item"><Link to="shop12.html" className="menu-link menu-link_us-s">Collection Grid</Link></li>
                    <li className="sub-menu__item"><Link to="product1_simple.html" className="menu-link menu-link_us-s">Simple Product</Link></li>
                    <li className="sub-menu__item"><Link to="product2_variable.html" className="menu-link menu-link_us-s">Variable Product</Link></li>
                    <li className="sub-menu__item"><Link to="product3_external.html" className="menu-link menu-link_us-s">External Product</Link></li>
                    <li className="sub-menu__item"><Link to="product4_grouped.html" className="menu-link menu-link_us-s">Grouped Product</Link></li>
                    <li className="sub-menu__item"><Link to="product5_onsale.html" className="menu-link menu-link_us-s">On Sale</Link></li>
                    <li className="sub-menu__item"><Link to="product6_outofstock.html" className="menu-link menu-link_us-s">Out of Stock</Link></li>
                    <li className="sub-menu__item"><Link to="shop_cart.html" className="menu-link menu-link_us-s">Shopping Cart</Link></li>
                    <li className="sub-menu__item"><Link to="shop_checkout.html" className="menu-link menu-link_us-s">Checkout</Link></li>
                    <li className="sub-menu__item"><Link to="shop_order_complete.html" className="menu-link menu-link_us-s">Order Complete</Link></li>
                    <li className="sub-menu__item"><Link to="shop_order_tracking.html" className="menu-link menu-link_us-s">Order Tracking</Link></li>
                  </ul>
                </div>

                <div className="mega-menu__media col">
                  <div className="position-relative">
                    <img loading="lazy" className="mega-menu__img"
                      src="/images/mega-menu-item.jpg" alt="New Horizons" />
                    <div className="mega-menu__media-content content_abs content_left content_bottom">
                      <h3>NEW</h3>
                      <h3 className="mb-0">HORIZONS</h3>
                      <Link to="shop1.html" className="btn-link default-underline fw-medium">SHOP NOW</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.container d-flex */}
            </div>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">Blog</Link>
            <ul className="default-menu list-unstyled">
              <li className="sub-menu__item"><Link to="blog_list1.html" className="menu-link menu-link_us-s">Blog V1</Link></li>
              <li className="sub-menu__item"><Link to="blog_list2.html" className="menu-link menu-link_us-s">Blog V2</Link></li>
              <li className="sub-menu__item"><Link to="blog_list3.html" className="menu-link menu-link_us-s">Blog V3</Link></li>
              <li className="sub-menu__item"><Link to="blog_single.html" className="menu-link menu-link_us-s">Blog Detail</Link></li>
            </ul>
            {/* /.box-menu */}
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">Pages</Link>
            <ul className="default-menu list-unstyled">
              <li className="sub-menu__item"><Link to="account_dashboard.html" className="menu-link menu-link_us-s">My Account</Link></li>
              <li className="sub-menu__item"><Link to="login_register.html" className="menu-link menu-link_us-s">Login / Register</Link></li>
              <li className="sub-menu__item"><Link to="store_location.html" className="menu-link menu-link_us-s">Store Locator</Link></li>
              <li className="sub-menu__item"><Link to="lookbook.html" className="menu-link menu-link_us-s">Lookbook</Link></li>
              <li className="sub-menu__item"><Link to="faq.html" className="menu-link menu-link_us-s">Faq</Link></li>
              <li className="sub-menu__item"><Link to="terms.html" className="menu-link menu-link_us-s">Terms</Link></li>
              <li className="sub-menu__item"><Link to="404.html" className="menu-link menu-link_us-s">404 Error</Link></li>
              <li className="sub-menu__item"><Link to="coming_soon.html" className="menu-link menu-link_us-s">Coming Soon</Link></li>
            </ul>
            {/* /.box-menu */}
          </li>
          <li className="navigation__item">
            <Link to="about.html" className="navigation__link">About</Link>
          </li>
          <li className="navigation__item">
            <Link to="contact.html" className="navigation__link">Contact</Link>
          </li>
        </ul>
        {/* /.navigation__list */}
      </nav>
      {/* /.navigation */}

      <div className="header-tools d-flex align-items-center">
        <div className="header-tools__item hover-container d-block d-xxl-none">
          <div className="js-hover__open position-relative">
            <Link className="js-search-popup search-field__actor" to="#">
              <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_search" />
              </svg>
              <i className="btn-icon btn-close-lg"></i>
            </Link>
          </div>

          <div className="search-popup js-hidden-content">
            <form action="https://uomo-html.flexkitux.com/Demo9/search_result.html" method="GET"
              className="search-field container">
              <p className="text-uppercase text-secondary fw-medium mb-4">
                What are you looking for?
              </p>
              <div className="position-relative">
                <input className="search-field__input search-popup__input w-100 fw-medium" type="text" name="search-keyword"
                  placeholder="Search products" />
                <button className="btn-icon search-popup__submit" type="submit">
                  <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_search" />
                  </svg>
                </button>
                <button className="btn-icon btn-close-lg search-popup__reset" type="reset"></button>
              </div>

              <div className="search-popup__results">
                <div className="sub-menu search-suggestion">
                  <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                  <ul className="sub-menu__list list-unstyled">
                    <li className="sub-menu__item">
                      <Link to="shop2.html" className="menu-link menu-link_us-s">New Arrivals</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="#" className="menu-link menu-link_us-s">Dresses</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="shop3.html" className="menu-link menu-link_us-s">Accessories</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="#" className="menu-link menu-link_us-s">Footwear</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="#" className="menu-link menu-link_us-s">Sweatshirt</Link>
                    </li>
                  </ul>
                </div>

                <div className="search-result row row-cols-5"></div>
              </div>
            </form>
            {/* /.header-search */}
          </div>
          {/* /.search-popup */}
        </div>
        {/* /.header-tools__item hover-container */}

        <div className="header-tools__item hover-container">
          <Link className="header-tools__item" to="#" onClick={(e) => {
            e.preventDefault();
            onOpenLogin();
          }}>
            <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_user" />
            </svg>
          </Link>
        </div>

        <Link className="header-tools__item" to="account_wishlist.html">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#icon_heart" />
          </svg>
        </Link>

        <Link to="#" className="header-tools__item header-tools__cart" onClick={(e) => {
          e.preventDefault();
          onOpenCart();
        }}>
          <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <use href="#icon_cart" />
          </svg>
          <span className="cart-amount d-block position-absolute js-cart-items-count">{cartCount}</span>
        </Link>

        <Link className="header-tools__item" to="#" onClick={(e) => {
          e.preventDefault();
          onOpenSitemap();
        }}>
          <svg className="nav-icon" width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="2" />
            <rect y="8" width="20" height="2" />
            <rect y="16" width="25" height="2" />
          </svg>
        </Link>
      </div>
      {/* /.header__tools */}
    </div>
    {/* /.header-desk header-desk_type_1 */}
  </header>
  {/* End Header Type 5 */}
    </>
  );
};

export default MainHeader;