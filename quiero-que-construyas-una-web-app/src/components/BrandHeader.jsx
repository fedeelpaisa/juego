import { Maximize2, Plane } from 'lucide-react'

export default function BrandHeader({ onFullscreen }) {
  return (
    <header className="relative z-20 flex items-center justify-between px-8 py-5">
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center border-2 border-lime bg-lime font-display text-3xl text-night shadow-neon">
          T&T
        </div>
        <div>
          <p className="font-display text-3xl uppercase text-white">Vuelan Recibidos</p>
          <p className="text-sm uppercase tracking-[0.24em] text-lime">Toque & Toque</p>
        </div>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <div className="flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.18em] text-white/80">
          <Plane size={18} className="text-lime" />
          Boarding Asia
        </div>
        <button
          onClick={onFullscreen}
          className="touch-target grid place-items-center border border-lime/60 bg-lime/10 p-4 text-lime"
          aria-label="Pantalla completa"
        >
          <Maximize2 size={24} />
        </button>
      </div>
    </header>
  )
}
