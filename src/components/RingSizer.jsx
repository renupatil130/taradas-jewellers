import { useState } from 'react'
import { Ruler, CreditCard, Check } from 'lucide-react'

export default function RingSizer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('measure') // 'calibrate' or 'measure'
  const [diameter, setDiameter] = useState(16.5) // standard mid range in mm
  const [cardWidthPx, setCardWidthPx] = useState(300) // Default pixel width representing 85.6mm card
  
  if (!isOpen) return null

  // Universal credit card width is exactly 85.6mm
  const pxPerMm = cardWidthPx / 85.6
  const circlePx = diameter * pxPerMm

  // Indian ring size classification logic
  const getIndianSize = (d) => {
    if (d < 14.1) return 'Size 5 (13.8 mm)'
    if (d >= 14.1 && d < 14.9) return 'Size 7 (14.5 mm)'
    if (d >= 14.9 && d < 15.7) return 'Size 9 (15.3 mm)'
    if (d >= 15.7 && d < 16.5) return 'Size 11 (16.1 mm)'
    if (d >= 16.5 && d < 17.3) return 'Size 13 (16.9 mm)'
    if (d >= 17.3 && d < 18.1) return 'Size 15 (17.7 mm)'
    if (d >= 18.1 && d < 18.9) return 'Size 17 (18.5 mm)'
    if (d >= 18.9 && d < 19.8) return 'Size 19 (19.4 mm)'
    if (d >= 19.8 && d < 20.6) return 'Size 21 (20.2 mm)'
    return `Size 23+ (${d.toFixed(1)} mm)`
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 450 }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Ruler size={18} color="var(--gold-dark)" />
            <h2 style={{ fontSize: 18 }}>Smart Ring Sizer</h2>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Dual Tab navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #eee', background: '#fafafa' }}>
          <button 
            onClick={() => setActiveTab('calibrate')} 
            style={{ 
              flex: 1, padding: '12px 6px', border: 'none', background: activeTab === 'calibrate' ? '#fff' : 'transparent',
              borderBottom: activeTab === 'calibrate' ? '2px solid var(--maroon)' : 'none',
              fontWeight: activeTab === 'calibrate' ? 'bold' : 'normal',
              color: activeTab === 'calibrate' ? 'var(--maroon)' : 'var(--text-light)',
              cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
            }}
          >
            <CreditCard size={14} />
            1. Calibrate Screen
          </button>
          <button 
            onClick={() => setActiveTab('measure')} 
            style={{ 
              flex: 1, padding: '12px 6px', border: 'none', background: activeTab === 'measure' ? '#fff' : 'transparent',
              borderBottom: activeTab === 'measure' ? '2px solid var(--maroon)' : 'none',
              fontWeight: activeTab === 'measure' ? 'bold' : 'normal',
              color: activeTab === 'measure' ? 'var(--maroon)' : 'var(--text-light)',
              cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
            }}
          >
            <Ruler size={14} />
            2. Measure Your Ring
          </button>
        </div>

        <div className="modal-body" style={{ padding: '20px 24px' }}>
          
          {activeTab === 'calibrate' ? (
            <div>
              <p style={{ color: 'var(--text-light)', fontSize: 12, lineHeight: 1.5, marginBottom: 16, textAlign: 'center' }}>
                Screens vary in size. Place any standard **ATM / Credit Card** against the screen and adjust the slider below until the dashed rectangle matches your card's actual width.
              </p>

              {/* ATM card calibration outline template */}
              <div style={{ 
                height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', 
                background: '#fafafa', border: '1px dashed #ddd', borderRadius: 8, marginBottom: 20 
              }}>
                <div style={{
                  width: cardWidthPx,
                  height: cardWidthPx * (53.98 / 85.6), // strict physical aspect ratio
                  border: '2px dashed var(--gold-dark)',
                  borderRadius: 10,
                  background: 'rgba(198, 153, 62, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  color: 'var(--gold-dark)',
                  fontSize: 11,
                  textAlign: 'center',
                  transition: 'width 0.05s ease, height 0.05s ease'
                }}>
                  <CreditCard size={32} style={{ marginBottom: 6 }} />
                  <span style={{ fontWeight: 'bold' }}>ATM / Credit Card</span>
                  <span style={{ fontSize: 9, opacity: 0.8 }}>Match physical card width</span>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 20 }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 13 }}>
                  <span>Adjust Card Template Width</span>
                  <span style={{ color: 'var(--maroon)' }}>{cardWidthPx} px</span>
                </label>
                <input 
                  type="range" 
                  min={200} 
                  max={400} 
                  step={1}
                  value={cardWidthPx} 
                  onChange={e => setCardWidthPx(parseInt(e.target.value))}
                  style={{ width: '100%', marginTop: 8, accentColor: 'var(--maroon)' }}
                />
              </div>

              <button 
                className="btn btn-gold" 
                onClick={() => setActiveTab('measure')} 
                style={{ width: '100%', padding: 12, justifyContent: 'center', fontSize: 13 }}
              >
                Calibration Complete! Next Step
              </button>
            </div>
          ) : (
            <div>
              <p style={{ color: 'var(--text-light)', fontSize: 12, lineHeight: 1.5, marginBottom: 16, textAlign: 'center' }}>
                Place an existing ring flat on the circle. Slide the control until the golden circle perfectly outlines the **inside** of your ring.
              </p>

              {/* Measuring circle display */}
              <div style={{ 
                height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', 
                background: '#fafafa', border: '1px dashed #ddd', borderRadius: 8, marginBottom: 20, position: 'relative'
              }}>
                <div style={{
                  width: circlePx,
                  height: circlePx,
                  borderRadius: '50%',
                  border: '4px solid var(--gold)',
                  boxShadow: '0 0 15px rgba(198, 153, 62, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff',
                  transition: 'width 0.05s ease, height 0.05s ease'
                }}>
                  <div style={{ fontSize: 10, color: 'var(--gold-dark)', fontWeight: 'bold' }}>{diameter} mm</div>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 20 }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 13 }}>
                  <span>Adjust Ring Inner Diameter</span>
                  <span style={{ color: 'var(--maroon)' }}>{diameter} mm</span>
                </label>
                <input 
                  type="range" 
                  min={13.0} 
                  max={33.0} 
                  step={0.1}
                  value={diameter} 
                  onChange={e => setDiameter(parseFloat(e.target.value))}
                  style={{ width: '100%', marginTop: 8, accentColor: 'var(--maroon)' }}
                />
              </div>

              <div style={{ background: 'var(--cream)', padding: '14px 16px', borderRadius: 8, border: '1px solid #efe3cb', textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-light)', marginBottom: 4 }}>
                  Recommended Indian Ring Size
                </div>
                <div style={{ fontSize: 20, fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontWeight: 'bold' }}>
                  {getIndianSize(diameter)}
                </div>
              </div>

              <button 
                className="btn btn-gold" 
                onClick={onClose} 
                style={{ width: '100%', padding: 12, justifyContent: 'center', fontSize: 13 }}
              >
                <Check size={14} />
                Confirm Size & Close
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
