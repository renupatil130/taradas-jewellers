import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { GOLD_RATES, CATEGORIES, PRODUCTS, SCHEMES, formatPrice } from '../data'
import PaymentModal from '../components/PaymentModal'
import PriceAlertModal from '../components/PriceAlertModal'
import { Bell, Shield, FileText, RefreshCcw, Truck, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Home() {
  const { addToCart, goldRates, wishlist, toggleWishlist, user, setLoginModalOpen } = useContext(AppContext)
  const [activeScheme, setActiveScheme] = useState(null)
  const [alertOpen, setAlertOpen] = useState(false)
  const featured = PRODUCTS.slice(0, 4)

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Gold Savings Scheme • Taradas Jewellers</div>
            <h2>Timeless <span className="gold-text">Gold</span> for Every Celebration</h2>
            <p>Enroll in our secure Gold Savings Scheme to save systematically and accumulate BIS hallmarked gold ornaments. Transparent daily rates, bonus benefits, and a 60-year legacy of trust.</p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-gold">Contact Us →</Link>
              <a href="#policy-disclosure" className="btn btn-outline">View Disclosures</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-jewel-display">
              <div className="medallion-3d-container">
                <div className="medallion-3d">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="medallion-layer" 
                      style={{ 
                        transform: `translateZ(${i - 6}px)`,
                        opacity: i === 0 || i === 11 ? 1 : 0.95
                      }}
                    />
                  ))}
                  <div className="medallion-detail front">T</div>
                  <div className="medallion-detail back">T</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOLD RATES */}
      <section className="gold-rates" id="gold-rates">
        <div className="container">
          <div className="section-title">
            <h2>Today's Gold Rate — Davangere, Karnataka</h2>
            <p>Updated daily • {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <div className="rates-grid">
            {Object.entries(goldRates || {}).map(([k, v]) => (
              <div className="rate-card" key={k} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220 }}>
                <div>
                  <div className="karat">{k} {k !== 'Silver' ? 'Gold' : ''}</div>
                  <div className="rate-price">₹{v.price.toLocaleString('en-IN')}</div>
                  <div className="rate-unit">{v.unit}</div>
                  <span className={`rate-change ${v.change >= 0 ? 'up' : 'down'}`} style={{ display: 'inline-block', marginBottom: 12 }}>
                    {v.change >= 0 ? '▲' : '▼'} ₹{Math.abs(v.change)} today
                  </span>
                </div>
                {k === '22K' && (
                  <button 
                    onClick={() => setAlertOpen(true)}
                    className="btn" 
                    style={{ 
                      padding: '8px 16px', fontSize: 12, background: 'var(--maroon)', 
                      color: '#fff', width: '100%', borderRadius: 6, fontWeight: 'bold',
                      display: 'flex', alignItems: 'center', gap: 6,
                      justifyContent: 'center', transition: 'var(--transition)'
                    }}
                  >
                    <Bell size={13} />
                    Alert Me on Price Drop
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <PriceAlertModal isOpen={alertOpen} onClose={() => setAlertOpen(false)} />



      {/* POLICY DISCLOSURES & QUICK CONTACT */}
      <section className="section" id="policy-disclosure" style={{ background: 'var(--white)', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div className="section-header">
            <h2>Policy & Disclosures</h2>
            <p>We are committed to absolute transparency. Please review our official scheme terms and security disclosures.</p>
            <div className="gold-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 48 }}>
            {[
              { 
                title: 'Privacy Policy', 
                desc: 'Learn how we secure your personal information, scheme data, and keep payments secure.', 
                link: '/privacy-policy',
                icon: <Shield size={20} style={{ color: 'var(--gold)' }} />
              },
              { 
                title: 'Terms & Conditions', 
                desc: 'Read the official rules regarding scheme enrollments, installments, and redemption parameters.', 
                link: '/terms-and-conditions',
                icon: <FileText size={20} style={{ color: 'var(--gold)' }} />
              },
              { 
                title: 'Refund & Cancellation', 
                desc: 'Review guidelines regarding payment refunds, discontinuing schemes, and payment error resolutions.', 
                link: '/refund-policy',
                icon: <RefreshCcw size={20} style={{ color: 'var(--gold)' }} />
              }
            ].map((p, i) => (
              <div key={i} style={{ background: 'var(--gray)', padding: 24, borderRadius: 'var(--radius)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #f0f0f0' }}>
                <div>
                  <div style={{ display: 'inline-flex', padding: 8, background: 'var(--cream)', borderRadius: 8, marginBottom: 12 }}>
                    {p.icon}
                  </div>
                  <h3 style={{ fontSize: 16, marginBottom: 8, fontFamily: 'var(--font-display)', color: 'var(--dark)' }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                </div>
                <Link to={p.link} className="btn" style={{ padding: '8px 12px', fontSize: 12, background: 'var(--maroon)', color: '#fff', borderRadius: 6, fontWeight: '600', justifyContent: 'center', width: '100%' }}>
                  View Policy
                </Link>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #FFF2D6 100%)', border: '1px solid var(--gold-light)', borderRadius: 'var(--radius)', padding: '32px 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'center' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 22, marginBottom: 8 }}>Have Questions? We are here to help!</h3>
                <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.6 }}>Get in touch with Taradas Jewellers showroom representatives for direct assistance regarding gold scheme payments or registration.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Phone size={16} style={{ color: 'var(--maroon)' }} />
                  <div>
                    <span style={{ fontSize: 11, color: 'var(--text-light)', display: 'block', textTransform: 'uppercase' }}>Phone</span>
                    <a href="tel:+918123282144" style={{ fontSize: 14, fontWeight: 'bold', color: 'var(--maroon)' }}>+91 81232 82144</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Clock size={16} style={{ color: 'var(--maroon)' }} />
                  <div>
                    <span style={{ fontSize: 11, color: 'var(--text-light)', display: 'block', textTransform: 'uppercase' }}>Hours</span>
                    <span style={{ fontSize: 14, fontWeight: 'bold', color: 'var(--text)' }}>Mon – Sat, 10am – 9pm</span>
                  </div>
                </div>
                <Link to="/contact" className="btn" style={{ padding: '12px 20px', fontSize: 13, background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: '#fff', borderRadius: 8, fontWeight: '600' }}>
                  Contact Us Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeScheme && <PaymentModal scheme={activeScheme} onClose={() => setActiveScheme(null)} />}
    </>
  )
}
