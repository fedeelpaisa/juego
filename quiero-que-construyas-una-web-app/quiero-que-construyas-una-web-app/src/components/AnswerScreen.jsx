import { motion } from 'framer-motion'
import NeonButton from './NeonButton.jsx'
import PassportStamp from './PassportStamp.jsx'

export default function AnswerScreen({ feedback }) {
  const { isCorrect, question, progress, total, onNext } = feedback

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="grid min-h-[calc(100vh-120px)] place-items-center px-8 pb-8"
    >
      <motion.section
        animate={isCorrect ? { scale: [1, 1.03, 1] } : { x: [0, -12, 12, -6, 6, 0] }}
        className={`relative w-full max-w-5xl overflow-hidden border-4 p-10 text-center ${
          isCorrect ? 'border-lime bg-lime text-night shadow-neon' : 'border-magenta bg-night text-white shadow-magenta'
        }`}
      >
        <div className="absolute left-8 top-8 opacity-70">
          <PassportStamp>{isCorrect ? 'OK' : 'CASI'}</PassportStamp>
        </div>
        <p className="text-sm uppercase tracking-[0.28em] opacity-70">Destino {progress}/{total}</p>
        <h1 className="mt-8 font-display text-7xl uppercase md:text-9xl">
          {isCorrect ? 'Destino confirmado' : 'Casi'}
        </h1>
        {!isCorrect && <p className="mt-6 text-2xl uppercase tracking-[0.18em]">La respuesta era:</p>}
        <p className="mt-7 font-display text-6xl uppercase">{question.country}</p>
        <p className="mt-2 text-4xl font-black uppercase">{question.destination || question.answer}</p>
        <div className="mt-10">
          <NeonButton onClick={onNext} variant={isCorrect ? 'dark' : 'lime'}>
            Siguiente destino
          </NeonButton>
        </div>
      </motion.section>
    </motion.main>
  )
}
