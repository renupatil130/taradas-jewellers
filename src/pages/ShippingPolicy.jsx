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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 22, marginBottom: 8 }}>Gold Savings Scheme</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Taradas Jewellers offers a Gold Savings Scheme through this application. Customers can redeem their accumulated savings for eligible jewellery purchases.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 22, marginBottom: 8 }}>Store Collection</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Jewellery purchased through the Gold Savings Scheme is generally available for collection from our showroom at <strong>Taradas Jewellers, #691/A1, Mandipete, Davangere – 577001, Karnataka, India</strong>.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 22, marginBottom: 8 }}>No Standard Shipping</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                We currently do not provide regular home delivery or shipping for jewellery purchased under the Gold Savings Scheme unless specifically agreed upon by our store.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 22, marginBottom: 8 }}>Collection Notification</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Customers will be notified when their jewellery is ready for collection.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 22, marginBottom: 8 }}>Identity Verification</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Customers may be required to present valid identification (such as Aadhaar Card, PAN Card, or Passport) or proof of purchase at the time of collection to ensure the security of their investment.
              </p>
            </div>

            <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--gold-light)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 20, marginBottom: 12 }}>Contact Us</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, margin: '0 0 12px 0' }}>
                For any questions regarding product collection or delivery, please contact us at:
              </p>
              <div style={{ fontWeight: 'bold', fontSize: 16 }}>
                📞 <a href="tel:+918123282144" style={{ color: 'var(--maroon)', textDecoration: 'underline' }}>+91 81232 82144</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
