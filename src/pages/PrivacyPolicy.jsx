import { Shield } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <header className="page-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: 16, background: 'rgba(198,153,62,0.1)', borderRadius: '50%', marginBottom: 16 }}>
            <Shield size={36} style={{ color: 'var(--gold)' }} />
          </div>
          <h1>Privacy Policy</h1>
          <p style={{ color: 'var(--text-light)', marginTop: 8 }}>Last Updated: July 2026</p>
        </div>
      </header>
      
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>1. Information Collection</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                We collect customer information such as name, contact details, address, customer ID, and scheme-related information to provide and manage our services effectively.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>2. Use of Information</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Your information is used to manage your gold/silver savings scheme, process payments, provide timely customer support, and send service-related notifications.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>3. Payment Security</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                All online payments are securely processed through authorized payment gateway partners. We do not store your card details, UPI PIN, or banking passwords. Your transactions are completely safe and encrypted.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>4. Data Protection</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                We implement reasonable and robust security measures to protect your personal information from unauthorized access, misuse, disclosure, alteration, or destruction.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>5. Third-Party Services</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                We may share limited information with trusted service providers, such as payment gateways, only when absolutely necessary to provide our services and facilitate transactions.
              </p>
            </div>

            <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--gold-light)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 20, marginBottom: 12 }}>6. Contact Us</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                If you have any questions regarding this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <div style={{ marginTop: 12, fontWeight: 'bold', fontSize: 16 }}>
                📞 <a href="tel:+918123282144" style={{ color: 'var(--maroon)', textDecoration: 'underline' }}>+91 81232 82144</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
