import { motion } from 'framer-motion'
import { PlaneTakeoff } from 'lucide-react'
import BoardingPass from './BoardingPass.jsx'
import NeonButton from './NeonButton.jsx'

export default function StartScreen({ onStart }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="screen-grid px-8 pb-8">
      <div className="grid min-h-[calc(100vh-120px)] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <p className="mb-4 inline-block border border-magenta bg-magenta/15 px-4 py-2 text-sm uppercase tracking-[0.24em] text-magenta">
            Sumá puntos para tu facultad
          </p>
          <h1 className="max-w-5xl font-display text-[clamp(5rem,10vw,12rem)] uppercase leading-[0.83] text-white">
            Vuelan Recibidos
          </h1>
          <p className="mt-5 max-w-2xl text-3xl font-black uppercase tracking-normal text-lime">
            El viaje de todas las facultades
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <NeonButton onClick={onStart} className="text-4xl">
              Empezar check-in
            </NeonButton>
            <div className="flex items-center gap-3 border border-white/20 bg-white/5 px-5 py-4 text-white/80">
              <PlaneTakeoff className="text-lime" />
              <span className="uppercase tracking-[0.16em]">Boarding inmediato</span>
            </div>
          </div>
        </div>

        <BoardingPass className="rotate-[-2deg]">
          <p className="font-display text-2xl uppercase">Boarding Pass</p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-night/50">Desde</p>
              <p className="font-display text-6xl uppercase">UY</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-night/50">Hacia</p>
              <p className="font-display text-6xl uppercase">ASIA</p>
            </div>
          </div>
          <div className="mt-8 border-y-2 border-dashed border-night/30 py-6">
            <p className="font-display text-5xl uppercase">Check-in</p>
            <p className="mt-2 text-xl font-black uppercase">Destino confirmado al acertar</p>
          </div>
        </BoardingPass>
      </div>
    </motion.main>
  )
}
