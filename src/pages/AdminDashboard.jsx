import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { formatPrice } from '../data'

export default function AdminDashboard() {
  const { goldRates, updateGoldRate, user, setLoginModalOpen, showToast } = useContext(AppContext)
  
  // Custom states for rates forms
  const [ratesForm, setRatesForm] = useState({
    '22K': { price: 0, change: 0 },
    '24K': { price: 0, change: 0 },
    '18K': { price: 0, change: 0 },
    'Silver': { price: 0, change: 0 }
  })

  // Load CRM Users
  const [crmUsers, setCrmUsers] = useState([])
  const [filterMissed, setFilterMissed] = useState(false)

  useEffect(() => {
    if (goldRates) {
      setRatesForm({
        '22K': { price: goldRates['22K'].price, change: goldRates['22K'].change },
        '24K': { price: goldRates['24K'].price, change: goldRates['24K'].change },
        '18K': { price: goldRates['18K'].price, change: goldRates['18K'].change },
        'Silver': { price: goldRates['Silver'].price, change: goldRates['Silver'].change }
      })
    }
  }, [goldRates])

  useEffect(() => {
    // Generate simulated customer scheme data if not exists, and merge with mock DB
    const db = JSON.parse(localStorage.getItem('tj_users_db') || '{}')
    
    // Ensure some mock users exist for CRM demo
    const mockDbKeys = Object.keys(db)
    if (mockDbKeys.length < 3) {
      const mockUsers = {
        '9876543210': { phone: '9876543210', pin: '1234', name: 'Ramesh Kumar', email: 'ramesh@gmail.com', address: 'Davangere, Karnataka' },
        '8765432109': { phone: '8765432109', pin: '4321', name: 'Priya Sharma', email: 'priya@outlook.com', address: 'Harihar, Karnataka' },
        '7654321098': { phone: '7654321098', pin: '1111', name: 'Anil Gowda', email: 'anil.g@yahoo.com', address: 'Channagiri, Karnataka' }
      }
      Object.assign(db, mockUsers)
      localStorage.setItem('tj_users_db', JSON.stringify(db))
    }

    // Load active wallets of these users to check scheme status
    const crmData = Object.values(db).map(u => {
      const wSaved = localStorage.getItem(`tj_wallet_${u.phone}`)
      const w = wSaved ? JSON.parse(wSaved) : { balance: 0, goldGrams: 0, transactions: [], activeSchemes: [] }
      
      // Seed some active schemes if none exist for mock users
      if (u.phone !== '0000000000' && (!w.activeSchemes || w.activeSchemes.length === 0)) {
        const seedSchemes = {
          '9876543210': [{ id: 101, name: 'Monthly Gold', installmentsPaid: 8, totalInstallments: 11, totalPaid: 8000, goldAccumulated: 0.557, autoPay: true, startDate: new Date(Date.now() - 240 * 24 * 3600 * 1000).toISOString(), status: 'Active' }],
          '8765432109': [{ id: 102, name: 'Weekly Gold', installmentsPaid: 12, totalInstallments: 52, totalPaid: 6000, goldAccumulated: 0.418, autoPay: false, startDate: new Date(Date.now() - 84 * 24 * 3600 * 1000).toISOString(), status: 'Missed Payment' }],
          '7654321098': [{ id: 103, name: 'Daily Gold', installmentsPaid: 45, totalInstallments: 365, totalPaid: 4500, goldAccumulated: 0.313, autoPay: false, startDate: new Date(Date.now() - 45 * 24 * 3600 * 1000).toISOString(), status: 'Active' }]
        }
        w.activeSchemes = seedSchemes[u.phone] || []
        // Save back
        localStorage.setItem(`tj_wallet_${u.phone}`, JSON.stringify(w))
      }

      return {
        ...u,
        wallet: w
      }
    })

    setCrmUsers(crmData.filter(cu => cu.phone !== '0000000000'))
  }, [])

  const handleRateUpdate = (key) => {
    updateGoldRate(key, ratesForm[key].price, ratesForm[key].change)
  }

  const toggleCrmSchemeStatus = (phone, schemeId) => {
    // Update CRM Status simulating customer engagement
    const wSaved = localStorage.getItem(`tj_wallet_${phone}`)
    if (wSaved) {
      const w = JSON.parse(wSaved)
      w.activeSchemes = w.activeSchemes.map(s => {
        if (s.id === schemeId) {
          const nextStatus = s.status === 'Missed Payment' ? 'Active' : 'Missed Payment'
          showToast(`Customer status updated to ${nextStatus}`, 'info')
          return { ...s, status: nextStatus }
        }
        return s
      })
      localStorage.setItem(`tj_wallet_${phone}`, JSON.stringify(w))
      
      // Reload CRM state
      setCrmUsers(prev => prev.map(cu => {
        if (cu.phone === phone) {
          return { ...cu, wallet: w }
        }
        return cu
      }))
    }
  }

  // Check simple Admin authentication
  const isAdmin = user && user.phone === '0000000000'

  if (!isAdmin) {
    return (
      <div className="page-header" style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 16 }}>Admin Dashboard Access</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: 24, maxWidth: 450 }}>
          This page is locked for showroom management. Please log in using the official Store Owner phone number (+91 0000000000) and PIN to proceed.
        </p>
        <button className="btn btn-gold" onClick={() => setLoginModalOpen(true)}>Admin Login</button>
      </div>
    )
  }

  const filteredCrmUsers = filterMissed
    ? crmUsers.filter(u => u.wallet.activeSchemes.some(s => s.status === 'Missed Payment'))
    : crmUsers

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', paddingBottom: 20, marginBottom: 40 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)' }}>Showroom Administration</h1>
          <p style={{ color: 'var(--text-light)' }}>Manage live gold rates and oversee Customer Relationship Management (CRM)</p>
        </div>
        <div style={{ padding: '8px 16px', background: '#dcfce7', color: '#15803d', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
          Logged in as Admin (Owner)
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, marginBottom: 40 }}>
        
        {/* GOLD RATE MANAGER PANEL */}
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 24, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--dark)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            📊 Live Gold Rates Manager
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: 13, marginBottom: 20 }}>
            Change rates below to instantly update product prices and wallet conversions globally across the application.
          </p>

          {Object.keys(ratesForm).map(key => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid #f9f9f9' }}>
              <span style={{ fontWeight: 600, width: 80 }}>{key} Gold</span>
              <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                <input 
                  type="number" 
                  value={ratesForm[key].price} 
                  onChange={e => setRatesForm({ ...ratesForm, [key]: { ...ratesForm[key], price: parseFloat(e.target.value) || 0 } })}
                  placeholder="Price"
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6, fontSize: 13 }}
                />
                <input 
                  type="number" 
                  value={ratesForm[key].change} 
                  onChange={e => setRatesForm({ ...ratesForm, [key]: { ...ratesForm[key], change: parseFloat(e.target.value) || 0 } })}
                  placeholder="Change"
                  style={{ width: 80, padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6, fontSize: 13 }}
                />
              </div>
              <button 
                onClick={() => handleRateUpdate(key)}
                className="btn" 
                style={{ padding: '8px 12px', background: 'var(--gold)', color: 'var(--white)', borderRadius: 6, fontSize: 12, fontWeight: 600 }}
              >
                Save
              </button>
            </div>
          ))}
        </div>

        {/* ANALYTICS SUMMARY PANEL */}
        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 24, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--dark)', marginBottom: 20 }}>
            📈 Showroom Analytics
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ padding: 16, background: '#fcfcfc', border: '1px solid #eee', borderRadius: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--text-light)' }}>Total CRM Customers</span>
              <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--maroon)' }}>{crmUsers.length}</div>
            </div>
            <div style={{ padding: 16, background: '#fcfcfc', border: '1px solid #eee', borderRadius: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--text-light)' }}>Active Gold Schemes</span>
              <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--gold-dark)' }}>
                {crmUsers.reduce((acc, u) => acc + (u.wallet?.activeSchemes?.length || 0), 0)}
              </div>
            </div>
            <div style={{ padding: 16, background: '#fcfcfc', border: '1px solid #eee', borderRadius: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--text-light)' }}>Missed Installments</span>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#dc2626' }}>
                {crmUsers.reduce((acc, u) => acc + (u.wallet?.activeSchemes?.filter(s => s.status === 'Missed Payment').length || 0), 0)}
              </div>
            </div>
            <div style={{ padding: 16, background: '#fcfcfc', border: '1px solid #eee', borderRadius: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--text-light)' }}>Cum. Gold Managed</span>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#16a34a' }}>
                {crmUsers.reduce((acc, u) => acc + (u.wallet?.goldGrams || 0), 0).toFixed(2)}g
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CUSTOMER CRM PORTAL */}
      <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 24, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--dark)' }}>📞 Customer Relationship Management (CRM)</h2>
            <p style={{ color: 'var(--text-light)', fontSize: 13 }}>Follow up on monthly gold installment status and payment drops</p>
          </div>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <input type="checkbox" checked={filterMissed} onChange={e => setFilterMissed(e.target.checked)} />
              ⚠️ Show Missed Payments Only
            </label>
          </div>
        </div>

        {filteredCrmUsers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-light)' }}>
            No customers match the current filter.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="tx-table" style={{ width: '100%', minWidth: 800 }}>
              <thead>
                <tr>
                  <th>Customer Info</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Active Schemes</th>
                  <th>Gold Balance</th>
                  <th>CRM Action / Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCrmUsers.map(u => (
                  <tr key={u.phone}>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--maroon)' }}>{u.name || 'Anonymous User'}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-light)' }}>Created: +91 {u.phone}</div>
                    </td>
                    <td>{u.email || 'N/A'}</td>
                    <td style={{ fontSize: 12, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.address || 'N/A'}</td>
                    <td>
                      {u.wallet.activeSchemes && u.wallet.activeSchemes.length > 0 ? (
                        u.wallet.activeSchemes.map(s => (
                          <div key={s.id} style={{ fontSize: 12, marginBottom: 4 }}>
                            <strong>{s.name}</strong> ({s.installmentsPaid}/{s.totalInstallments} Months Paid)
                          </div>
                        ))
                      ) : (
                        <span style={{ color: 'var(--text-light)', fontSize: 12 }}>No schemes active</span>
                      )}
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--gold-dark)' }}>{u.wallet.goldGrams}g</td>
                    <td>
                      {u.wallet.activeSchemes && u.wallet.activeSchemes.length > 0 ? (
                        u.wallet.activeSchemes.map(s => (
                          <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                            <span style={{ 
                              padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 700,
                              background: s.status === 'Missed Payment' ? '#fee2e2' : '#dcfce7',
                              color: s.status === 'Missed Payment' ? '#dc2626' : '#15803d'
                            }}>
                              {s.status || 'Active'}
                            </span>
                            <button 
                              onClick={() => toggleCrmSchemeStatus(u.phone, s.id)}
                              style={{ 
                                padding: '2px 6px', fontSize: 10, background: 'none', 
                                border: '1px solid #ddd', borderRadius: 4, cursor: 'pointer' 
                              }}
                            >
                              Toggle Flag
                            </button>
                            {s.status === 'Missed Payment' && (
                              <a 
                                href={`https://wa.me/91${u.phone}?text=Hello ${u.name}, this is Taradas Jewellers Davangere. We noticed a missed payment on your ${s.name} gold scheme. Please update your wallet to continue earning bonus gold.`}
                                target="_blank"
                                rel="noreferrer"
                                style={{ fontSize: 11, color: '#25d366', fontWeight: 600, textDecoration: 'none' }}
                              >
                                💬 Alert
                              </a>
                            )}
                          </div>
                        ))
                      ) : (
                        <span style={{ color: 'var(--text-light)', fontSize: 12 }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
