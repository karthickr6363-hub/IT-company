import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiAward, FiUsers, FiTrendingUp, FiCode } from 'react-icons/fi'
import Card from '../../components/Card/Card'
import './About.css'

function About() {
  const values = [
    {
      icon: <FiCode />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions',
    },
    {
      icon: <FiTarget />,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake',
    },
    {
      icon: <FiUsers />,
      title: 'Collaboration',
      description: 'We work closely with clients to achieve their goals',
    },
    {
      icon: <FiAward />,
      title: 'Quality',
      description: 'We deliver solutions that exceed expectations',
    },
  ]

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ]

  return (
    <div className="about-page">
      <div className="about-hero section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-hero-content"
        >
          <h1>About ELLOWRING</h1>
          <p className="about-hero-subtitle">SOFTWARE SOLUTIONS</p>
          <p className="about-hero-description">
            We are a leading software solutions company dedicated to delivering
            innovative and reliable technology solutions that drive business success.
          </p>
        </motion.div>
      </div>

      <section className="section mission-vision">
        <div className="mission-vision-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mission-card">
              <FiTarget className="card-icon" />
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative software solutions that
                drive growth, efficiency, and competitive advantage in the
                digital age.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="vision-card">
              <FiEye className="card-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the most trusted partner for software solutions globally,
                recognized for our innovation, quality, and commitment to
                client success.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="section stats-section">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section values-section">
        <div className="section-title">
          <h2>Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
