export default function PassportStamp({ children = 'T&T' }) {
  return (
    <div className="stamp rotate-[-8deg] border-4 border-lime px-7 py-4 font-display text-3xl uppercase text-lime">
      {children}
    </div>
  )
}
