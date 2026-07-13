import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { PRODUCTS, CATEGORIES, formatPrice } from '../data'
import RingSizer from '../components/RingSizer'
import VideoBookingModal from '../components/VideoBookingModal'
import { Heart, Video } from 'lucide-react'

export default function Shop() {
  const { addToCart, wishlist, toggleWishlist } = useContext(AppContext)
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('default')
  
  const [sizerOpen, setSizerOpen] = useState(false)
  const [selectedCallProduct, setSelectedCallProduct] = useState(null)

  let filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter)
  if (sort === 'low') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sort === 'high') filtered = [...filtered].sort((a, b) => b.price - a.price)

  return (
    <>
      <div className="page-header">
        <h1>Shop Online</h1>
        <p>Explore our complete collection of handcrafted jewellery</p>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
            <div className="catalogue-filters">
              <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
              {CATEGORIES.map(c => (
                <button key={c.id} className={`filter-btn ${filter === c.id ? 'active' : ''}`} onClick={() => setFilter(c.id)}>
                  <img src={c.image} alt={c.name} style={{width: 20, height: 20, borderRadius: '50%', objectFit: 'cover'}} /> {c.name}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button 
                onClick={() => setSizerOpen(true)}
                className="btn" 
                style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 13, background: '#fff', color: 'var(--maroon)', fontWeight: 600 }}
              >
                💍 Ring Sizer Guide
              </button>
              <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 13 }}>
                <option value="default">Sort by: Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="products-grid">
            {filtered.map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-img">
                  <img src={p.image} alt={p.name} />
                  {p.badge && <span className="badge">{p.badge}</span>}
                  <button 
                    className={`wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}`} 
                    onClick={() => toggleWishlist(p.id)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
                  >
                    <Heart size={16} fill={wishlist.includes(p.id) ? "var(--maroon)" : "none"} color="var(--maroon)" />
                  </button>
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <div className="product-weight">
                    Weight: {p.weight} • 22K Gold
                    {p.category === 'rings' && (
                      <span 
                        onClick={() => setSizerOpen(true)}
                        style={{ display: 'block', color: 'var(--gold-dark)', fontSize: 11, cursor: 'pointer', textDecoration: 'underline', marginTop: 4 }}
                      >
                        Find Ring Size Guide
                      </span>
                    )}
                  </div>
                  <div className="product-price">
                    {formatPrice(p.price)}
                    {p.oldPrice && <span className="old">{formatPrice(p.oldPrice)}</span>}
                  </div>
                  <div className="product-actions">
                    <button className="add-cart-btn" onClick={() => addToCart(p)}>Add to Cart</button>
                    <button 
                      className="quick-view-btn" 
                      onClick={() => setSelectedCallProduct(p)} 
                      style={{ fontSize: 11, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}
                    >
                      <Video size={13} />
                      Book Video Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: 60 }}>No products found in this category.</p>}
        </div>
      </section>

      <RingSizer isOpen={sizerOpen} onClose={() => setSizerOpen(false)} />
      {selectedCallProduct && <VideoBookingModal product={selectedCallProduct} onClose={() => setSelectedCallProduct(null)} />}
    </>
  )
}
