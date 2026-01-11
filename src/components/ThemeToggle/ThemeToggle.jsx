import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="theme-toggle-icon"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 360 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
