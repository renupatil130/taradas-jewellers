import { useContext, useState } from 'react'
import { AppContext } from '../App'
import PriceAlertModal from './PriceAlertModal'

export default function GoldTicker() {
  const { goldRates } = useContext(AppContext)
  const [alertOpen, setAlertOpen] = useState(false)
  
  if (!goldRates) return null

  const items = Object.entries(goldRates)
  const doubled = [...items, ...items]

  return (
    <>
      <div className="ticker-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="ticker-content" style={{ flex: 1 }}>
          {doubled.map(([k, v], i) => (
            <div className="ticker-item" key={i}>
              <span className="label">{k} Gold (Davangere):</span>
              <span className="price">₹{v.price.toLocaleString('en-IN')}</span>
              <span className={`change ${v.change >= 0 ? 'up' : 'down'}`}>
                {v.change >= 0 ? '▲' : '▼'} ₹{Math.abs(v.change)}
              </span>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setAlertOpen(true)}
          style={{ 
            background: 'var(--maroon)', color: '#fff', border: 'none', 
            padding: '6px 12px', borderRadius: 4, cursor: 'pointer', 
            fontSize: 11, fontWeight: 'bold', marginRight: 16, zIndex: 10,
            whiteSpace: 'nowrap'
          }}
        >
          🔔 Alert Me
        </button>
      </div>
      <PriceAlertModal isOpen={alertOpen} onClose={() => setAlertOpen(false)} />
    </>
  )
}
