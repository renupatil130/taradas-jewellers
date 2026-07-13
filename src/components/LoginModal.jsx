import { useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../App'

export default function LoginModal() {
  const { setLoginModalOpen, login, showToast } = useContext(AppContext)
  const [step, setStep] = useState(1) // 1: Phone, 2: PIN
  const [phone, setPhone] = useState('')
  const [pin, setPin] = useState(['', '', '', ''])
  const [isRegistering, setIsRegistering] = useState(false)
  const [referralCode, setReferralCode] = useState('')
  const pinRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const handlePhoneSubmit = (e) => {
    e.preventDefault()
    if (phone.length !== 10) {
      showToast('Please enter a valid 10-digit phone number', 'info')
      return
    }
    
    // Check if user exists
    const db = JSON.parse(localStorage.getItem('tj_users_db') || '{}')
    if (db[phone]) {
      setIsRegistering(false)
    } else {
      setIsRegistering(true)
    }
    setStep(2)
  }

  const handlePinChange = (index, value) => {
    if (value.length > 1) return // only allow 1 char
    
    const newPin = [...pin]
    newPin[index] = value
    setPin(newPin)

    // Focus next input
    if (value !== '' && index < 3) {
      pinRefs[index + 1].current.focus()
    }
  }

  const handlePinKeyDown = (index, e) => {
    if (e.key === 'Backspace' && pin[index] === '' && index > 0) {
      pinRefs[index - 1].current.focus()
    }
  }

  const handlePinSubmit = (e) => {
    e.preventDefault()
    const enteredPin = pin.join('')
    if (enteredPin.length !== 4) {
      showToast('Please enter a 4-digit PIN', 'info')
      return
    }

    const db = JSON.parse(localStorage.getItem('tj_users_db') || '{}')

    if (isRegistering) {
      // Create new user with referral tracking
      let referredBy = ''
      if (referralCode.trim()) {
        const ref = referralCode.trim()
        if (ref === phone) {
          showToast('You cannot use your own number as a referral code', 'error')
          return
        }
        if (db[ref]) {
          referredBy = ref
        } else {
          showToast('Invalid referral code. Registering without referral.', 'info')
        }
      }

      const newUser = { 
        phone, 
        pin: enteredPin, 
        name: '', 
        email: '', 
        address: '', 
        referredBy, 
        referralBonusClaimed: false 
      }
      db[phone] = newUser
      localStorage.setItem('tj_users_db', JSON.stringify(db))
      login(newUser)
    } else {
      // Verify existing user
      if (db[phone].pin === enteredPin) {
        login(db[phone])
      } else {
        showToast('Incorrect PIN. Please try again.', 'error')
        setPin(['', '', '', ''])
        pinRefs[0].current.focus()
      }
    }
  }

  return (
    <div className="modal-overlay" onClick={() => setLoginModalOpen(false)}>
      <div className="modal login-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{step === 1 ? 'Login or Register' : (isRegistering ? 'Create Secret PIN' : 'Enter Secret PIN')}</h2>
          <button className="modal-close" onClick={() => setLoginModalOpen(false)}>✕</button>
        </div>
        <div className="modal-body">
          {step === 1 ? (
            <form onSubmit={handlePhoneSubmit}>
              <p style={{ color: 'var(--text-light)', marginBottom: 20, fontSize: 14 }}>
                Enter your mobile number to access your account or create a new one.
              </p>
              <div className="form-group">
                <label>Mobile Number</label>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '12px 16px', background: 'var(--gray)', border: '1px solid #ddd', borderRight: 'none', borderRadius: '8px 0 0 8px', fontSize: 14 }}>
                    +91
                  </div>
                  <input 
                    type="tel" 
                    placeholder="10-digit mobile number" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    style={{ borderRadius: '0 8px 8px 0' }}
                    autoFocus
                  />
                </div>
              </div>
              <button type="submit" className="pay-btn" disabled={phone.length !== 10}>
                Continue
              </button>
            </form>
          ) : (
            <form onSubmit={handlePinSubmit}>
              <p style={{ color: 'var(--text-light)', marginBottom: 20, fontSize: 14, textAlign: 'center' }}>
                {isRegistering 
                  ? `Create a 4-digit PIN for +91 ${phone}`
                  : `Enter the 4-digit PIN for +91 ${phone}`}
              </p>
              
              <div className="pin-inputs" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
                {pin.map((p, i) => (
                  <input
                    key={i}
                    ref={pinRefs[i]}
                    type="password"
                    maxLength={1}
                    value={p}
                    onChange={(e) => handlePinChange(i, e.target.value)}
                    onKeyDown={(e) => handlePinKeyDown(i, e)}
                    style={{ 
                      width: 50, height: 60, fontSize: 24, textAlign: 'center', 
                      borderRadius: 8, border: '1px solid #ddd', fontFamily: 'var(--font-display)' 
                    }}
                  />
                ))}
              </div>

              {isRegistering && (
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label>Referral Code / Friend's Mobile (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="Enter friend's 10-digit mobile number" 
                    value={referralCode} 
                    onChange={e => setReferralCode(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  />
                </div>
              )}

              <button type="submit" className="pay-btn" disabled={pin.join('').length !== 4}>
                {isRegistering ? 'Create Account' : 'Secure Login'}
              </button>
              
              <button 
                type="button" 
                onClick={() => { setStep(1); setPin(['','','','']); setReferralCode(''); }}
                style={{ width: '100%', padding: 12, background: 'none', color: 'var(--text-light)', marginTop: 12, fontSize: 13 }}
              >
                Change Phone Number
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
