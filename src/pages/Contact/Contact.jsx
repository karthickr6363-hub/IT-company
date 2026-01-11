import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.css'

function Contact() {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'info@ellowring.com',
      link: 'mailto:info@ellowring.com',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FiMapPin />,
      title: 'Address',
      content: '123 Tech Street, Silicon Valley, CA 94000',
      link: '#',
    },
    {
      icon: <FiClock />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ]

  return (
    <div className="contact-page">
      <div className="contact-hero section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-hero-content"
        >
          <h1>Get In Touch</h1>
          <p className="contact-hero-subtitle">
            We'd love to hear from you
          </p>
          <p className="contact-hero-description">
            Have a project in mind? Want to learn more about our services?
            Reach out to us and let's discuss how we can help bring your
            vision to life.
          </p>
        </motion.div>
      </div>

      <section className="section contact-content">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Contact Information</h2>
            <p className="contact-info-description">
              Feel free to reach out to us through any of the following
              channels. We're here to help!
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
