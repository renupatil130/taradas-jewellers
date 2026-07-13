import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { SCHEMES } from '../data'
import PaymentModal from '../components/PaymentModal'

export default function SchemesPage() {
  const { user, setLoginModalOpen } = useContext(AppContext)
  const [activeScheme, setActiveScheme] = useState(null)

  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(135deg, #1a0a00, #2d1810)', color: '#fff', borderBottom: 'none' }}>
        <h1 style={{ color: 'var(--gold)' }}>Gold Savings Schemes</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Invest in gold systematically. Choose a plan that suits your budget.</p>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <div className="gold-line"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, maxWidth: 900, margin: '0 auto' }}>
            {[
              { step: '01', title: 'Choose a Plan', desc: 'Select daily, weekly, monthly, or quarterly' },
              { step: '02', title: 'Make Payment', desc: 'Pay online via UPI, card, or at store' },
              { step: '03', title: 'Get Gold Credits', desc: 'Gold grams credited at current market rate' },
              { step: '04', title: 'Redeem + Bonus', desc: 'Buy jewellery with accumulated gold + bonus' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 24 }}>

                <div style={{ fontSize: 11, color: 'var(--gold-dark)', fontWeight: 700, marginBottom: 4, letterSpacing: 2 }}>STEP {s.step}</div>
                <h3 style={{ fontSize: 16, marginBottom: 8, fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-light)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEME CARDS */}
      <section className="section schemes">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Scheme</h2>
            <p>All schemes include BIS hallmark guarantee and transparent gold rate pricing</p>
            <div className="gold-line" style={{ background: 'linear-gradient(90deg, var(--gold), var(--gold-light))' }}></div>
          </div>
          <div className="schemes-grid">
            {SCHEMES.map(s => (
              <div className="scheme-card" key={s.id}>

                <h3>{s.name}</h3>
                <div className="scheme-freq">{s.frequency} • {s.duration}</div>
                <p>{s.description}</p>
                <ul>{s.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: 24, fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>{s.bonus}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginLeft: 8 }}>bonus gold</span>
                </div>
                <button className="scheme-btn" onClick={() => user ? setActiveScheme(s) : setLoginModalOpen(true)}>
                  Start {s.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEME PARAMETERS & PRICING DETAILS */}
      <section className="section" style={{ background: 'var(--gray)', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 40 }}>
            <h2>Scheme Pricing & Terms</h2>
            <p>Full breakdown of installment amounts, durations, maturity, and redemption guidelines for compliance.</p>
            <div className="gold-line"></div>
          </div>
          
          <div style={{ background: 'var(--white)', padding: 32, borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow)', maxWidth: 900, margin: '0 auto' }}>
            <div className="table-responsive" style={{ overflowX: 'auto', marginBottom: 32 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 600 }}>
                <thead>
                  <tr style={{ background: 'var(--maroon)', color: 'var(--white)', borderBottom: '2px solid var(--gold)' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>Scheme Name</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>Installment Amount</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>No. of Installments</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>Duration</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>Maturity Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Daily Gold Savings', amt: 'Min ₹100 / day', count: '365 installments', duration: '365 days', bonus: '2% free gold weight credit' },
                    { name: 'Weekly Gold Savings', amt: 'Min ₹500 / week', count: '52 installments', duration: '52 weeks', bonus: '3% free gold weight credit' },
                    { name: 'Monthly Gold Savings', amt: 'Min ₹1,000 / month', count: '11 installments', duration: '11 months', bonus: '5% free gold weight credit' },
                    { name: 'Quarterly Gold Savings', amt: 'Min ₹5,000 / quarter', count: '4 installments', duration: '1 year (4 quarters)', bonus: '7% free gold weight credit' },
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #eee', background: idx % 2 === 0 ? '#fafaf9' : 'var(--white)' }}>
                      <td style={{ padding: 16, fontWeight: 'bold', color: 'var(--maroon)' }}>{row.name}</td>
                      <td style={{ padding: 16 }}>{row.amt}</td>
                      <td style={{ padding: 16 }}>{row.count}</td>
                      <td style={{ padding: 16 }}>{row.duration}</td>
                      <td style={{ padding: 16, color: 'var(--gold-dark)', fontWeight: 600 }}>{row.bonus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div>
                <h4 style={{ color: 'var(--maroon)', fontFamily: 'var(--font-display)', marginBottom: 8, fontSize: 16 }}>1. Gold Rate Calculation</h4>
                <p style={{ color: 'var(--text-light)', fontSize: 13.5, lineHeight: 1.6 }}>
                  Gold rates are locked on the <strong>payment date</strong> of each installment. When you pay, the current day's prevailing 22K gold rate is used to calculate the gold weight (grams) which is immediately credited to your digital wallet. This protects you from future price fluctuations.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--maroon)', fontFamily: 'var(--font-display)', marginBottom: 8, fontSize: 16 }}>2. Redemption Process</h4>
                <p style={{ color: 'var(--text-light)', fontSize: 13.5, lineHeight: 1.6 }}>
                  Accumulated scheme weight or wallet amount must be redeemed to purchase eligible physical gold, silver, or precious-metal jewellery. Redemption is performed in-person at our physical store: <strong>Taradas Jewellers, #691/A1, Mandipete, Davangere, Karnataka</strong>. Cash withdrawals or cash payouts are not permitted.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--maroon)', fontFamily: 'var(--font-display)', marginBottom: 8, fontSize: 16 }}>3. Maturity & Bonuses</h4>
                <p style={{ color: 'var(--text-light)', fontSize: 13.5, lineHeight: 1.6 }}>
                  Upon successful payment of all installments over the designated scheme duration, the scheme matures. The customer can redeem the total accumulated gold grams plus the corresponding maturity bonus (up to 7%) for eligible jewellery.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--maroon)', fontFamily: 'var(--font-display)', marginBottom: 8, fontSize: 16 }}>4. Making Charges, Taxes & Deductions</h4>
                <p style={{ color: 'var(--text-light)', fontSize: 13.5, lineHeight: 1.6 }}>
                  Standard GST of 3% is applicable on redemption as per government regulations. Select schemes offer <strong>Zero making charges (up to 15-20%)</strong>. There are absolutely <strong>no enrollment fees, no processing deductions, and no hidden administrative charges</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="gold-line"></div>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {[
              { q: 'How is gold credited to my wallet?', a: 'When you make a payment, gold grams are calculated at the current day\'s 22K gold rate and credited to your digital wallet instantly. Your gold weight is locked to protect you from price increases.' },
              { q: 'Can I withdraw my gold as cash?', a: 'No, cash withdrawal or cash payouts are not permitted. The scheme is designed for jewellery purchase. On maturity, you can use your accumulated gold weight and maturity bonus to buy physical gold, silver, or diamond jewellery at our Davangere showroom.' },
              { q: 'What happens if I miss a payment?', a: 'You can continue the scheme without penalty. However, bonus gold is only applicable on fully completed schemes where all installments were paid successfully.' },
              { q: 'Are there any making charges, taxes, or enrollment deductions?', a: 'There are no enrollment fees or hidden deductions. GST (currently 3%) is applicable on the final purchase value during redemption at the store. Select schemes offer zero making charges up to 15% or 20% on selected showroom designs.' },
              { q: 'How do I redeem my accumulated scheme value?', a: 'Redemption is facilitated in-person at our secure showroom located at #691/A1, Mandipete, Davangere, Karnataka. Please bring your registered mobile number (for OTP verification) and a valid government ID for verification.' },
            ].map((f, i) => (
              <details key={i} style={{ borderBottom: '1px solid #eee', padding: '16px 0' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 15, color: 'var(--dark)' }}>{f.q}</summary>
                <p style={{ marginTop: 12, fontSize: 14, color: 'var(--text-light)', lineHeight: 1.7 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {activeScheme && <PaymentModal scheme={activeScheme} onClose={() => setActiveScheme(null)} />}
    </>
  )
}
