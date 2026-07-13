import { FileText } from 'lucide-react'

export default function TermsConditions() {
  return (
    <div className="policy-page">
      <header className="page-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: 16, background: 'rgba(198,153,62,0.1)', borderRadius: '50%', marginBottom: 16 }}>
            <FileText size={36} style={{ color: 'var(--gold)' }} />
          </div>
          <h1>Terms & Conditions</h1>
          <p style={{ color: 'var(--text-light)', marginTop: 8 }}>Last Updated: July 2026</p>
        </div>
      </header>
      
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>1. Acceptance of Terms</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                By registering, accessing, and using this application, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the application or enroll in any schemes.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>2. Scheme Participation</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Customers are solely responsible for providing complete and accurate information while enrolling in any gold or silver savings scheme. Any discrepancies in identity or bank details must be reported immediately.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>3. Payment Responsibility</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Customers must make timely installment payments according to their selected scheme schedule (daily, weekly, or monthly). Failure to make payments on time may affect completion bonuses or scheme maturity timelines as per scheme-specific rules.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>4. Gold/Silver Purchase</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                The accumulated scheme amount can only be used to purchase gold, silver, or other eligible precious metals and jewellery available at our physical store (Taradas Jewellers, Davangere).
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>5. No Cash Redemption</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                Under no circumstances can the scheme amount be withdrawn as cash, refunded in cash, or transferred to another person, unless explicitly permitted under applicable laws.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 24, marginBottom: 12 }}>6. Modification of Terms</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the application after changes are posted constitutes your binding acceptance of the revised terms.
              </p>
            </div>

            <div style={{ background: 'var(--cream)', padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--gold-light)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: 20, marginBottom: 12 }}>Need Support?</h2>
              <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8 }}>
                If you have any questions regarding these Terms & Conditions, please contact our support desk:
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
