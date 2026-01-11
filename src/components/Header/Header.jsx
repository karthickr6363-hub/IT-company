import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo3DCanvas from '../Logo3D/Logo3DCanvas'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="logo-wrapper">
            <div className="logo-3d">
              <Logo3DCanvas scale={0.6} />
            </div>
            <div className="logo-text">
              <span className="logo-main">ELLOWRING</span>
              <span className="logo-sub">SOFTWARE SOLUTIONS</span>
            </div>
          </div>
        </Link>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="nav-mobile"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3 }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </motion.header>
  )
}

export default Header
