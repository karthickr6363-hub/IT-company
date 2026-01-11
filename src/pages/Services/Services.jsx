import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCode,
  FiSmartphone,
  FiCloud,
  FiServer,
  FiDatabase,
  FiShield,
  FiBarChart,
  FiSettings,
  FiChevronDown,
  FiBook,
  FiDollarSign,
  FiTrendingUp,
  FiLayers,
} from 'react-icons/fi'
import Card from '../../components/Card/Card'
import './Services.css'

function Services() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const dropdownServices = [
    {
      id: 1,
      title: 'Software Training Program',
      icon: <FiBook />,
      description: 'Comprehensive software training programs designed to upskill your team with the latest technologies and best practices.',
      details: [
        'Customized curriculum based on your needs',
        'Hands-on practical training sessions',
        'Certified instructors',
        'Ongoing support and resources',
      ],
    },
    {
      id: 2,
      title: 'Payroll Solution',
      icon: <FiDollarSign />,
      description: 'Complete payroll management solutions to streamline your HR processes and ensure accurate, timely payments.',
      details: [
        'Automated payroll processing',
        'Tax calculation and compliance',
        'Employee self-service portal',
        'Comprehensive reporting',
      ],
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: <FiTrendingUp />,
      description: 'Full-service digital marketing solutions to boost your online presence, reach your target audience, and drive growth.',
      details: [
        'SEO and SEM strategies',
        'Social media management',
        'Content marketing',
        'Analytics and performance tracking',
      ],
    },
    {
      id: 4,
      title: 'Software Development Services',
      icon: <FiLayers />,
      description: 'End-to-end software development services from concept to deployment, tailored to your business requirements.',
      details: [
        'Custom software development',
        'Agile development methodology',
        'Quality assurance and testing',
        'Maintenance and support',
      ],
    },
  ]
  const services = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks like React, Vue, and Node.js. We create responsive, fast, and scalable web solutions.',
      features: ['React & Vue.js', 'Node.js Backend', 'RESTful APIs', 'Responsive Design'],
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android. We deliver smooth, intuitive mobile experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployment'],
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure using AWS, Azure, and Google Cloud. We help you leverage the power of cloud computing.',
      features: ['AWS & Azure', 'Serverless Architecture', 'Cloud Migration', 'Auto Scaling'],
    },
    {
      icon: <FiServer />,
      title: 'DevOps Services',
      description:
        'Streamlined CI/CD pipelines, containerization, and infrastructure automation. Accelerate your deployment cycles.',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring'],
    },
    {
      icon: <FiDatabase />,
      title: 'Database Solutions',
      description:
        'Database design, optimization, and management. We ensure your data is secure, scalable, and efficiently organized.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
    },
    {
      icon: <FiShield />,
      title: 'Security Services',
      description:
        'Comprehensive security audits, penetration testing, and security implementation. Protect your applications and data.',
      features: ['Security Audits', 'Penetration Testing', 'SSL/TLS Setup', 'Security Consulting'],
    },
    {
      icon: <FiBarChart />,
      title: 'Data Analytics',
      description:
        'Business intelligence, data visualization, and analytics solutions. Turn your data into actionable insights.',
      features: ['Business Intelligence', 'Data Visualization', 'Custom Dashboards', 'Reporting'],
    },
    {
      icon: <FiSettings />,
      title: 'Maintenance & Support',
      description:
        'Ongoing maintenance, updates, and 24/7 support for your applications. Keep your software running smoothly.',
      features: ['24/7 Support', 'Bug Fixes', 'Performance Updates', 'Security Patches'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="services-page">
      <div className="services-hero section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="services-hero-content"
        >
          <h1>Our Services</h1>
          <p className="services-hero-subtitle">
            Comprehensive software solutions tailored to your needs
          </p>
          <p className="services-hero-description">
            We offer a wide range of services to help your business succeed in
            the digital world. From web development to cloud solutions, we have
            the expertise to bring your vision to life.
          </p>
        </motion.div>
      </div>

      {/* Dropdown Services Section */}
      <section className="section dropdown-services-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dropdown-services-container"
        >
          <h2 className="dropdown-section-title">Featured Services</h2>
          <p className="dropdown-section-subtitle">
            Select a service to learn more about our specialized offerings
          </p>

          <div className="dropdown-wrapper" ref={dropdownRef}>
            <button
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>
                {selectedService ? selectedService.title : 'Select a Service'}
              </span>
              <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown />
              </motion.span>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {dropdownServices.map((service) => (
                    <li key={service.id}>
                      <button
                        className={`dropdown-item ${
                          selectedService?.id === service.id ? 'active' : ''
                        }`}
                        onClick={() => {
                          setSelectedService(service)
                          setIsDropdownOpen(false)
                        }}
                      >
                        <span className="dropdown-item-icon">{service.icon}</span>
                        <span className="dropdown-item-text">{service.title}</span>
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {selectedService && (
              <motion.div
                className="selected-service-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-detail-card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon">{selectedService.icon}</div>
                    <h3>{selectedService.title}</h3>
                  </div>
                  <p className="service-detail-description">
                    {selectedService.description}
                  </p>
                  <ul className="service-detail-list">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx}>
                        <span className="detail-check">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="clear-selection"
                    onClick={() => setSelectedService(null)}
                  >
                    Clear Selection
                  </button>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="section services-list">
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="service-card-detailed">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default Services
