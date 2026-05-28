export default function ImageFallback({ src, label, country }) {
  return (
    <div className="destination-frame relative h-full min-h-[280px] overflow-hidden border-2 border-white/20 bg-ink">
      <img
        src={src}
        alt={label}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_25%,rgba(183,255,0,0.32),transparent_28%),linear-gradient(135deg,#101010,#001e14_55%,#25001f)] p-8 text-center">
        <div>
          <p className="mb-4 inline-block border border-lime px-4 py-2 text-sm uppercase tracking-[0.24em] text-lime">
            {country}
          </p>
          <h3 className="font-display text-5xl uppercase text-white md:text-7xl">{label}</h3>
        </div>
      </div>
    </div>
  )
}
