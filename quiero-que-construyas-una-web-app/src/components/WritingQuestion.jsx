import ImageFallback from './ImageFallback.jsx'

export default function WritingQuestion({ question, value, onChange, onSubmit }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <ImageFallback src={question.image} label={question.answer} country={question.country} />
      <div className="flex flex-col justify-center border-2 border-lime/60 bg-white/5 p-7">
        <label className="mb-4 font-display text-4xl uppercase text-white">Escribí acá</label>
        <input
          autoFocus
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') onSubmit()
          }}
          className="touch-target border-2 border-lime bg-night px-6 py-6 font-display text-4xl uppercase text-lime outline-none shadow-neon"
          placeholder="DESTINO..."
        />
        <p className="mt-5 text-lg uppercase tracking-[0.14em] text-white/60">Teclado, dedo o lápiz táctil</p>
      </div>
    </div>
  )
}
