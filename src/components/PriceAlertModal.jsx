import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'

export default function PriceAlertModal({ isOpen, onClose }) {
  const { user, setLoginModalOpen, priceAlert, savePriceAlert } = useContext(AppContext)
  const [targetPrice, setTargetPrice] = useState('14000')

  useEffect(() => {
    if (priceAlert) {
      setTargetPrice(priceAlert.toString())
    }
  }, [priceAlert])

  if (!isOpen) return null

  const handleSetAlert = (e) => {
    e.preventDefault()
    if (!user) {
      onClose()
      setLoginModalOpen(true)
      return
    }

    const price = parseFloat(targetPrice)
    if (!price || price <= 0) return

    savePriceAlert(price)
    onClose()
  }

  const handleClearAlert = () => {
    savePriceAlert(null)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 400 }}>
        <div className="modal-header">
          <h2>🔔 Set Price Drop Alert</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body" style={{ padding: '24px 32px' }}>
          {!user ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--text-light)', fontSize: 13, marginBottom: 20 }}>
                Please log in to receive instant browser notifications whenever the gold price drops to your target rate.
              </p>
              <button 
                className="btn btn-gold" 
                onClick={() => { onClose(); setLoginModalOpen(true); }}
                style={{ width: '100%', padding: 12 }}
              >
                Log In / Register
              </button>
            </div>
          ) : (
            <form onSubmit={handleSetAlert}>
              <p style={{ color: 'var(--text-light)', fontSize: 13, marginBottom: 20 }}>
                We will alert you instantly via toast notification when the Davangere 22K Gold rate drops below your target rate.
              </p>

              <div className="form-group" style={{ marginBottom: 20 }}>
                <label>Target 22K Gold Price (₹/g)</label>
                <input 
                  type="number" 
                  value={targetPrice} 
                  onChange={e => setTargetPrice(e.target.value)} 
                  placeholder="e.g. 14000" 
                  min={1}
                  required 
                />
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <button type="submit" className="pay-btn" style={{ flex: 2 }}>
                  {priceAlert ? 'Update Alert' : 'Set Alert'}
                </button>
                {priceAlert && (
                  <button 
                    type="button" 
                    onClick={handleClearAlert} 
                    className="btn" 
                    style={{ flex: 1, background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: 8 }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
