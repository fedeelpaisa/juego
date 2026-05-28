import PassportStamp from './PassportStamp.jsx'

export default function BoardingPass({ children, className = '' }) {
  return (
    <section className={`boarding-pass relative overflow-hidden border-2 border-lime bg-white text-night shadow-neon ${className}`}>
      <div className="absolute left-0 top-0 h-full w-5 bg-lime" />
      <div className="absolute right-12 top-0 h-full border-l-2 border-dashed border-night/40" />
      <div className="absolute right-4 top-8 h-[78%] w-5 barcode opacity-80" />
      <div className="relative z-10 p-8 md:p-10">{children}</div>
      <div className="absolute bottom-8 right-24 opacity-80">
        <PassportStamp>CHECK-IN</PassportStamp>
      </div>
    </section>
  )
}
