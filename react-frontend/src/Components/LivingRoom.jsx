


// fallback image used when a product image fails to load
// file lives under public/images/avatar-530x290.png, so use /images/... URL
const fallbackImage = '/images/avatar-530x290.png';
const handleImgError = (e) => {
  // prevent infinite loop if fallback also fails
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImage;
};

const LivingRoom = () => {
  return (
    <>
     {/* Living Room Furniture Lookbook */}
        <section className="lookbook-products position-relative d-none d-md-block">
          <img className="w-100 h-auto" loading="lazy" src="/assets/images/lookbook-bg.jpg"
            width="1903" height="709" alt="" onError={handleImgError} />
          <h2 className="section-title position-absolute position-top-center fw-normal text-center" style={{ top: '13.3%' }}>
            LIVING ROOM FURNITURE<br /><span className="h2 fw-normal">Discount 50%</span>
          </h2>
          <button className="popover-point type2 position-absolute" style={{ left: '11%', top: '10%' }} data-bs-toggle="popover"
            data-bs-trigger="focus" data-bs-content='
          <div className="popover-product">
            <Link to="product1_simple.html">
              <img loading="lazy" className="mb-3" src="/images/avatar-530x290.png" alt="">
            </Link>
            <p className="fw-medium mb-0"><Link to="product1_simple.html">Cableknit Shawl</Link></p>
            <p className="mb-0">$129</p>
          </div>
          '>
            <span>+</span>
          </button>
          <button className="popover-point type2 position-absolute" style={{ left: '11%', top: '55%' }} data-bs-toggle="popover"
            data-bs-trigger="focus" data-bs-content='
            <div className="popover-product">
              <Link to="product1_simple.html">
                <img loading="lazy" className="mb-3" src="/images/avatar-530x290.png" alt="">
              </Link>
              <p className="fw-medium mb-0"><Link to="product1_simple.html">Cableknit Shawl</Link></p>
              <p className="mb-0">$129</p>
            </div>
          '>
            <span>+</span>
          </button>
          <button className="popover-point type2 position-absolute" style={{ left: '8%', top: '75%' }} data-bs-toggle="popover"
            data-bs-trigger="focus" data-bs-content='
            <div className="popover-product">
              <Link to="product1_simple.html">
                <img loading="lazy" className="mb-3" src="/images/avatar-530x290.png" alt="" onError={handleImgError} />
              </Link>
              <p className="fw-medium mb-0"><Link to="product1_simple.html">Cableknit Shawl</Link></p>
              <p className="mb-0">$129</p>
            </div>
          '>
            <span>+</span>
          </button>
          <button className="popover-point type2 position-absolute" style={{ left: '49%', top: '66%' }} data-bs-toggle="popover"
            data-bs-trigger="focus" data-bs-placement="top" data-bs-content='
            <div className="popover-product">
              <Link to="product1_simple.html">
                <img loading="lazy" className="mb-3" src="/images/avatar-530x290.png" alt="" onError={handleImgError} />
              </Link>
              <p className="fw-medium mb-0"><Link to="product1_simple.html">Cableknit Shawl</Link></p>
              <p className="mb-0">$129</p>
            </div>
          '>
            <span>+</span>
          </button>
          <button className="popover-point type2 position-absolute" style={{ left: '67%', top: '50%' }} data-bs-toggle="popover"
            data-bs-trigger="focus" data-bs-placement="left" data-bs-content='
              <div className="popover-product">
              <Link to="product1_simple.html">
                <img loading="lazy" className="mb-3" src="/images/avatar-530x290.png" alt="" onError={handleImgError} />
              </Link>
              <p className="fw-medium mb-0"><Link to="product1_simple.html">Cableknit Shawl</Link></p>
              <p className="mb-0">$129</p>
            </div>
          '>
            <span>+</span>
          </button>
          <button className="popover-point type2 position-absolute" style={{ left: '88%', top: '79%' }} data-bs-toggle="popover"
            data-bs-trigger="focus" data-bs-placement="left" data-bs-content='
            <div className="popover-product">
              <Link to="product1_simple.html">
                <img loading="lazy" className="mb-3" src="/images/avatar-530x290.png" alt="" onError={handleImgError} />
              </Link>
              <p className="fw-medium mb-0"><Link to="product1_simple.html">Cableknit Shawl</Link></p>
              <p className="mb-0">$129</p>
            </div>
          '>
            <span>+</span>
          </button>
        </section>
    </>
  )
}

export default LivingRoom