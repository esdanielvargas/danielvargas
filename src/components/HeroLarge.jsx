export default function HeroLarge({ cover, title, backgroundUrl }) {
  return (
    <div
      className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      aria-label={title}
    >
      <div className="absolute inset-0 bg-neutral-900/75 rounded-b-xl" />
      <img src={cover} alt="" title="" loading="" className="size-full absolute object-cover" />
      <h1 className="relative z-10 text-4xl md:text-5xl font-semibold text-center">
        {title || "Título de la Página"}
      </h1>
    </div>
  );
}
