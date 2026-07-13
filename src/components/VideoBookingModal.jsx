import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'

export default function VideoBookingModal({ product, onClose }) {
  const { user, showToast } = useContext(AppContext)
  
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('11:00')
  const [platform, setPlatform] = useState('Zoom')
  const [bookingSuccess, setBookingSuccess] = useState(false)

  useEffect(() => {
    if (user) {
      setName(user.name || '')
      setPhone(user.phone || '')
    }
  }, [user])

  const handleBook = (e) => {
    e.preventDefault()
    if (!name || !phone || !date || !time) {
      showToast('Please fill all booking details', 'error')
      return
    }

    setBookingSuccess(true)
    showToast('Video consultation scheduled successfully!', 'success')
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 450 }}>
        <div className="modal-header">
          <h2>📹 Bridal Video Consultation</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body" style={{ padding: '24px 32px' }}>
          {!bookingSuccess ? (
            <form onSubmit={handleBook}>
              <p style={{ color: 'var(--text-light)', fontSize: 13, marginBottom: 20 }}>
                Schedule a private, high-definition virtual showroom call with our chief jewelry stylist to view details of the <strong>{product.name}</strong>.
              </p>

              <div className="form-group" style={{ marginBottom: 12 }}>
                <label>Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div className="form-group" style={{ marginBottom: 12 }}>
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                  placeholder="Enter 10-digit mobile number" 
                  required 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div className="form-group">
                  <label>Select Date</label>
                  <input 
                    type="date" 
                    value={date} 
                    onChange={e => setDate(e.target.value)} 
                    min={new Date().toISOString().split('T')[0]}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Select Time</label>
                  <input 
                    type="time" 
                    value={time} 
                    onChange={e => setTime(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 20 }}>
                <label>Preferred Video Platform</label>
                <select value={platform} onChange={e => setPlatform(e.target.value)}>
                  <option value="Zoom">Zoom Meeting</option>
                  <option value="Google Meet">Google Meet</option>
                  <option value="WhatsApp Video">WhatsApp Video Call</option>
                </select>
              </div>

              <button type="submit" className="pay-btn">
                Confirm VIP Booking
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', marginBottom: 8 }}>VIP Appointment Booked</h3>
              <p style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 20 }}>
                Your private viewing for <strong>{product.name}</strong> is scheduled on <strong>{new Date(date).toLocaleDateString('en-IN')}</strong> at <strong>{time}</strong> via <strong>{platform}</strong>.
              </p>
              <div style={{ padding: '12px 16px', background: 'var(--cream)', borderRadius: 8, border: '1px solid #efe3cb', marginBottom: 24, fontSize: 13, wordBreak: 'break-all' }}>
                <strong>{platform} Invitation Link:</strong><br />
                <span style={{ color: 'var(--gold-dark)', textDecoration: 'underline', cursor: 'pointer' }}>
                  {platform === 'Zoom' ? 'https://zoom.us/j/459200320' : platform === 'Google Meet' ? 'https://meet.google.com/tar-adas-jew' : `https://wa.me/910000000000?text=VIP Booking Confirmation`}
                </span>
              </div>
              <button className="btn btn-gold" onClick={onClose} style={{ width: '100%' }}>
                Awesome, Thank You!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
