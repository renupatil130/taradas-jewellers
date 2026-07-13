import { useContext } from 'react'
import { AppContext } from '../App'
import { formatPrice } from '../data'

export default function CartSidebar() {
  const { cart, cartOpen, setCartOpen, removeFromCart, cartTotal } = useContext(AppContext)

  return (
    <>
      {cartOpen && <div className="modal-overlay" onClick={() => setCartOpen(false)} />}
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`} id="cart-sidebar">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="modal-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">

              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <div className="ci-price">{formatPrice(item.price)} × {item.qty}</div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span><span>{formatPrice(cartTotal)}</span>
            </div>
            <button className="checkout-btn" onClick={() => { setCartOpen(false); alert('Thank you! Your order has been placed. We will contact you shortly.') }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
