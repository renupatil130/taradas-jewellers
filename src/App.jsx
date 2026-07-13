import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoldTicker from './components/GoldTicker'
import CartSidebar from './components/CartSidebar'
import ProfileSidebar from './components/ProfileSidebar'
import LoginModal from './components/LoginModal'
import Toast from './components/Toast'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Catalogue from './pages/Catalogue'
import SchemesPage from './pages/SchemesPage'
import Wallet from './pages/Wallet'
import About from './pages/About'
import Wishlist from './pages/Wishlist'
import AdminDashboard from './pages/AdminDashboard'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import RefundPolicy from './pages/RefundPolicy'
import Contact from './pages/Contact'
import { GOLD_RATES } from './data'

export const AppContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState(null)
  
  // Auth State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('tj_user')
    return saved ? JSON.parse(saved) : null
  })
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false)

  // Gold Rates State (Managed by Admin)
  const [goldRates, setGoldRates] = useState(() => {
    const saved = localStorage.getItem('tj_gold_rates')
    return saved ? JSON.parse(saved) : GOLD_RATES
  })

  // Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem(user ? `tj_wishlist_${user.phone}` : 'tj_wishlist_guest')
    return saved ? JSON.parse(saved) : []
  })

  // Price Drop Alert State
  const [priceAlert, setPriceAlert] = useState(() => {
    const saved = localStorage.getItem(user ? `tj_price_alert_${user.phone}` : 'tj_price_alert_guest')
    return saved ? parseFloat(saved) : null
  })

  // Sync wishlist, price alert, and wallet when user changes
  useEffect(() => {
    const wSaved = localStorage.getItem(user ? `tj_wishlist_${user.phone}` : 'tj_wishlist_guest')
    setWishlist(wSaved ? JSON.parse(wSaved) : [])

    const aSaved = localStorage.getItem(user ? `tj_price_alert_${user.phone}` : 'tj_price_alert_guest')
    setPriceAlert(aSaved ? parseFloat(aSaved) : null)

    const walletSaved = localStorage.getItem(user ? `tj_wallet_${user.phone}` : 'tj_wallet_guest')
    if (walletSaved) {
      setWallet(JSON.parse(walletSaved))
    } else {
      setWallet({ balance: 0, goldGrams: 0, transactions: [], activeSchemes: [] })
    }
  }, [user])

  // Seed initial mock DB if empty
  useEffect(() => {
    const db = JSON.parse(localStorage.getItem('tj_users_db') || '{}')
    
    // Always ensure Admin exists
    if (!db['0000000000']) {
      db['0000000000'] = { phone: '0000000000', pin: '0000', name: 'Taradas Owner', email: 'owner@taradas.com', address: 'Davangere Store' }
    }
    
    // Seed Ramesh Kumar for Referrals & CRM testing
    if (!db['9876543210']) {
      db['9876543210'] = { phone: '9876543210', pin: '1234', name: 'Ramesh Kumar', email: 'ramesh@gmail.com', address: '1st Cross, Gandhi Nagar, Davangere', referredBy: '', referralBonusClaimed: false }
      // Initialize Ramesh's wallet with active scheme
      const wKey = 'tj_wallet_9876543210'
      if (!localStorage.getItem(wKey)) {
        localStorage.setItem(wKey, JSON.stringify({
          balance: 8000,
          goldGrams: 0.5575,
          transactions: [
            { id: 101, date: new Date(Date.now() - 30*24*60*60*1000).toISOString(), amount: 4000, goldGrams: 0.2787, scheme: 'Monthly Gold Savings', type: 'credit' },
            { id: 102, date: new Date().toISOString(), amount: 4000, goldGrams: 0.2788, scheme: 'Monthly Gold Savings', type: 'credit' }
          ],
          activeSchemes: [
            { id: 201, name: 'Monthly Gold Savings', installmentsPaid: 2, totalInstallments: 11, totalPaid: 8000, goldAccumulated: 0.5575, autoPay: true, startDate: new Date(Date.now() - 30*24*60*60*1000).toISOString() }
          ]
        }))
      }
    }

    // Seed Priya Sharma
    if (!db['8765432109']) {
      db['8765432109'] = { phone: '8765432109', pin: '1234', name: 'Priya Sharma', email: 'priya@outlook.com', address: 'Dental College Road, Davangere', referredBy: '', referralBonusClaimed: false }
    }
    
    localStorage.setItem('tj_users_db', JSON.stringify(db))
  }, [])

  // Wallet State
  const [wallet, setWallet] = useState(() => {
    const saved = localStorage.getItem(user ? `tj_wallet_${user.phone}` : 'tj_wallet_guest')
    return saved ? JSON.parse(saved) : { balance: 0, goldGrams: 0, transactions: [], activeSchemes: [] }
  })

  const saveWallet = (w) => { 
    setWallet(w); 
    localStorage.setItem(user ? `tj_wallet_${user.phone}` : 'tj_wallet_guest', JSON.stringify(w)) 
  }

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('tj_user', JSON.stringify(userData))
    setLoginModalOpen(false)
    showToast(`Welcome back, ${userData.name || userData.phone}!`, 'success')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('tj_user')
    setProfileSidebarOpen(false)
    showToast('Logged out successfully', 'info')
  }

  const updateProfile = (data) => {
    const updatedUser = { ...user, ...data }
    setUser(updatedUser)
    localStorage.setItem('tj_user', JSON.stringify(updatedUser))
    
    // Also update it in the mock DB
    const db = JSON.parse(localStorage.getItem('tj_users_db') || '{}')
    if(db[user.phone]) {
      db[user.phone] = { ...db[user.phone], ...data }
      localStorage.setItem('tj_users_db', JSON.stringify(db))
    }
    showToast('Profile updated!', 'success')
  }

  // Update Gold Rates (Admin function)
  const updateGoldRate = (key, price, change) => {
    const updated = {
      ...goldRates,
      [key]: {
        ...goldRates[key],
        price: parseFloat(price),
        change: parseFloat(change)
      }
    }
    setGoldRates(updated)
    localStorage.setItem('tj_gold_rates', JSON.stringify(updated))

    // Check price drop alert logic
    if (key === '22K' && priceAlert && parseFloat(price) <= priceAlert) {
      setTimeout(() => {
        showToast(`🔔 Price Drop Alert: 22K Gold has dropped to ₹${price}!`, 'success')
      }, 2000)
    }
  }

  // Wishlist Functions
  const toggleWishlist = (productId) => {
    let updated
    if (wishlist.includes(productId)) {
      updated = wishlist.filter(id => id !== productId)
      showToast('Removed from wishlist', 'info')
    } else {
      updated = [...wishlist, productId]
      showToast('Added to wishlist', 'success')
    }
    setWishlist(updated)
    localStorage.setItem(user ? `tj_wishlist_${user.phone}` : 'tj_wishlist_guest', JSON.stringify(updated))
  }

  // Price Alert Function
  const savePriceAlert = (price) => {
    setPriceAlert(price)
    if (price) {
      localStorage.setItem(user ? `tj_price_alert_${user.phone}` : 'tj_price_alert_guest', price.toString())
      showToast(`Alert set for ₹${price.toLocaleString('en-IN')}/g!`, 'success')
    } else {
      localStorage.removeItem(user ? `tj_price_alert_${user.phone}` : 'tj_price_alert_guest')
      showToast('Alert cleared!', 'info')
    }
  }

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    showToast('Added to cart!', 'success')
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))

  const makePayment = (amount, schemeName, autoPay = false) => {
    const rate22K = goldRates['22K'].price
    const goldGrams = parseFloat((amount / rate22K).toFixed(4))
    const tx = { id: Date.now(), date: new Date().toISOString(), amount, goldGrams, scheme: schemeName, type: 'credit' }
    
    // Update or add active scheme tracking
    const schemeKey = schemeName.toLowerCase().split(' ')[0]
    const maxInstallments = schemeKey === 'daily' ? 365 : schemeKey === 'weekly' ? 52 : schemeKey === 'monthly' ? 11 : 4
    
    const updatedSchemes = [...(wallet.activeSchemes || [])]
    const existingIndex = updatedSchemes.findIndex(s => s.name === schemeName)
    
    if (existingIndex > -1) {
      const es = updatedSchemes[existingIndex]
      updatedSchemes[existingIndex] = {
        ...es,
        installmentsPaid: Math.min(es.installmentsPaid + 1, maxInstallments),
        totalPaid: es.totalPaid + amount,
        goldAccumulated: parseFloat((es.goldAccumulated + goldGrams).toFixed(4)),
        autoPay: autoPay
      }
    } else {
      updatedSchemes.push({
        id: Date.now(),
        name: schemeName,
        installmentsPaid: 1,
        totalInstallments: maxInstallments,
        totalPaid: amount,
        goldAccumulated: goldGrams,
        autoPay: autoPay,
        startDate: new Date().toISOString()
      })
    }

    const newWallet = {
      balance: wallet.balance + amount,
      goldGrams: parseFloat((wallet.goldGrams + goldGrams).toFixed(4)),
      transactions: [tx, ...wallet.transactions],
      activeSchemes: updatedSchemes
    }

    // Handle referral bonus if applicable on the first payment
    if (user && user.referredBy && !user.referralBonusClaimed) {
      const referrerPhone = user.referredBy
      const db = JSON.parse(localStorage.getItem('tj_users_db') || '{}')
      
      if (db[referrerPhone]) {
        const bonusAmount = 500
        const bonusGrams = parseFloat((bonusAmount / rate22K).toFixed(4))
        
        // Credit new user's wallet
        newWallet.goldGrams = parseFloat((newWallet.goldGrams + bonusGrams).toFixed(4))
        newWallet.transactions.unshift({
          id: Date.now() + 1,
          date: new Date().toISOString(),
          amount: bonusAmount,
          goldGrams: bonusGrams,
          scheme: 'Referral Bonus (Welcome)',
          type: 'credit'
        })

        // Credit referrer's wallet in localStorage
        const refWKey = `tj_wallet_${referrerPhone}`
        const refWSaved = localStorage.getItem(refWKey)
        const refW = refWSaved ? JSON.parse(refWSaved) : { balance: 0, goldGrams: 0, transactions: [], activeSchemes: [] }
        refW.goldGrams = parseFloat((refW.goldGrams + bonusGrams).toFixed(4))
        refW.transactions.unshift({
          id: Date.now() + 2,
          date: new Date().toISOString(),
          amount: bonusAmount,
          goldGrams: bonusGrams,
          scheme: 'Referral Bonus (Friend Joined)',
          type: 'credit'
        })
        localStorage.setItem(refWKey, JSON.stringify(refW))

        // Mark user profile as claimed
        const updatedUser = { ...user, referralBonusClaimed: true }
        setUser(updatedUser)
        localStorage.setItem('tj_user', JSON.stringify(updatedUser))
        db[user.phone] = updatedUser
        localStorage.setItem('tj_users_db', JSON.stringify(db))
        
        setTimeout(() => {
          showToast(`🎉 Referral Bonus Credited! You and +91 ${referrerPhone} received ${bonusGrams}g Gold free!`, 'success')
        }, 3000)
      }
    }

    saveWallet(newWallet)
    showToast(`Payment of ₹${amount.toLocaleString('en-IN')} successful! You received ${goldGrams}g gold.`, 'success')
  }

  const showToast = (message, type = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <AppContext.Provider value={{ 
      cart, cartOpen, setCartOpen, addToCart, removeFromCart, cartTotal, cartCount, 
      wallet, makePayment, showToast,
      user, loginModalOpen, setLoginModalOpen, profileSidebarOpen, setProfileSidebarOpen,
      login, logout, updateProfile,
      goldRates, updateGoldRate,
      wishlist, toggleWishlist,
      priceAlert, savePriceAlert
    }}>
      <GoldTicker />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <CartSidebar />
      <ProfileSidebar />
      {loginModalOpen && <LoginModal />}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </AppContext.Provider>
  )
}

export default App
