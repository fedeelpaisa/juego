import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { getFacultyRanking, getIndividualRanking } from '../utils/storage.js'
import NeonButton from './NeonButton.jsx'

export default function RankingScreen({ games, onRestart, onReset }) {
  const facultyRanking = getFacultyRanking(games)
  const individualRanking = getIndividualRanking(games)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-8 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.28em] text-lime">Ranking en vivo</p>
            <h1 className="font-display text-7xl uppercase text-white md:text-9xl">Facultades</h1>
          </div>
          <div className="flex gap-4">
            <NeonButton onClick={onRestart}>Nuevo check-in</NeonButton>
            <button
              onClick={onReset}
              className="touch-target grid place-items-center border-2 border-magenta bg-magenta/10 p-5 text-magenta"
              aria-label="Resetear ranking"
            >
              <Trash2 size={30} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="border-2 border-lime bg-white/5">
            {facultyRanking.length === 0 ? (
              <p className="p-8 font-display text-4xl uppercase text-white">Todavía no hay partidas</p>
            ) : (
              facultyRanking.map((row, index) => (
                <div key={row.faculty} className="grid grid-cols-[90px_1fr_220px_170px] items-center gap-4 border-b border-white/15 p-5 text-white last:border-b-0">
                  <p className="font-display text-5xl text-lime">#{index + 1}</p>
                  <p className="font-display text-5xl uppercase">{row.faculty}</p>
                  <p className="font-display text-5xl uppercase">{row.points}</p>
                  <p className="text-xl uppercase tracking-[0.14em] text-white/70">{row.players} jugadores</p>
                </div>
              ))
            )}
          </section>

          <section className="border-2 border-white/20 bg-night/70 p-6">
            <h2 className="mb-5 font-display text-5xl uppercase text-white">Individual</h2>
            <div className="grid gap-3">
              {individualRanking.map((game, index) => (
                <div key={game.id} className="grid grid-cols-[56px_1fr_90px] items-center border border-white/15 bg-white/5 p-4">
                  <p className="font-display text-3xl text-lime">{index + 1}</p>
                  <div>
                    <p className="font-display text-2xl uppercase text-white">{game.name || 'Jugador anónimo'}</p>
                    <p className="text-sm uppercase tracking-[0.16em] text-white/55">{game.faculty}</p>
                  </div>
                  <p className="font-display text-3xl text-white">{game.score}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.main>
  )
}
