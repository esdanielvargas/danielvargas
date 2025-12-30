export default function HeroFull({ title, cover }) {
  return (
    <section
    className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white relative"
    style={{ backgroundImage: `url(${cover})` }}
    aria-label={title}
  >
    <div className="absolute inset-0 bg-black/60" />
    <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center">
      {title}
    </h1>
  </section>
  )
}