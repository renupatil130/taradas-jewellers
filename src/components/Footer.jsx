import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <div className="footer-brand">
            <h3>Taradas Jewellers</h3>
            <p>Trusted jewellers in Davangere since 1965. Offering the finest gold, diamond, and precious stone jewellery with BIS hallmark guarantee and transparent pricing.</p>
            <p style={{ marginTop: 12 }}>📍 #691/A1, Mandipete, Davangere – 577001, Karnataka</p>
            <p>📞 <a href="tel:+918123282144" style={{ color: 'var(--gold-light)' }}>+91 81232 82144</a></p>
            <p>✉️ <a href="mailto:info@taradasjewellers.com" style={{ color: 'var(--gold-light)' }}>info@taradasjewellers.com</a></p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Policies</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund & Cancellation</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Taradas Jewellers, Davangere. All rights reserved. | BIS Hallmark Certified | GST: 29XXXXX1234X1Z5</p>
        </div>
      </div>
    </footer>
  )
}
