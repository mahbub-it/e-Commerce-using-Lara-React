import React from 'react';
import { Link } from 'react-router-dom';

const FooterFixedMobile = () => {
  return (
    <footer className="footer-mobile container w-100 px-5 d-md-none bg-body">
          <div className="row text-center">
            <div className="col-4">
              <Link to="https://uomo-html.flexkitux.com/" className="footer-mobile__link d-flex flex-column align-items-center">
                <svg className="d-block" width="18" height="18" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_home" />
                </svg>
                <span>Home</span>
              </Link>
            </div>
            {/* /.col-3 */}

            <div className="col-4">
              <Link to="/" className="footer-mobile__link d-flex flex-column align-items-center">
                <svg className="d-block" width="18" height="18" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_hanger" />
                </svg>
                <span>Shop</span>
              </Link>
            </div>
            {/* /.col-3 */}

            <div className="col-4">
              <Link to="https://uomo-html.flexkitux.com/" className="footer-mobile__link d-flex flex-column align-items-center">
                <div className="position-relative">
                  <svg className="d-block" width="18" height="18" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="#icon_heart" />
                  </svg>
                  <span className="wishlist-amount d-block position-absolute js-wishlist-count">3</span>
                </div>
                <span>Wishlist</span>
              </Link>
            </div>
            {/* /.col-3 */}
          </div>
          {/* /.row */}
        </footer>
  )
}

export default FooterFixedMobile