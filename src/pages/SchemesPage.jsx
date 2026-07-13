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

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="gold-line"></div>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {[
              { q: 'How is gold credited to my wallet?', a: 'When you make a payment, gold grams are calculated at the current day\'s 22K gold rate and credited to your digital wallet instantly.' },
              { q: 'Can I withdraw my gold as cash?', a: 'The scheme is designed for jewellery purchase. On maturity, you can use your accumulated gold + bonus to buy jewellery at zero or reduced making charges.' },
              { q: 'What happens if I miss a payment?', a: 'You can continue the scheme without penalty. However, bonus gold is only applicable on fully completed schemes.' },
              { q: 'Is my investment safe?', a: 'Yes. All payments are recorded digitally and your gold credits are backed by physical gold reserves at Taradas Jewellers.' },
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
