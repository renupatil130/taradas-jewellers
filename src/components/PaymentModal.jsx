import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'

export default function PaymentModal({ scheme, onClose }) {
  const { makePayment, goldRates, user } = useContext(AppContext)
  const [amount, setAmount] = useState(scheme.minAmount)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [autoPay, setAutoPay] = useState(false)
  const [processing, setProcessing] = useState(false)

  const goldRate = goldRates ? goldRates['22K'].price : 14350
  const goldGrams = (amount / goldRate).toFixed(4)

  useEffect(() => {
    if (user) {
      setName(user.name || '')
      setPhone(user.phone || '')
    }
  }, [user])

  const handlePay = () => {
    if (!name || !phone || amount < scheme.minAmount) return
    setProcessing(true)
    setTimeout(() => {
      makePayment(amount, scheme.name, autoPay)
      setProcessing(false)
      onClose()
    }, 1500)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{scheme.name} Scheme</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Payment Amount (₹) — Min ₹{scheme.minAmount.toLocaleString('en-IN')}</label>
            <input type="number" min={scheme.minAmount} step={100} value={amount} onChange={e => setAmount(Number(e.target.value))} />
          </div>
          <div className="gold-conversion">
            <p style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>You will receive</p>
            <div className="gold-grams">{goldGrams}g</div>
            <p>of 22K Gold at ₹{goldRate.toLocaleString('en-IN')}/gram</p>
            <p style={{ marginTop: 8, fontSize: 12, color: '#16a34a' }}>+ {scheme.bonus} bonus on maturity</p>
          </div>
          <div className="form-group" style={{ marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontWeight: 600 }}>
              <input type="checkbox" checked={autoPay} onChange={e => setAutoPay(e.target.checked)} style={{ width: 'auto' }} />
              🔄 Enable Auto-Pay (e-Mandate via UPI/Bank)
            </label>
            <span style={{ fontSize: 11, color: 'var(--text-light)', display: 'block', marginLeft: 22 }}>
              Automatically deduct ₹{amount.toLocaleString('en-IN')} every payment cycle. Uncheck anytime in Wallet.
            </span>
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <select>
              <option>UPI (Google Pay / PhonePe)</option>
              <option>Net Banking</option>
              <option>Debit / Credit Card</option>
              <option>Pay at Store</option>
            </select>
          </div>
          <button className="pay-btn" onClick={handlePay} disabled={processing || !name || !phone || amount < scheme.minAmount}>
            {processing ? '⏳ Processing...' : `Pay ₹${amount.toLocaleString('en-IN')} Now`}
          </button>
          <p style={{ fontSize: 11, color: '#aaa', textAlign: 'center', marginTop: 12 }}>
            Secured by 256-bit encryption • GST applicable • T&C apply
          </p>
        </div>
      </div>
    </div>
  )
}
