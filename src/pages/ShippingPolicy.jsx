import { Truck } from 'lucide-react'

export default function ShippingPolicy() {
  return (
    <div className="policy-page">
      <header className="page-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: 16, background: 'rgba(198,153,62,0.1)', borderRadius: '50%', marginBottom: 16 }}>
            <Truck size={36} style={{ color: 'var(--gold)' }} />
          </div>
          <h1>Shipping Policy</h1>
          <p style={{ color: 'var(--text-light)', marginTop: 8 }}>Effective Date: July 14, 2026</p>
        </div>
      </header>
      
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 15, lineHeight: 1.8, color: 'var(--text)' }}>
            
            <p>
              Taradas Jewellers primarily offers a Gold Savings Scheme through this application.
            </p>

            <p>
              Jewellery purchased using the accumulated scheme amount is generally collected from our physical store located at: <br />
              <strong>Taradas Jewellers, #691/A1, Mandipete, Davangere – 577001, Karnataka, India</strong>.
            </p>

            <p>
              We currently do not offer shipping or home delivery for jewellery purchased through the Gold Savings Scheme unless specifically communicated by our store.
            </p>

            <p>
              Customers will be informed when their order is ready for pickup. To ensure the security of your high-value assets, please bring a valid government-issued photo ID (such as an Aadhaar Card or PAN Card) and your registered mobile device for OTP verification upon collection.
            </p>

            <p>
              Any future delivery services, if introduced, will be communicated separately and may be subject to additional terms.
            </p>

            <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--gold-light)', marginTop: 16 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 20, marginBottom: 12 }}>Questions About Product Collection?</h2>
              <p style={{ margin: 0 }}>
                For any questions regarding product collection, please contact us at:
              </p>
              <div style={{ marginTop: 12, fontWeight: 'bold', fontSize: 16 }}>
                📞 <a href="tel:+918123282144" style={{ color: 'var(--maroon)', textDecoration: 'underline' }}>+91 81232 82144</a>
              </div>
              <div style={{ marginTop: 8, fontSize: 14, color: 'var(--text-light)', fontWeight: 'normal' }}>
                ✉️ Support Email: <a href="mailto:info@taradasjewellers.com" style={{ color: 'var(--maroon)' }}>info@taradasjewellers.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
