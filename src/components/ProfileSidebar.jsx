import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { Gift, Wallet, Heart, Settings, Copy } from 'lucide-react'

export default function ProfileSidebar() {
  const { user, profileSidebarOpen, setProfileSidebarOpen, updateProfile, logout, showToast } = useContext(AppContext)
  const [formData, setFormData] = useState({ name: '', email: '', address: '' })

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        address: user.address || ''
      })
    }
  }, [user])

  const handleSave = (e) => {
    e.preventDefault()
    updateProfile(formData)
  }

  return (
    <>
      {profileSidebarOpen && <div className="modal-overlay" onClick={() => setProfileSidebarOpen(false)} />}
      <div className={`cart-sidebar ${profileSidebarOpen ? 'open' : ''}`} id="profile-sidebar">
        <div className="cart-header">
          <h3>Profile Settings</h3>
          <button className="modal-close" onClick={() => setProfileSidebarOpen(false)}>✕</button>
        </div>
        
        {user ? (
          <div className="cart-items" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'var(--white)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, margin: '0 auto 12px', fontFamily: 'var(--font-display)' }}>
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <h4 style={{ fontSize: 16, marginBottom: 4 }}>{user.name || 'User'}</h4>
              <p style={{ color: 'var(--text-light)', fontSize: 13, marginBottom: 12 }}>+91 {user.phone}</p>

              {/* Refer & Earn Info widget */}
              <div style={{ background: 'var(--cream)', border: '1px dashed var(--gold)', borderRadius: 8, padding: 12, textAlign: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: 9, letterSpacing: 1, color: 'var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, textTransform: 'uppercase', marginBottom: 6, fontWeight: '700' }}>
                  <Gift size={11} color="var(--gold-dark)" />
                  Refer & Earn Gold
                </span>
                <p style={{ fontSize: 11, color: 'var(--text)', marginBottom: 8, lineHeight: 1.4 }}>Invite friends! Both get ₹500 gold when they pay their first scheme installment.</p>
                <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #ddd', borderRadius: 6, padding: '6px 12px', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 'bold', fontSize: 13, color: 'var(--maroon)', letterSpacing: 1 }}>{user.phone}</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(user.phone)
                      showToast('Referral code copied!', 'success')
                    }} 
                    style={{ background: 'none', color: 'var(--gold-dark)', fontSize: 11, fontWeight: 'bold', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: 4 }}
                  >
                    <Copy size={10} />
                    Copy Code
                  </button>
                </div>
              </div>
            </div>

            {/* Showroom Navigation Menu */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, background: '#fcfcfc', border: '1px solid #eee', borderRadius: 8, padding: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 10, letterSpacing: 1, color: 'var(--text-light)', display: 'block', textTransform: 'uppercase', marginBottom: 4, borderBottom: '1px solid #eee', paddingBottom: 6, textAlign: 'left', fontWeight: '700' }}>
                Quick Links
              </span>
              <Link 
                to="/wallet" 
                onClick={() => setProfileSidebarOpen(false)}
                style={{ fontSize: 13, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', fontWeight: 500, textDecoration: 'none', textAlign: 'left' }}
              >
                <Wallet size={14} color="var(--gold-dark)" />
                My Gold Wallet & Schemes
              </Link>
              <Link 
                to="/wishlist" 
                onClick={() => setProfileSidebarOpen(false)}
                style={{ fontSize: 13, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', fontWeight: 500, textDecoration: 'none', textAlign: 'left' }}
              >
                <Heart size={14} color="var(--gold-dark)" />
                My Bridal Wishlist
              </Link>
              {user && user.phone === '0000000000' && (
                <Link 
                  to="/admin" 
                  onClick={() => setProfileSidebarOpen(false)}
                  style={{ fontSize: 13, color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', fontWeight: 'bold', textDecoration: 'none', textAlign: 'left' }}
                >
                  <Settings size={14} color="var(--gold-dark)" />
                  Store Owner Admin Panel
                </Link>
              )}
            </div>

            <form onSubmit={handleSave} style={{ flex: 1 }}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              <div className="form-group">
                <label>Delivery Address</label>
                <textarea 
                  placeholder="Enter your full address" 
                  value={formData.address} 
                  onChange={e => setFormData({...formData, address: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 8, fontSize: 14, fontFamily: 'var(--font-body)', minHeight: 100, resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="pay-btn" style={{ marginBottom: 16 }}>
                Save Changes
              </button>
            </form>
            
            <div className="cart-footer" style={{ padding: '20px 0 0', marginTop: 'auto', borderTop: 'none' }}>
              <button 
                onClick={logout}
                style={{ width: '100%', padding: 14, borderRadius: 8, background: '#fee2e2', color: '#dc2626', fontSize: 15, fontWeight: 600, transition: 'var(--transition)' }}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <p>Please log in to view your profile.</p>
          </div>
        )}
      </div>
    </>
  )
}
