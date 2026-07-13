import { useState } from 'react'
import { PRODUCTS, CATEGORIES, formatPrice } from '../data'

export default function Catalogue() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <>
      <div className="page-header">
        <h1>Gold Catalogue</h1>
        <p>Browse our extensive collection of certified jewellery designs</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="catalogue-filters">
            <button className={`filter-btn ${active === 'all' ? 'active' : ''}`} onClick={() => setActive('all')}>All Designs</button>
            {CATEGORIES.map(c => (
              <button key={c.id} className={`filter-btn ${active === c.id ? 'active' : ''}`} onClick={() => setActive(c.id)}>
                <img src={c.image} alt={c.name} style={{width: 20, height: 20, borderRadius: '50%', objectFit: 'cover'}} /> {c.name} ({c.count})
              </button>
            ))}
          </div>
          <div className="products-grid">
            {filtered.map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-img" style={{ cursor: 'pointer' }}>
                  <img src={p.image} alt={p.name} />
                  {p.badge && <span className="badge">{p.badge}</span>}
                </div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <div className="product-weight">Weight: {p.weight} • 22K Hallmarked Gold</div>
                  <div className="product-price">{formatPrice(p.price)}</div>
                  <p style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 8 }}>
                    Available at store • Custom sizing available
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
