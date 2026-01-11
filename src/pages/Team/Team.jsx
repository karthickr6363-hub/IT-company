import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from 'react-icons/fi'
import Card from '../../components/Card/Card'
import './Team.css'

function Team() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/300x300?text=JD',
      bio: 'Visionary leader with 15+ years in software development',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'john@ellowring.com',
      },
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/300x300?text=JS',
      bio: 'Tech expert specializing in cloud architecture',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'jane@ellowring.com',
      },
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://via.placeholder.com/300x300?text=MJ',
      bio: 'Full-stack developer passionate about modern web technologies',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'mike@ellowring.com',
      },
    },
    {
      name: 'Sarah Williams',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/300x300?text=SW',
      bio: 'Creative designer focused on user experience',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'sarah@ellowring.com',
      },
    },
    {
      name: 'David Brown',
      role: 'DevOps Engineer',
      image: 'https://via.placeholder.com/300x300?text=DB',
      bio: 'Infrastructure specialist ensuring smooth deployments',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'david@ellowring.com',
      },
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: 'https://via.placeholder.com/300x300?text=ED',
      bio: 'Organized leader keeping projects on track',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'emily@ellowring.com',
      },
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
    <div className="team-page">
      <div className="team-hero section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="team-hero-content"
        >
          <h1>Our Team</h1>
          <p className="team-hero-subtitle">
            Meet the talented people behind ELLOWRING
          </p>
          <p className="team-hero-description">
            We are a diverse team of passionate professionals dedicated to
            delivering exceptional software solutions. Each member brings
            unique expertise and creativity to every project.
          </p>
        </motion.div>
      </div>

      <section className="section team-list">
        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="team-card">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-overlay">
                    <div className="team-social">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} aria-label="LinkedIn">
                          <FiLinkedin />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} aria-label="GitHub">
                          <FiGithub />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} aria-label="Twitter">
                          <FiTwitter />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} aria-label="Email">
                          <FiMail />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default Team
