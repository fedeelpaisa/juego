import { motion } from 'framer-motion'
import NeonButton from './NeonButton.jsx'
import PassportStamp from './PassportStamp.jsx'

export default function FinalResult({ result, onRanking, onRestart }) {
  return (
    <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="grid min-h-[calc(100vh-120px)] place-items-center px-8 pb-8">
      <section className="relative w-full max-w-6xl border-4 border-lime bg-white p-10 text-night shadow-neon">
        <div className="absolute right-10 top-10">
          <PassportStamp>PASAPORTE</PassportStamp>
        </div>
        <p className="font-display text-4xl uppercase">Pasaporte aprobado</p>
        <h1 className="mt-5 font-display text-8xl uppercase md:text-[10rem]">{result.score} pts</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="border-2 border-night p-5">
            <p className="text-sm uppercase tracking-[0.24em] opacity-60">Facultad</p>
            <p className="font-display text-4xl uppercase">{result.faculty}</p>
          </div>
          <div className="border-2 border-night p-5">
            <p className="text-sm uppercase tracking-[0.24em] opacity-60">Correctas</p>
            <p className="font-display text-4xl uppercase">{result.correct}/{result.total}</p>
          </div>
          <div className="border-2 border-night p-5">
            <p className="text-sm uppercase tracking-[0.24em] opacity-60">Jugador</p>
            <p className="font-display text-4xl uppercase">Anónimo</p>
          </div>
        </div>
        <p className="mt-8 text-3xl font-black uppercase">Sumaste puntos para tu facultad</p>
        <div className="mt-10 flex flex-wrap gap-5">
          <NeonButton onClick={onRanking}>Ver ranking</NeonButton>
          <NeonButton onClick={onRestart} variant="dark">Jugar de nuevo</NeonButton>
        </div>
      </section>
    </motion.main>
  )
}
