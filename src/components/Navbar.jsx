import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../App'
import PriceAlertModal from './PriceAlertModal'
import { Bell, User, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const { setCartOpen, cartCount, user, setLoginModalOpen, setProfileSidebarOpen, priceAlert } = useContext(AppContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)

  return (
    <>
      <nav className="navbar" id="main-navbar">
        <div className="nav-inner">
          <NavLink to="/" className="logo">
            <div className="logo-icon">T</div>
            <div className="logo-text">
              <h1>TARADAS</h1>
              <span>Jewellers • Since 1965</span>
            </div>
          </NavLink>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/schemes" onClick={() => setMenuOpen(false)}>Gold Schemes</NavLink></li>
            <li><NavLink to="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy Policy</NavLink></li>
            <li><NavLink to="/terms-and-conditions" onClick={() => setMenuOpen(false)}>Terms & Conditions</NavLink></li>
            <li><NavLink to="/refund-policy" onClick={() => setMenuOpen(false)}>Refund Policy</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
          </ul>

          <div className="nav-actions">
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} id="menu-toggle">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <PriceAlertModal isOpen={alertOpen} onClose={() => setAlertOpen(false)} />
    </>
  )
}
