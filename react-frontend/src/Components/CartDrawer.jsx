import { Link } from 'react-router-dom'
import React from 'react'

const CartDrawer = ({ onClose, cartItems, setCartItems, setCartDrawerOpen }) => {

  const subTotal = cartItems.reduce((total, product) => {
    return total + product.price * Number(product.quantity);
  }, 0);

  const removeItemFromCart = (product_id) => {
    setCartItems(cartItems.filter((p) => p.id !== product_id));
  };

  const incrementQuantity = (product_id) => {
    setCartItems(cartItems.map((p) => {
      if (p.id === product_id) return { ...p, quantity: Number(p.quantity) + 1 };
      return p;
    }));
  };

  const decrementQuantity = (product_id) => {
    setCartItems(cartItems.map((p) => {
      if (p.id === product_id && Number(p.quantity) > 1) return { ...p, quantity: Number(p.quantity) - 1 };
      return p;
    }));
  };

  return (
    <>
      <div className="page-overlay page-overlay_visible" onClick={onClose} />
      <div className="aside aside_right aside_visible overflow-hidden cart-drawer">
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            SHOPPING BAG (
            <span className="cart-amount js-cart-items-count">{cartItems.length}</span> )
          </h3>
          <button className="btn-close-lg btn-close-aside ms-auto" onClick={() => setCartDrawerOpen(false)}></button>
        </div>
        {/* /.aside-header */}

        <div className="aside-content cart-drawer-items-list">
          {cartItems.length === 0 ? (
            <p className="text-center text-secondary mt-4">Your cart is empty.</p>
          ) : (
            cartItems.map((product) => (
              <React.Fragment key={product.id}>
                <div className="cart-drawer-item d-flex position-relative">
                  <div className="position-relative">
                    <Link to={`/product/${product.id}`}>
                      <img
                        loading="lazy"
                        className="cart-drawer-item__img"
                        src={product.image || '/images/avatar-530x290.png'}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/avatar-530x290.png'; }}
                        alt={product.name}
                      />
                    </Link>
                  </div>
                  <div className="cart-drawer-item__info flex-grow-1">
                    <h6 className="cart-drawer-item__title fw-normal">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h6>
                    {product.category?.name && (
                      <p className="cart-drawer-item__option text-secondary">
                        Category: {product.category.name}
                      </p>
                    )}
                    {product.sku?.sku && (
                      <p className="cart-drawer-item__option text-secondary">
                        SKU: {product.sku.sku}
                      </p>
                    )}
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <div className="qty-control position-relative">
                        <input
                          type="number"
                          name="quantity"
                          value={product.quantity}
                          min="1"
                          max="100"
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10);
                            setCartItems(cartItems.map((p) =>
                              p.id === product.id ? { ...p, quantity: isNaN(val) || val < 1 ? 1 : val } : p
                            ));
                          }}
                          className="qty-control__number border-0 text-center"
                        />
                        <div className="qty-control__reduce text-start" onClick={() => decrementQuantity(product.id)}>-</div>
                        <div className="qty-control__increase text-end" onClick={() => incrementQuantity(product.id)}>+</div>
                      </div>
                      {/* .qty-control */}
                      <span className="cart-drawer-item__price money price">
                        ${(product.price * Number(product.quantity)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
                    onClick={() => removeItemFromCart(product.id)}
                  ></button>
                </div>
                {/* /.cart-drawer-item d-flex */}
                <hr className="cart-drawer-divider" />
              </React.Fragment>
            ))
          )}
        </div>
        {/* /.aside-content */}

        <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
          <hr className="cart-drawer-divider" />
          <div className="d-flex justify-content-between">
            <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
            <span className="cart-subtotal fw-medium">${subTotal.toFixed(2)}</span>
          </div>
          {/* /.d-flex justify-content-between */}
          <Link to="/cart" className="btn btn-light mt-3 d-block">View Cart</Link>
          <Link to="/checkout" className="btn btn-primary mt-3 d-block">Checkout</Link>
        </div>
        {/* /.cart-drawer-actions */}
      </div>
    </>
  )
}

export default CartDrawer