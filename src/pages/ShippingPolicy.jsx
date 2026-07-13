import { Truck } from 'lucide-react'

export default function ShippingPolicy() {
  return (
    <div className="policy-page">
      <header className="page-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: 16, background: 'rgba(198,153,62,0.1)', borderRadius: '50%', marginBottom: 16 }}>
            <Truck size={36} style={{ color: 'var(--gold)' }} />
          </div>
          <h1>Shipping & Collection Policy</h1>
          <p style={{ color: 'var(--text-light)', marginTop: 8 }}>Last Updated: July 2026</p>
        </div>
      </header>
      
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>1. In-Store Collection Only</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                All savings schemes (gold/silver) run by Taradas Jewellers are designed for in-store redemption. Upon scheme maturity, the accumulated gold grams or amount can only be redeemed by selecting physical items directly at our showroom: <strong>Taradas Jewellers, #691/A1, Mandipete, Davangere, Karnataka</strong>.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>2. Verification Requirements</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                To ensure the safety of your investment and prevent unauthorized collections, the registered account holder must be physically present at the time of redemption. The customer must provide:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: 20, color: 'var(--text)', fontSize: 15, lineHeight: 1.8, marginTop: 8 }}>
                <li>A valid government-issued photo ID (e.g. Aadhaar Card, PAN Card, or Passport).</li>
                <li>The registered Customer ID or Passbook details in our App/System.</li>
                <li>OTP verification sent to the registered mobile number.</li>
              </ul>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>3. No Postal or Courier Delivery</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Due to the high value and security risks associated with precious metals (Gold & Silver), we do not offer home delivery, postal dispatch, or courier shipping for purchases made using the gold savings scheme. We prioritize your security by facilitating handovers exclusively in our secured store environment.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>4. Special Delivery Arrangements</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Under exceptional circumstances or custom retail purchases (outside standard savings schemes), home delivery may be facilitated through licensed, transit-insured secure courier partners. Such shipments will be subject to shipping charges, insurance costs, and state-specific regulatory compliance, and must be pre-approved in writing by the store management.
              </p>
            </div>

            <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--gold-light)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 20, marginBottom: 12 }}>Questions About Collection?</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                If you wish to clarify the collection process or request special arrangements, please contact us:
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
