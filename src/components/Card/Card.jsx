import { motion } from 'framer-motion'
import './Card.css'

function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
