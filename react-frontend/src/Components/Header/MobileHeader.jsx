import { Link } from "react-router-dom";

const MobileHeader = ({ onOpenLogin, onOpenCart, onOpenSitemap }) => {
  return (
    <>
    {/* Mobile Header */}
      <div className="header-mobile header_sticky">
        <div className="container d-flex align-items-center h-100"> 
          <Link className="mobile-nav-activator d-block position-relative" to="#">
            <svg className="nav-icon" width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_nav" />
            </svg>
            <span className="btn-close-lg position-absolute top-0 start-0 w-100"></span>
          </Link>

          <div className="logo">
            <Link to="index.html">
              <img src="/assets/images/dreamwebdev-logo.png" alt="Uomo" className="logo__image d-block" />
            </Link>
          </div>
          {/* /.logo */}

          <Link to="#" className="header-tools__item header-tools__cart" onClick={(e) => {
            e.preventDefault();
            onOpenCart();
          }}>
            <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon_cart" />
            </svg>
            <span className="cart-amount d-block position-absolute js-cart-items-count">3</span>
          </Link>
        </div>
        {/* /.container */}

        <nav
          className="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto">
          <div className="container">
            <form action="" method="GET"
              className="search-field position-relative mt-4 mb-3">
              <div className="position-relative">
                <input className="search-field__input w-100 border rounded-1" type="text" name="search-keyword"
                  placeholder="Search products" />
                <button className="btn-icon search-popup__submit pb-0 me-2" type="submit">
                  <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_search" />
                  </svg>
                </button>
                <button className="btn-icon btn-close-lg search-popup__reset pb-0 me-2" type="reset"></button>
              </div>

              <div className="position-absolute start-0 top-100 m-0 w-100">
                <div className="search-result"></div>
              </div>
            </form>
            {/* /.header-search */}
          </div>
          {/* /.container */}

          <div className="container">
            <div className="overflow-hidden">
              <ul className="navigation__list list-unstyled position-relative">
                <li className="navigation__item">
                  <Link to="#" className="navigation__link js-nav-right d-flex align-items-center">Home<svg className="ms-auto"
                    width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_next_sm" />
                  </svg></Link>
                  <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                    <Link to="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg
                      className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                      <use href="#icon_prev_sm" />
                    </svg>Home</Link>
                    <ul className="list-unstyled">
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo1/index.html" className="menu-link menu-link_us-s">Home
                          1</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo2/index.html" className="menu-link menu-link_us-s">Home
                          2</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo3/index.html" className="menu-link menu-link_us-s">Home
                          3</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo4/index.html" className="menu-link menu-link_us-s">Home
                          4</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo5/index.html" className="menu-link menu-link_us-s">Home
                          5</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo6/index.html" className="menu-link menu-link_us-s">Home
                          6</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo7/index.html" className="menu-link menu-link_us-s">Home
                          7</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo8/index.html" className="menu-link menu-link_us-s">Home
                          8</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="index.html" className="menu-link menu-link_us-s">Home 9</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo10/index.html" className="menu-link menu-link_us-s">Home
                          10</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo11/index.html" className="menu-link menu-link_us-s">Home
                          11</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo12/index.html" className="menu-link menu-link_us-s">Home
                          12</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo13/index.html" className="menu-link menu-link_us-s">Home
                          13</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo14/index.html" className="menu-link menu-link_us-s">Home
                          14</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo15/index.html" className="menu-link menu-link_us-s">Home
                          15</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo16/index.html" className="menu-link menu-link_us-s">Home
                          16</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo17/index.html" className="menu-link menu-link_us-s">Home
                          17</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo18/index.html" className="menu-link menu-link_us-s">Home
                          18</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo19/index.html" className="menu-link menu-link_us-s">Home
                          19</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo20/index.html" className="menu-link menu-link_us-s">Home
                          20</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo21/index.html" className="menu-link menu-link_us-s">Home
                          21</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo22/index.html" className="menu-link menu-link_us-s">Home
                          22</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="https://uomo-html.flexkitux.com/Demo23/index.html" className="menu-link menu-link_us-s">Home
                          23</Link>
                      </li>
                    </ul>
                    {/* /.box-menu */}
                  </div>
                </li>
                <li className="navigation__item">
                  <Link to="#" className="navigation__link js-nav-right d-flex align-items-center">Shop<svg className="ms-auto"
                    width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_next_sm" />
                  </svg></Link>
                  <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                    <Link to="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-3"><svg
                      className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                      <use href="#icon_prev_sm" />
                    </svg>Shop</Link>
                    <div className="sub-menu__wrapper">
                      <Link to="#" className="navigation__link js-nav-right d-flex align-items-center">Shop List<svg
                        className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                        <use href="#icon_next_sm" />
                      </svg></Link>
                      <div className="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                        <Link to="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg
                          className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                          <use href="#icon_prev_sm" />
                        </svg>Shop List</Link>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <Link to="shop1.html" className="menu-link menu-link_us-s">Shop List V1</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop2.html" className="menu-link menu-link_us-s">Shop List V2</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop3.html" className="menu-link menu-link_us-s">Shop List V3</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop4.html" className="menu-link menu-link_us-s">Shop List V4</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop5.html" className="menu-link menu-link_us-s">Shop List V5</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop6.html" className="menu-link menu-link_us-s">Shop List V6</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop7.html" className="menu-link menu-link_us-s">Shop List V7</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop8.html" className="menu-link menu-link_us-s">Shop List V8</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop9.html" className="menu-link menu-link_us-s">Shop List V9</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop10.html" className="menu-link menu-link_us-s">Shop Item Style</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop11.html" className="menu-link menu-link_us-s">Horizontal Scroll</Link>
                          </li>
                        </ul>
                      </div>
                      {/* /.sub-menu__wrapper */}

                      <Link to="#" className="navigation__link js-nav-right d-flex align-items-center">Shop Detail<svg
                        className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                        <use href="#icon_next_sm" />
                      </svg></Link>
                      <div className="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                        <Link to="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg
                          className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                          <use href="#icon_prev_sm" />
                        </svg>Shop Detail</Link>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <Link to="product2_variable.html" className="menu-link menu-link_us-s">Shop Detail V1</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product7_v2.html" className="menu-link menu-link_us-s">Shop Detail V2</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product8_v3.html" className="menu-link menu-link_us-s">Shop Detail V3</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product9_v4.html" className="menu-link menu-link_us-s">Shop Detail V4</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product10_v5.html" className="menu-link menu-link_us-s">Shop Detail V5</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product11_v6.html" className="menu-link menu-link_us-s">Shop Detail V6</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product12_v7.html" className="menu-link menu-link_us-s">Shop Detail V7</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product13_v8.html" className="menu-link menu-link_us-s">Shop Detail V8</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product14_v9.html" className="menu-link menu-link_us-s">Shop Detail V9</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product15_v10.html" className="menu-link menu-link_us-s">Shop Detail V10</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product16_v11.html" className="menu-link menu-link_us-s">Shop Detail V11</Link>
                          </li>
                        </ul>
                      </div>
                      {/* /.sub-menu__wrapper */}

                      <Link to="#" className="navigation__link js-nav-right d-flex align-items-center">Other Pages<svg
                        className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                        <use href="#icon_next_sm" />
                      </svg></Link>
                      <div className="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                        <Link to="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg
                          className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                          <use href="#icon_prev_sm" />
                        </svg>Other Pages</Link>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <Link to="shop12.html" className="menu-link menu-link_us-s">Collection Grid</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product1_simple.html" className="menu-link menu-link_us-s">Simple Product</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product2_variable.html" className="menu-link menu-link_us-s">Variable Product</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product3_external.html" className="menu-link menu-link_us-s">External Product</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product4_grouped.html" className="menu-link menu-link_us-s">Grouped Product</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product5_onsale.html" className="menu-link menu-link_us-s">On Sale</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="product6_outofstock.html" className="menu-link menu-link_us-s">Out of Stock</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop_cart.html" className="menu-link menu-link_us-s">Shopping Cart</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop_checkout.html" className="menu-link menu-link_us-s">Checkout</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop_order_complete.html" className="menu-link menu-link_us-s">Order Complete</Link>
                          </li>
                          <li className="sub-menu__item">
                            <Link to="shop_order_tracking.html" className="menu-link menu-link_us-s">Order Tracking</Link>
                          </li>
                        </ul>
                      </div>
                      {/* /.sub-menu__wrapper */}
                    </div>
                    {/* /.sub-menu__wrapper */}
                  </div>
                  {/* /.sub-menu */}
                </li>

                <li className="navigation__item">
                  <Link to="#" className="navigation__link js-nav-right d-flex align-items-center">Blog<svg className="ms-auto"
                    width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_next_sm" />
                  </svg></Link>
                  <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                    <Link to="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg
                      className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                      <use href="#icon_prev_sm" />
                    </svg>Blog</Link>
                    <ul className="list-unstyled">
                      <li className="sub-menu__item">
                        <Link to="blog_list1.html" className="menu-link menu-link_us-s">Blog V1</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="blog_list2.html" className="menu-link menu-link_us-s">Blog V2</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="blog_list3.html" className="menu-link menu-link_us-s">Blog V3</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="blog_single.html" className="menu-link menu-link_us-s">Blog Detail</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="navigation__item">
                  <Link to="#" className="navigation__link js-nav-right d-flex align-items-center">Pages<svg className="ms-auto"
                    width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_next_sm" />
                  </svg></Link>
                  <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                    <Link to="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg
                      className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                      <use href="#icon_prev_sm" />
                    </svg>Pages</Link>
                    <ul className="list-unstyled">
                      <li className="sub-menu__item">
                        <Link to="account_dashboard.html" className="menu-link menu-link_us-s">My Account</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="login_register.html" className="menu-link menu-link_us-s">Login / Register</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="store_location.html" className="menu-link menu-link_us-s">Store Locator</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="lookbook.html" className="menu-link menu-link_us-s">Lookbook</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="faq.html" className="menu-link menu-link_us-s">Faq</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="terms.html" className="menu-link menu-link_us-s">Terms</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="404.html" className="menu-link menu-link_us-s">404 Error</Link>
                      </li>
                      <li className="sub-menu__item">
                        <Link to="coming_soon.html" className="menu-link menu-link_us-s">Coming Soon</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="navigation__item">
                  <Link to="about.html" className="navigation__link">About</Link>
                </li>

                <li className="navigation__item">
                  <Link to="contact.html" className="navigation__link">Contact</Link>
                </li>
              </ul>
              {/* /.navigation__list */}
            </div>
            {/* /.overflow-hidden */}
          </div>
          {/* /.container */}

          <div className="border-top mt-auto pb-2">
            <div className="customer-links container mt-4 mb-2 pb-1">
              <svg className="d-inline-block align-middle" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_user" />
              </svg>
              <span className="d-inline-block ms-2 text-uppercase align-middle fw-medium">My Account</span>
            </div>

            <div className="container d-flex align-items-center">
  <label htmlFor="footerSettingsLanguage_mobile" className="me-2 text-secondary">Language</label>
  
  {/* 1. Added defaultValue here matching the first option value */}
  <select 
    id="footerSettingsLanguage_mobile" 
    className="form-select form-select-sm bg-transparent border-0"
    aria-label="Default select example" 
    name="store-language"
    defaultValue="en-gb" 
  >
    {/* 2. Added a logical value and removed the "selected" attribute */}
    <option className="footer-select__option" value="en-gb">
      United Kingdom | English
    </option>
    <option className="footer-select__option" value="1">
      United States | English
    </option>
    <option className="footer-select__option" value="2">German</option>
    <option className="footer-select__option" value="3">French</option>
    <option className="footer-select__option" value="4">Swedish</option>
  </select>
</div>

            <div className="container d-flex align-items-center">
  <label htmlFor="footerSettingsCurrency_mobile" className="me-2 text-secondary">Currency</label>
  
  {/* 1. Added defaultValue here matching the value of USD */}
  <select 
    id="footerSettingsCurrency_mobile" 
    className="form-select form-select-sm bg-transparent border-0"
    aria-label="Default select example" 
    name="store-currency" 
    defaultValue="USD" 
  >
    {/* 2. Added a logical value and removed the "selected" attribute */}
    <option value="USD">$ USD</option>
    <option value="1">£ GBP</option>
    <option value="2">€ EURO</option>
  </select>
</div>


            <ul className="container social-links list-unstyled d-flex flex-wrap mb-0">
              <li>
                <Link to="https://www.facebook.com/" className="footer__social-link d-block ps-0">
                  <svg className="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_facebook" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/" className="footer__social-link d-block">
                  <svg className="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_twitter" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/" className="footer__social-link d-block">
                  <svg className="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_instagram" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/" className="footer__social-link d-block">
                  <svg className="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="https://www.pinterest.com/" className="footer__social-link d-block">
                  <svg className="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_pinterest" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* /.navigation */}
      </div>
    {/* /.header-mobile */}
    </>
  );
}
export default MobileHeader;