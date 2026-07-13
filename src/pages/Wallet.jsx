import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { formatPrice } from '../data'

export default function Wallet() {
  const { wallet, user, setLoginModalOpen, goldRates, showToast } = useContext(AppContext)
  
  const goldRate = goldRates ? goldRates['22K'].price : 14350
  const goldValue = Math.round(wallet.goldGrams * goldRate)

  if (!user) {
    return (
      <div className="page-header" style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 16 }}>Please Login</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>You need to be logged in to view your gold wallet.</p>
        <button className="btn btn-gold" onClick={() => setLoginModalOpen(true)}>Login / Register</button>
      </div>
    )
  }

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(user.phone)
    showToast('Your referral code (phone number) copied!', 'success')
  }

  return (
    <>
      <div className="wallet-header">
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 8 }}>My Gold Wallet</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Track your gold savings, scheme progress, and transaction history</p>
          <div className="wallet-cards">
            <div className="wallet-stat">
              <div className="stat-label">Total Invested</div>
              <div className="stat-value">{formatPrice(wallet.balance)}</div>
            </div>
            <div className="wallet-stat">
              <div className="stat-label">Gold Balance</div>
              <div className="stat-value" style={{ color: 'var(--gold)' }}>{wallet.goldGrams}g</div>
            </div>
            <div className="wallet-stat">
              <div className="stat-label">Current Value (22K Gold)</div>
              <div className="stat-value">{formatPrice(goldValue)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          
          {/* MATURITY PROGRESS TRACKER */}
          <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 24, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--dark)', marginBottom: 20 }}>
              📈 Gold Schemes Maturity Progress
            </h2>
            
            {!wallet.activeSchemes || wallet.activeSchemes.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--text-light)' }}>
                <p style={{ fontSize: 14, marginBottom: 16 }}>No active schemes found.</p>
                <Link to="/schemes" className="btn btn-gold" style={{ fontSize: 12 }}>View Schemes</Link>
              </div>
            ) : (
              wallet.activeSchemes.map(s => {
                const percentage = Math.round((s.installmentsPaid / s.totalInstallments) * 100)
                const bonusText = s.name.toLowerCase().includes('monthly') ? '5% gold bonus' : s.name.toLowerCase().includes('weekly') ? '3% gold bonus' : s.name.toLowerCase().includes('daily') ? '2% gold bonus' : '7% gold bonus'
                return (
                  <div key={s.id} style={{ marginBottom: 24, borderBottom: '1px solid #f9f9f9', paddingBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <strong style={{ fontSize: 15, color: 'var(--maroon)' }}>{s.name}</strong>
                      <span style={{ fontSize: 12, color: 'var(--text-light)' }}>{s.installmentsPaid} of {s.totalInstallments} paid</span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: 10, background: '#eee', borderRadius: 5, overflow: 'hidden', marginBottom: 12 }}>
                      <div style={{ width: `${percentage}%`, height: '100%', background: 'linear-gradient(90deg, var(--gold), var(--gold-dark))', borderRadius: 5 }}></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
                      <span style={{ color: '#16a34a', fontWeight: 600 }}>🌟 {percentage}% Completed</span>
                      <span style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>Unlocks: {bonusText}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--cream)', padding: '8px 12px', borderRadius: 6, marginTop: 12, fontSize: 11 }}>
                      <span>Accumulated Gold: <strong>{s.goldAccumulated}g</strong></span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700, color: s.autoPay ? '#16a34a' : 'var(--text-light)' }}>
                        {s.autoPay ? '🔄 Auto-Pay: ON' : '⏸️ Auto-Pay: OFF'}
                      </span>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* REFERRAL PROGRAM DASHBOARD */}
          <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 24, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--dark)', marginBottom: 16 }}>
              🎁 Share & Earn Free Gold
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
              Invite your friends to secure their savings with Taradas Jewellers! Both you and your friend will receive <strong>₹500 worth of free Gold credits</strong> credited straight to your wallets upon their very first scheme installment payment.
            </p>

            <div style={{ border: '1px dashed var(--gold-dark)', background: 'var(--cream)', borderRadius: 8, padding: 16, textAlign: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-light)', display: 'block', marginBottom: 4 }}>
                YOUR REFERRAL CODE
              </span>
              <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--maroon)', letterSpacing: 2, marginBottom: 8 }}>
                {user.phone}
              </div>
              <button 
                onClick={handleCopyReferral}
                style={{ background: 'none', border: 'none', color: 'var(--gold-dark)', fontSize: 12, fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}
              >
                Copy Code / Phone
              </button>
            </div>

            <div style={{ fontSize: 11, color: 'var(--text-light)' }}>
              * There is no limit to how many friends you can invite. Purity backed by BIS Hallmark. T&C Apply.
            </div>
          </div>

        </div>
      </div>

      <section className="section" style={{ borderTop: '1px solid #eee' }}>
        <div className="container">
          <h2 style={{ fontSize: 24, marginBottom: 24, fontFamily: 'var(--font-display)' }}>Transaction History</h2>
          {wallet.transactions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-light)' }}>
              <p>No transactions yet.</p>
              <Link to="/schemes" className="btn btn-gold" style={{ marginTop: 16 }}>View Schemes →</Link>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="tx-table">
                <thead><tr><th>Date</th><th>Scheme</th><th>Amount</th><th>Gold</th><th>Status</th></tr></thead>
                <tbody>
                  {wallet.transactions.map(tx => (
                    <tr key={tx.id}>
                      <td>{new Date(tx.date).toLocaleDateString('en-IN')}</td>
                      <td>{tx.scheme}</td>
                      <td className="tx-amount">{formatPrice(tx.amount)}</td>
                      <td style={{ color: '#16a34a', fontWeight: 600 }}>+{tx.goldGrams}g</td>
                      <td><span style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 12px', borderRadius: 50, fontSize: 12 }}>✓ Success</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
