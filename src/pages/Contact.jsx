import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Gold Savings Scheme', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API request
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: 'Gold Savings Scheme', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div className="contact-page">
      <header className="page-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: 16, background: 'rgba(198,153,62,0.1)', borderRadius: '50%', marginBottom: 16 }}>
            <Mail size={36} style={{ color: 'var(--gold)' }} />
          </div>
          <h1>Contact Us</h1>
          <p style={{ color: 'var(--text-light)', marginTop: 8, maxWidth: 600, margin: '8px auto 0' }}>
            Thank you for choosing Taradas Jewellers. If you have any questions regarding our Gold Savings Scheme, payments, or purchases, please feel free to contact us.
          </p>
        </div>
      </header>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'start' }}>
            
            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 28, marginBottom: 12 }}>Taradas Jewellers</h2>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Davangere's trusted destination for pure gold, silver, and precious jewellery. Visit our showroom or get in touch with our support representatives for help regarding our gold savings schemes.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 12 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 8, background: 'var(--cream)', color: 'var(--maroon)', border: '1px solid var(--gold-light)', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-light)' }}>Phone</h4>
                    <a href="tel:+918123282144" style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--maroon)', display: 'block', marginTop: 4 }}>+91 81232 82144</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 8, background: 'var(--cream)', color: 'var(--maroon)', border: '1px solid var(--gold-light)', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-light)' }}>Email</h4>
                    <a href="mailto:info@taradasjewellers.com" style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--text)', display: 'block', marginTop: 4 }}>info@taradasjewellers.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 8, background: 'var(--cream)', color: 'var(--maroon)', border: '1px solid var(--gold-light)', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-light)' }}>Support Hours</h4>
                    <p style={{ fontSize: 15, color: 'var(--text)', fontWeight: '600', marginTop: 4 }}>Monday – Saturday</p>
                    <p style={{ fontSize: 13, color: 'var(--text-light)' }}>10:00 AM – 9:00 PM (IST)</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 8, background: 'var(--cream)', color: 'var(--maroon)', border: '1px solid var(--gold-light)', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-light)' }}>Showroom Address</h4>
                    <p style={{ fontSize: 15, color: 'var(--text)', fontWeight: '600', marginTop: 4 }}>Taradas Jewellers</p>
                    <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.6 }}>
                      #691/A1, Mandipete,<br />
                      Davangere – 577001,<br />
                      Karnataka, India.
                    </p>
                    <a 
                      href="https://share.google/ZS97dlaQ14roKS7kk" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--maroon)', textDecoration: 'underline', fontWeight: 'bold', fontSize: 13, display: 'inline-block', marginTop: 6 }}
                    >
                      Get Directions ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: 'var(--gray)', padding: 32, borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontSize: 22, marginBottom: 20 }}>Send Us a Message</h3>
              
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '24px 0', gap: 12 }}>
                  <CheckCircle size={48} style={{ color: '#22c55e' }} />
                  <h4 style={{ fontSize: 18, color: 'var(--dark)' }}>Message Sent Successfully!</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-light)' }}>We will get back to you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="contact-name">Full Name</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      required
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label htmlFor="contact-email">Email Address</label>
                      <input 
                        id="contact-email"
                        type="email" 
                        required
                        placeholder="yourname@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input 
                        id="contact-phone"
                        type="tel" 
                        required
                        placeholder="10-digit mobile number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="contact-subject">Topic/Subject</label>
                    <select 
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="Gold Savings Scheme">Gold Savings Scheme</option>
                      <option value="Payment Issue">Payment Issue</option>
                      <option value="Showroom Query">Showroom Query</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor="contact-message">Your Message</label>
                    <textarea 
                      id="contact-message"
                      required
                      rows="4"
                      placeholder="Type your message here..."
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 8, fontSize: 14, fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="pay-btn" 
                    disabled={loading}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 14 }}
                  >
                    {loading ? 'Sending...' : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Interactive Map Section */}
          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--dark)', marginBottom: 20, textAlign: 'center' }}>Find Our Showroom</h3>
            <div style={{ position: 'relative', width: '100%', height: 400, borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow)', marginBottom: 20 }}>
              {/* Map embed placeholder with high quality design details */}
              <iframe 
                title="Taradas Jewellers Davangere Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.0722370725514!2d75.92211607590214!3d14.470404480020163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb8ac8027732a3%3A0xe5a3637e1b7121b6!2sMandipet%2C%20Davangeri%2C%20Davangere%2C%20Karnataka%20577001!5e0!3m2!1sen!2sin!4v1720914600000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a 
              href="https://share.google/ZS97dlaQ14roKS7kk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold"
              style={{ display: 'inline-flex', padding: '12px 28px', fontSize: 14, borderRadius: 8, fontWeight: 'bold' }}
            >
              🗺️ Open in Google Maps
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
