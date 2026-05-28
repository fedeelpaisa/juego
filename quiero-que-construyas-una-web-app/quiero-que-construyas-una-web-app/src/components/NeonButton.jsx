import { motion } from 'framer-motion'

export default function NeonButton({ children, className = '', variant = 'lime', ...props }) {
  const variants = {
    lime: 'bg-lime text-night border-lime shadow-neon',
    dark: 'bg-night/80 text-white border-lime/70',
    magenta: 'bg-magenta text-white border-magenta shadow-magenta',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, rotate: -0.5 }}
      whileTap={{ scale: 0.96 }}
      className={`touch-target border-2 px-8 py-5 font-display text-2xl uppercase tracking-normal transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
