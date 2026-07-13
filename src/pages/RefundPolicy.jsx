import { RefreshCcw } from 'lucide-react'

export default function RefundPolicy() {
  return (
    <div className="policy-page">
      <header className="page-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: 16, background: 'rgba(198,153,62,0.1)', borderRadius: '50%', marginBottom: 16 }}>
            <RefreshCcw size={36} style={{ color: 'var(--gold)' }} />
          </div>
          <h1>Refund & Cancellation Policy</h1>
          <p style={{ color: 'var(--text-light)', marginTop: 8 }}>Last Updated: July 2026</p>
        </div>
      </header>
      
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>1. No Refund Policy</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                All payments made towards any savings scheme are non-refundable, except where a refund is strictly required under applicable local laws.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>2. No Cash Return</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Once an installment has been paid, the deposited amount cannot be returned, exchanged, or refunded in cash.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>3. Redemption of Scheme Amount</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                The accumulated scheme amount can only be redeemed for the purchase of BIS hallmarked gold, silver, or other eligible precious metals and jewellery available at our showroom.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>4. Cancellation</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Customers may request to discontinue participation in the savings scheme at any point. However, previously paid installments will not be refunded and will remain available only for eligible showroom purchases, subject to the overall scheme rules and duration guidelines.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>5. Payment Errors</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                In the event of duplicate or incorrect payments caused by a technical issue or gateway error, please reach out to customer support immediately. Verified payment errors will be resolved and handled in accordance with applicable laws and our payment gateway partners' policies.
              </p>
            </div>

            <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--gold-light)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 20, marginBottom: 12 }}>6. Support</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                For any questions regarding payments, cancellations, or your savings scheme, please contact us or visit our store during business hours:
              </p>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8, fontWeight: 'bold', fontSize: 16 }}>
                <div>📞 <a href="tel:+918123282144" style={{ color: 'var(--maroon)', textDecoration: 'underline' }}>+91 81232 82144</a></div>
                <div style={{ fontSize: 14, fontWeight: 'normal', color: 'var(--text-light)' }}>📍 Taradas Jewellers showroom, Mandipete, Davangere.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
