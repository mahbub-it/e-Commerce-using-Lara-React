import { Link } from 'react-router-dom'

const Footer = ({logo_url, copyright_info}) => {

  return (
    <>
    {/* Footer Type 2 */}
     <footer id="footer" className="footer footer_type_2 bordered">
          <div className="footer-top container">
            <div className="block-newsletter">
              <h3 className="block__title">DON'T MISS THE CHANGE TO GET 40% OFF</h3>
              <p>Get the latest products and news update daily in fastest.</p>
              <form action="https://uomo-html.flexkitux.com/Demo9/index.html" className="block-newsletter__form">
                <input className="form-control" type="email" name="email" placeholder="Your email address" />
                <button className="btn btn-secondary fw-medium" type="submit">
                  JOIN
                </button>
              </form>
            </div>
          </div>
          {/* /.footer-top container */}

          <div className="footer-middle container">
            <div className="row row-cols-lg-5 row-cols-2">
              <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
                <div className="logo">
                  <Link to="/">
                    <img src={logo_url || 'No Image'} alt="Uomo"
                      className="logo__image d-block" />
                  </Link>
                </div>
                {/* /.logo */}
                <p className="footer-address">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                </p>

                <p className="m-0">
                  <strong className="fw-medium">sale@uomo.com</strong>
                </p>
                <p>
                  <strong className="fw-medium">+1 246-345-0695</strong>
                </p>

                <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                  <li>
                    <Link to="https://www.facebook.com/" className="footer__social-link d-block">
                      <svg className="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15"
                        xmlns="http://www.w3.org/2000/svg">
                        <use href="#icon_facebook" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.twitter.com/" className="footer__social-link d-block">
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
              {/* /.footer-column */}

              <div className="footer-column footer-menu mb-4 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase">Company</h6>
                <ul className="sub-menu__list list-unstyled">
                  <li className="sub-menu__item">
                    <Link to="about.html" className="menu-link menu-link_us-s">About Us</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="about.html" className="menu-link menu-link_us-s">Careers</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="about.html" className="menu-link menu-link_us-s">Affiliates</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="blog_list1.html" className="menu-link menu-link_us-s">Blog</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="contact.html" className="menu-link menu-link_us-s">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* /.footer-column */}

              <div className="footer-column footer-menu mb-4 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase">Shop</h6>
                <ul className="sub-menu__list list-unstyled">
                  <li className="sub-menu__item">
                    <Link to="shop2.html" className="menu-link menu-link_us-s">New Arrivals</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="shop3.html" className="menu-link menu-link_us-s">Accessories</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="shop4.html" className="menu-link menu-link_us-s">Men</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="shop5.html" className="menu-link menu-link_us-s">Women</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="shop1.html" className="menu-link menu-link_us-s">Shop All</Link>
                  </li>
                </ul>
              </div>
              {/* /.footer-column */}

              <div className="footer-column footer-menu mb-4 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase">Help</h6>
                <ul className="sub-menu__list list-unstyled">
                  <li className="sub-menu__item">
                    <Link to="about.html" className="menu-link menu-link_us-s">Customer Service</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="account_dashboard.html" className="menu-link menu-link_us-s">My Account</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="store_location.html" className="menu-link menu-link_us-s">Find a Store</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="about.html" className="menu-link menu-link_us-s">Legal & Privacy</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="contact.html" className="menu-link menu-link_us-s">Contact</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="about.html" className="menu-link menu-link_us-s">Gift Card</Link>
                  </li>
                </ul>
              </div>
              {/* /.footer-column */}

              <div className="footer-column mb-4 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase">Opening Time</h6>
                <ul className="list-unstyled">
                  <li><span className="menu-link">Mon - Fri: 8AM - 9PM</span></li>
                  <li><span className="menu-link">Sat: 9AM - 8PM</span></li>
                  <li><span className="menu-link">Sun: Closed</span></li>
                </ul>
              </div>
              {/* /.footer-column */}
            </div>
            {/* /.row-cols-5 */}
          </div>
          {/* /.footer-middle container */}

          <div className="footer-bottom">
  <div className="container d-md-flex align-items-center">
    <span className="footer-copyright me-auto">{copyright_info || 'No Copyright Info'}</span>
    <div className="footer-settings d-md-flex align-items-center">
      
      {/* 1. Language Select - Fixed with defaultValue */}
      <select 
        id="footerSettingsLanguage" 
        className="form-select form-select-sm bg-transparent border-0"
        aria-label="Default select example" 
        name="store-language"
        defaultValue="en-gb"
      >
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

      {/* 2. Currency Select - Fixed with defaultValue and correct field name */}
      <select 
        id="footerSettingsCurrency" 
        className="form-select form-select-sm bg-transparent border-0"
        aria-label="Default select example" 
        name="store-currency" 
        defaultValue="USD"
      >
        <option className="footer-select__option" value="USD">$ USD</option>
        <option className="footer-select__option" value="1">£ GBP</option>
        <option className="footer-select__option" value="2">€ EURO</option>
      </select>
    </div>
  </div> 
</div> 
         
        </footer>   
    </>
  )
}

export default Footer