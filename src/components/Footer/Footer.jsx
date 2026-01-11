import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ELLOWRING</h3>
            <p className="footer-text">SOFTWARE SOLUTIONS</p>
            <p className="footer-description">
              Delivering innovative software solutions with excellence and precision.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <FiFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FiTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <FiLinkedin />
              </a>
              <a href="#" aria-label="GitHub" className="social-link">
                <FiGithub />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">Cloud Solutions</Link></li>
              <li><Link to="/services">DevOps</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <FiMail className="contact-icon" />
                <span>info@ellowring.com</span>
              </li>
              <li>
                <FiPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FiMapPin className="contact-icon" />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ELLOWRING SOFTWARE SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
