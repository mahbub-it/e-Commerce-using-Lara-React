import React from 'react'

const ServicePromotion = () => {
  return (
    <>
    {/* Service Promotion Section */}
        <div className="service-promotion horizontal container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3">
              <div className="service-promotion__icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_shipping" />
                </svg>
              </div>
              <div className="service-promotion__content-wrap">
                <h3 className="service-promotion__title h6 text-uppercase mb-1">
                  Fast And Free Delivery
                </h3>
                <p className="service-promotion__content text-secondary mb-0">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            {/* /.col-md-4 text-center */}

            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3">
              <div className="service-promotion__icon">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_headphone" />
                </svg>
              </div>
              <div className="service-promotion__content-wrap">
                <h3 className="service-promotion__title h6 text-uppercase mb-1">
                  24/7 Customer Support
                </h3>
                <p className="service-promotion__content text-secondary mb-0">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
            {/* /.col-md-4 text-center */}

            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3">
              <div className="service-promotion__icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_shield" />
                </svg>
              </div>
              <div className="service-promotion__content-wrap">
                <h3 className="service-promotion__title h6 text-uppercase mb-1">
                  Money Back Guarantee
                </h3>
                <p className="service-promotion__content text-secondary mb-0">
                  We return money within 30 days
                </p>
              </div>
            </div>
            {/* /.col-md-4 text-center */}
          </div>
          {/* /.row */}
        </div>
        {/* /.service-promotion container */}
    </>
  )
}

export default ServicePromotion