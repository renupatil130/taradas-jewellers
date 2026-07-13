import { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AppContext } from '../App'
import { PRODUCTS, formatPrice } from '../data'

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart, showToast } = useContext(AppContext)
  const [searchParams] = useSearchParams()
  const sharedIds = searchParams.get('shared')
  
  const [itemsToDisplay, setItemsToDisplay] = useState([])
  const [isSharedView, setIsSharedView] = useState(false)

  useEffect(() => {
    if (sharedIds) {
      const ids = sharedIds.split(',').map(Number)
      const filtered = PRODUCTS.filter(p => ids.includes(p.id))
      setItemsToDisplay(filtered)
      setIsSharedView(true)
    } else {
      const filtered = PRODUCTS.filter(p => wishlist.includes(p.id))
      setItemsToDisplay(filtered)
      setIsSharedView(false)
    }
  }, [wishlist, sharedIds])

  const handleShare = () => {
    if (wishlist.length === 0) {
      showToast('Wishlist is empty. Add products first!', 'info')
      return
    }
    const currentUrl = window.location.origin + window.location.pathname
    const shareUrl = `${currentUrl}?shared=${wishlist.join(',')}`
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast('Wishlist link copied! Share it with family & friends.', 'success')
    }).catch(() => {
      showToast('Failed to copy link.', 'error')
    })
  }

  return (
    <div className="container" style={{ padding: '40px 20px', minHeight: '70vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: 16, marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 32 }}>
            {isSharedView ? '🎁 Shared Bridal Wishlist' : '💖 My Wishlist'}
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: 14 }}>
            {isSharedView ? 'Curated jewelry items shared with you' : 'Save and organize jewelry items for weddings and festivals'}
          </p>
        </div>
        {!isSharedView && wishlist.length > 0 && (
          <button 
            onClick={handleShare} 
            className="btn btn-gold" 
            style={{ padding: '10px 20px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}
          >
            🔗 Share Wishlist
          </button>
        )}
      </div>

      {itemsToDisplay.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💝</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 8 }}>Your wishlist is empty</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: 24, fontSize: 14 }}>Explore our premium collections to save your favorite jewelry pieces.</p>
          <Link to="/shop" className="btn btn-gold">Browse Boutique</Link>
        </div>
      ) : (
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {itemsToDisplay.map(product => (
            <div className="product-card" key={product.id}>
              {product.badge && <span className="badge">{product.badge}</span>}
              <div className="product-img">
                <img src={product.image} alt={product.name} />
                {!isSharedView && (
                  <button className="wishlist-btn active" onClick={() => toggleWishlist(product.id)}>
                    ❤️
                  </button>
                )}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 8 }}>Weight: {product.weight}</div>
                <div className="product-price">
                  <span className="price">{formatPrice(product.price)}</span>
                  {product.oldPrice && <span className="old-price">{formatPrice(product.oldPrice)}</span>}
                </div>
                <button 
                  onClick={() => addToCart(product)} 
                  className="btn btn-gold" 
                  style={{ width: '100%', marginTop: 12, padding: 10, fontSize: 13 }}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
