import { useTranslation } from "react-i18next";
import { FalseHeader, HeroAbout, Section, Wrapper } from "../components";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <FalseHeader page />
      <Section>
        <Wrapper>
          <HeroAbout path="about" title={t("about.title")} />
          {/* tecnologías */}
          <div className="w-full flex flex-col items-center md:items-start gap-[30px]">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("about.technologies.title")}
            </h2>
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-xs md:text-md text-neutral-700 dark:text-neutral-300">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "TailwindCSS",
                "Vite",
                // "Firebase",
                "Next.js",
                "React Router",
                "TypeScript",
                "ESLint",
                "Bootstrap",
                "Material UI",
                "Node.js",
                "JSON",
                "XML",
                "Markdown",
                // "Vercel",
                // "Cloudflare",
                // "Namecheap",
                // "Google Cloud",
                "Stripe",
                "PayPal",
                "Sass",
                // "Less",
                // "GitHub",
              ].map((tech) => (
                <li
                  key={tech}
                  className="px-2 py-0.5 md:py-1 border border-neutral-600 rounded-lg"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />
          {/* herramientas que uso */}
          <div className="w-full flex flex-col items-center md:items-start gap-[30px]">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t("about.tools.title")}
            </h2>
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-xs md:text-md text-neutral-700 dark:text-neutral-300">
              {[
                "Visual Studio Code",
                "Git & GitHub",
                "Figma",
                "Wrap",
                "Firebase Console",
                "Firebase Studio",
                "Vercel",
                "Cloudflare",
                "Google Cloud",
                "Namecheap",
                "Google Search Console",
                "Google Analytics 4",
                "React Developer Tools",
                // "Postman",
              ].map((tool) => (
                <li
                  key={tool}
                  className="px-2 py-0.5 md:py-1 border border-neutral-600 rounded-lg"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full hidden h-px bg-neutral-200 dark:bg-neutral-800" />
          {/* MÉTODOS DE PAGO */}
          <div className="w-full hidden flex-col items-center md:items-start gap-[30px]">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Métodos de pago
            </h2>
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-xs md:text-md text-neutral-700 dark:text-neutral-300">
              {/* <img src="/icons/paypal.svg" alt="PayPal" className="w-8 h-8" /> */}
              {/* <span>PayPal (hello@danielvargas.dev)</span> */}
              {[
                "PayPal",
                "Stripe",
                "Visa",
                "UglyCash",
                // "GitHub",
                // "Netlify",
                // "Vercel",
              ].map((tool) => (
                <li
                  key={tool}
                  className="px-3 py-1 border border-neutral-600 rounded-lg"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full hidden h-px bg-neutral-200 dark:bg-neutral-800" />
          {/* ¿QUÉ MÁS PODÉS AGREGAR? */}
          <div className="w-full hidden flex-col items-center md:items-start gap-[30px]">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              ¿Por qué elegirme?
            </h2>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-base space-y-1">
              <li className="text-center md:text-left">
                Entrega puntual con comunicación clara y constante.
              </li>
              <li className="text-center md:text-left">
                Orientación UX/UI con enfoque responsivo desde el inicio.
              </li>
              <li className="text-center md:text-left">
                Soluciones escalables que evolucionan con tu negocio.
              </li>
              <li className="text-center md:text-left">
                Apoyo post-lanzamiento según tus necesidades.
              </li>
            </ul>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
