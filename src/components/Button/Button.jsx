import { motion } from 'framer-motion'
import './Button.css'

function Button({ children, variant = 'primary', size = 'medium', className = '', ...props }) {
  return (
    <motion.button
      className={`btn btn-${variant} btn-${size} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
