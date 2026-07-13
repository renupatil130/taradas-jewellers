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
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>1. Scheme Installment Refunds</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Payments made toward the jewellery purchase scheme are generally non-refundable and cannot be withdrawn as cash. The accumulated amount must be redeemed toward the purchase of eligible gold, silver, or other precious-metal products from Taradas Jewellers showroom in Davangere, Karnataka.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>2. Technical and Gateway Refunds</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                In the case of duplicate payments, failed transactions, incorrect debits, or payment failures caused by technical glitches on the application or payment gateway, refunds will be initiated. All such technical refund requests will be processed after thorough verification with our payment gateway partner.
              </p>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, marginTop: 8 }}>
                Once verified, eligible technical refunds will be credited back to the customer's original payment source (bank account, credit/debit card, or UPI ID) within <strong>5–7 business days</strong>.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>3. Redemption of Accumulated Gold/Silver</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                All savings scheme accounts are intended for physical gold and silver redemption upon scheme completion. Customers can choose physical items (jewellery, bars, coins, ornaments) directly from our showroom: <strong>Taradas Jewellers, #691/A1, Mandipete, Davangere, Karnataka</strong>. Under no circumstances can these gold/silver grams or accumulated scheme deposits be converted into physical cash or currency notes.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>4. Scheme Discontinuation / Cancellation</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                If a customer chooses to discontinue their savings scheme before maturity, they will not receive any cash refund. Instead, the total amount paid until discontinuation will be held in the customer's account and can be redeemed for eligible gold/silver jewellery at our showroom once the scheme duration ends, subject to the applicable scheme rules. No maturity bonuses will be credited on discontinued schemes.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>5. Exceptions and Legal Compliance</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Any refunds required under applicable consumer protection laws, judicial orders, or regulatory mandates will be processed after verification in accordance with the specified legal timelines and guidelines.
              </p>
            </div>

            <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--gold-light)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 20, marginBottom: 12 }}>6. Contact & Support</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                For any questions regarding payments, refunds, duplicate transactions, or scheme cancellations, please reach out to our team:
              </p>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8, fontWeight: 'bold', fontSize: 16 }}>
                <div>📞 Phone: <a href="tel:+918123282144" style={{ color: 'var(--maroon)', textDecoration: 'underline' }}>+91 81232 82144</a></div>
                <div>✉️ Email: <a href="mailto:info@taradasjewellers.com" style={{ color: 'var(--maroon)', textDecoration: 'underline' }}>info@taradasjewellers.com</a></div>
                <div style={{ fontSize: 14, fontWeight: 'normal', color: 'var(--text-light)', marginTop: 4 }}>📍 Showroom: Taradas Jewellers, Mandipete, Davangere, Karnataka.</div>
                <div style={{ fontSize: 14, fontWeight: 'normal', color: 'var(--text-light)' }}>🕒 Support Hours: Mon – Sat, 10:00 AM – 9:00 PM (IST).</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
