export default function MapQuestion({ question, selected, onSelect }) {
  return (
    <div className="relative min-h-[430px] overflow-hidden border-2 border-lime/60 bg-[linear-gradient(135deg,#06110c,#0d0d0d_50%,#190018)] p-6 shadow-neon">
      <div className="absolute inset-6 border border-white/10" />
      <div className="absolute left-[18%] top-[12%] h-[72%] w-[56%] rotate-[-10deg] rounded-[45%] border-4 border-lime/70 bg-lime/10 blur-[0.3px]" />
      <div className="absolute left-[42%] top-[18%] h-[55%] w-[24%] rotate-[18deg] border-4 border-white/20 bg-white/5" />
      <div className="absolute bottom-6 left-6 font-display text-5xl uppercase text-white/10">{question.mapLabel}</div>
      {question.points.map((point) => (
        <button
          key={point.id}
          onClick={() => onSelect(point.id)}
          className={`touch-target absolute grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 font-display text-4xl transition ${
            selected === point.id
              ? 'border-white bg-lime text-night shadow-neon'
              : 'border-lime bg-night text-lime'
          }`}
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
        >
          {point.label}
        </button>
      ))}
    </div>
  )
}
