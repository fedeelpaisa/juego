import { motion } from 'framer-motion'
import { faculties } from '../data/questions.js'

export default function FacultySelect({ onSelect }) {
  return (
    <motion.main initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="px-8 pb-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-lime">Check-in de facultad</p>
        <h1 className="font-display text-7xl uppercase text-white md:text-9xl">¿Para quién jugás?</h1>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
          {faculties.map((faculty, index) => (
            <motion.button
              key={faculty}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.035 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelect(faculty)}
              className="touch-target min-h-32 border-2 border-lime bg-white/5 p-6 text-left font-display text-4xl uppercase text-white transition hover:-rotate-1 hover:bg-lime hover:text-night hover:shadow-neon"
            >
              {faculty}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.main>
  )
}
