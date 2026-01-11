import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCode, FiSmartphone, FiCloud, FiServer } from 'react-icons/fi'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Logo3DCanvas from '../../components/Logo3D/Logo3DCanvas'
import './Home.css'

function Home() {
  const services = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions',
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
    },
    {
      icon: <FiServer />,
      title: 'DevOps',
      description: 'Streamlined deployment and infrastructure management',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="home-page">
      {/* Hero Section with 3D Logo */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <motion.div
            className="hero-3d-logo"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Logo3DCanvas scale={1.2} />
          </motion.div>
          
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="hero-title">
              Welcome to <span className="highlight">ELLOWRING</span>
            </h1>
            <p className="hero-subtitle">SOFTWARE SOLUTIONS</p>
            <p className="hero-description">
              Delivering innovative software solutions with excellence and precision.
              We transform your ideas into powerful digital experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/services">
                <Button variant="primary" size="large">
                  Our Services
                  <FiArrowRight />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="large">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">
            <h2>Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions for all your software needs
            </p>
          </div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">
                    Learn More <FiArrowRight />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="section-cta">
            <Link to="/services">
              <Button variant="outline" size="large">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="about-preview-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>About ELLOWRING</h2>
            <p>
              We are a team of passionate developers and designers dedicated to
              creating exceptional software solutions. With years of experience
              and a commitment to excellence, we help businesses transform their
              digital presence.
            </p>
            <p>
              Our mission is to deliver innovative, scalable, and reliable
              software that drives business growth and success.
            </p>
            <Link to="/about">
              <Button variant="primary" size="medium">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
