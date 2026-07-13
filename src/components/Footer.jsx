import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <div className="footer-brand">
            <h3>Taradas Jewellers</h3>
            <p>Trusted jewellers in Davangere since 1965. Offering the finest gold, diamond, and precious stone jewellery with BIS hallmark guarantee and transparent pricing.</p>
            <p style={{ marginTop: 12 }}>📍 #691/A1, Mandipete, Davangere – 577001, Karnataka, India</p>
            <p>📞 <a href="tel:+918123282144" style={{ color: 'var(--gold-light)' }}>+91 81232 82144</a></p>
            <p>✉️ <a href="mailto:info@taradasjewellers.com" style={{ color: 'var(--gold-light)' }}>info@taradasjewellers.com</a></p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>🕒 Support Hours: Mon – Sat, 10:00 AM – 9:00 PM (IST)</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/schemes">Gold Schemes</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Policies</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund & Cancellation</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, marginTop: 20 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 16px', fontSize: 13, color: 'var(--text-light)', marginBottom: 4 }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link to="/terms-and-conditions" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms & Conditions</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link to="/refund-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Refund & Cancellation Policy</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link to="/shipping-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Shipping Policy</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact Us</Link>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
            © 2026 Taradas Jewellers, Davangere. All rights reserved. | BIS Hallmark Certified | GST: 29XXXXX1234X1Z5
          </p>
        </div>
      </div>
    </footer>
  )
}
