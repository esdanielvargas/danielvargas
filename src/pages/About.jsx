import { useTranslation } from "react-i18next";
import { FalseHeader, HeroAbout, PageMeta, Section, Wrapper } from "../components";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        path="about"
        title={t("about.title")}
        caption={t("about.caption")}
      />
      <FalseHeader page />
      <Section>
        <Wrapper>
          <HeroAbout />
          {/* tecnologías */}
          <div className="w-full flex flex-col items-center md:items-start gap-7.5">
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
                "Stripe",
                "PayPal",
                "Sass",
                "GitHub",
              ].map((tech) => (
                <li
                  key={tech}
                  className="px-2 py-0.5 md:py-1 border border-neutral-600 rounded-lg"
                >
                  <span className="font-grotesk">{tech}</span>
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
              ].map((tool) => (
                <li
                  key={tool}
                  className="px-2 py-0.5 md:py-1 border border-neutral-600 rounded-lg"
                >
                  <span className="font-grotesk">{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
