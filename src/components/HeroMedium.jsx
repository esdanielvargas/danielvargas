import { useTranslation } from "react-i18next";

export default function HeroMedium(props) {
  const { t } = useTranslation();
  const { bg, title, short, path } = props;

  return (
    <>
      <div
        className="w-full h-95 relative bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <title>{`${short ? short : title} ~ ${t("website.title")}`}</title>
        <link rel="canonical" href={`${window.location.origin}${path}`} />
        <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-lg" />
        <h1 className="mt-11.5 relative z-1 text-3xl md:text-4xl font-medium text-center">
          {title || "Título de la Página"}
        </h1>
      </div>
      <div className="w-full sticky top-22.5 border-b border-neutral-900" />
    </>
  );
}
