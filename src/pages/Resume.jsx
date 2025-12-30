import {
  BriefcaseBusiness,
  Folder,
  GraduationCap,
  Languages,
  Settings,
  Target,
} from "lucide-react";
import { Heading, Image, ResumeItem, Soap, Wrapper } from "../components";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t } = useTranslation();

  const habilidades = [
    {
      show: true,
      title: "HTML5",
      id: "PqvxNpKr7lFMZG",
    },
    {
      show: true,
      title: "CSS3",
      id: "cHzNTQVSWvjacl",
    },
    {
      show: true,
      title: "JavaScript",
      id: "NMhj7FlpsYa85E",
    },
    {
      show: true,
      title: "React",
      id: "jZtsXFgielyPKH",
    },
    {
      show: true,
      title: "Vite",
      id: "OTxhonPjDuvQw2",
    },
    {
      show: !true,
      title: "Next js",
      id: "fMoYjQxLd23Qk2",
    },
    {
      show: true,
      title: "Tailwind CSS",
      id: "1YJ2bRFzUaZiKV",
    },
    {
      show: !true,
      title: "Git",
      id: "LxzYlT0kqmF76w",
    },
    {
      show: !true,
      title: "GitHub",
      id: "2LMiT5P4RZtC5d",
    },
    {
      show: true,
      title: "Firebase",
      id: "8TbQqxzlx3EG3o",
    },
    {
      show: true,
      title: "Sas",
      id: "DPg4EMiRrryDFc",
    },
    {
      show: !true,
      title: "Figma",
      id: "mKrAOJpFiK51mB",
    },
    {
      show: true,
      title: "Diseño UX/UI",
      id: "9HRTg7uHe6Ek30",
    },
    {
      show: true,
      title: "Diseño responsivo",
      id: "o7inGfWniFas8B",
    },
    {
      show: true,
      title: "Cloudflare",
      id: "IcNg4QpXp7WSzq",
    },
    {
      show: true,
      title: "Namecheap",
      id: "TdudbKM9hNYxET",
    },
    {
      show: true,
      title: "Google Analytics",
      id: "PmrT9EpRJJaupm",
    },
    {
      show: true,
      title: "Google Search Console",
      id: "i4SO149CEFAgM5",
    },
    {
      show: !true,
      title: "Comunicación efectiva",
      id: "i9lK34NLAQ4YMI",
    },
  ];

  const idiomas = [
    {
      show: !true,
      title: t("resume.languages.list.spanish.title"),
      id: "3YhwF0VU5fevcX",
    },
    {
      show: !true,
      title: t("resume.languages.list.english.title"),
      id: "oIarThWJ2iOKf9",
    },
  ];

  const experiencia = [
    {
      order: 0,
      show: true,
      id: "DtKj5VsqSAbbM1",
      title: t("resume.experience.positions.0.title"),
      company: "Wow Solution 360",
      locale: t("resume.experience.positions.0.locale"),
      startDate: t("resume.experience.positions.0.date.start"),
      endDate: t("resume.experience.positions.0.date.end"),
      description: t("resume.experience.positions.0.description"),
    },
    {
      order: 1,
      show: true,
      id: "8gdCWqHVzFvLse",
      title: t("resume.experience.positions.1.title"),
      company: t("resume.experience.positions.1.company"),
      locale: t("resume.experience.positions.1.locale"),
      startDate: t("resume.experience.positions.1.date.start"),
      endDate: t("resume.experience.positions.1.date.end"),
      description: t("resume.experience.positions.1.description"),
    },
  ];

  const educacion = [
    {
      order: 0,
      show: true,
      id: "MFPywsr9SNvnE1",
      title: t("resume.education.degrees.0.title"),
      company: "Colegio Bautista Misión de Fe",
      locale: "Apopa",
      startDate: t("resume.education.degrees.0.date.start"),
      endDate: t("resume.education.degrees.0.date.end"),
      description: "",
    },
    {
      order: 1,
      show: true,
      id: "OFJkRwGwZh0RJq",
      title: t("resume.education.degrees.1.title"),
      company: "Universidad Tecnologíca de El Salvador",
      locale: "San Salvador",
      startDate: t("resume.education.degrees.1.date.start"),
      endDate: t("resume.education.degrees.1.date.start"),
      description: "",
    },
    {
      order: 2,
      show: false,
      id: "9ILKjwp7H2RVnQ",
      title: "Grado en Ingeniería Informática",
      company: "",
      locale: "España",
      startDate: "",
      endDate: "",
      description: "",
    },
  ];

  const proyectos = [
    {
      show: true,
      id: "25opw1oWJSG48Q",
      title: t("resume.projects.list.0.title"),
      company: "CG",
      locale: "San Salvador",
      startDate: t("resume.projects.list.0.date.start"),
      endDate: t("resume.projects.list.0.date.end"),
      description: t("resume.projects.list.0.description"),
    },
    {
      show: false,
      id: "efT8Ox7gN81ZTm",
      title: "Proyecto de Red Social (en desarrollo)",
      company: "Sin Nombre",
      locale: "San Salvador",
      startDate: "Oct. 2022",
      endDate: "Actualmente",
      description:
        "Desarrollo de una red social experimental enfocada en la interacción por afinidad y relaciones mutuas. El proyecto ha evolucionado a través de múltiples iteraciones y rediseños, permitiendo la aplicación de nuevas tecnologías y buenas prácticas de desarrollo. Implementación con React, TailwindCSS y Firebase. Funcionalidades: sistema de autenticación, feed personalizado, publicación de contenido, reacciones y arquitectura escalable para su futuro despliegue en producción.",
    },
  ];

  return (
    <>
      <title>{`Curriculum Vitae ~ Daniel Vargas`}</title>
      <link rel="canonical" href={`${window.location.origin}/about/resume`} />
      <picture className="w-full min-h-screen z-1 fixed flex items-center justify-center">
        <Image
          src="/images/hero-ii.png"
          alt="Fondo decorativo de Daniel Vargas"
          title="Fondo decorativo de Daniel Vargas"
          width={1905}
          height={996}
          loading="eager"
          aria-hidden="true"
          fetchPriority="high"
          className="w-full h-screen opacity-60"
        />
      </picture>
      <section className="w-full min-h-screen z-2 absolute flex justify-center bg-neutral-50/75 dark:bg-neutral-950/75 backdrop-blur-xl">
        <Wrapper className="!my-4 !gap-4">
          <div className="w-full flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col items-start font-grotesk">
              <div className="w-full flex items-center justify-center md:justify-start font-black text-xl md:text-2xl lg:text-3xl uppercase">
                Daniel Marcelo López Vargas
              </div>
              <div className="w-full flex items-center justify-center md:justify-start font-medium text-xs md:text-sm uppercase">
                {t("resume.title")}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end text-sm/6 font-grotesk">
              <div>hello@danielvargas.dev</div>
              <div>Apopa, San Salvador</div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between gap-4 lg:gap-6">
            <div className="w-full md:min-w-80 md:max-w-80 flex flex-col gap-4">
              <div className="w-full aspect-square">
                <Image
                  src="/images/formal.jpg"
                  alt="Foto de perfil de Daniel Vargas"
                  title="Foto de perfil de Daniel Vargas"
                  className="aspect-square"
                  fetchPriority="high"
                  loading="eager"
                  size={320}
                />
              </div>
              {/* Objetivo Profesional */}
              <div className="w-full flex flex-col gap-4">
                <Heading title={t("resume.profile.title")}>
                  <Target size={18} strokeWidth={2.5} />
                </Heading>
                <div className="w-full text-sm/6 font-grotesk text-justify text-neutral-600 dark:text-neutral-300">
                  {t("resume.profile.bio")}
                </div>
              </div>
              {/* Habilidades */}
              {habilidades.filter((a) => a.show).length > 0 && (
                <div className="w-full flex flex-col gap-4">
                  <Heading title={t("resume.skills.title")}>
                    <Settings size={18} strokeWidth={2.5} />
                  </Heading>
                  <div className="w-full flex flex-wrap gap-1.5">
                    {habilidades
                      .filter((item) => item.show)
                      .map((item, i) => (
                        <Soap key={item.id || i} {...item} />
                      ))}
                  </div>
                </div>
              )}
              {/* Idiomas */}
              {idiomas.filter((a) => a.show).length > 0 && (
                <div className="w-full flex flex-col gap-4">
                  <Heading title={t("resume.languages.title")}>
                    <Languages size={18} strokeWidth={2.5} />
                  </Heading>
                  <div className="w-full flex flex-wrap gap-1.5">
                    {idiomas
                      .filter((item) => item.show)
                      .map((item, i) => (
                        <Soap key={item.id || i} {...item} />
                      ))}
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              {/* Experiencia */}
              {experiencia.filter((a) => a.show).length > 0 && (
                <div className="w-full flex flex-col gap-4">
                  <Heading title={t("resume.experience.title")}>
                    <BriefcaseBusiness size={18} strokeWidth={2.5} />
                  </Heading>
                  <div className="w-full flex flex-col gap-4">
                    {experiencia
                      .filter((item) => item.show)
                      .sort((a, b) => b.order - a.order)
                      .map((item, i) => (
                        <ResumeItem key={item.id || i} {...item} />
                      ))}
                  </div>
                </div>
              )}
              {/* Educación */}
              {educacion.filter((a) => a.show).length > 0 && (
                <div className="w-full flex flex-col gap-4">
                  <Heading title={t("resume.education.title")}>
                    <GraduationCap size={18} strokeWidth={2.5} />
                  </Heading>
                  <div className="w-full flex flex-col gap-4">
                    {educacion
                      .filter((item) => item.show)
                      .sort((a, b) => b.order - a.order)
                      .map((item, i) => (
                        <ResumeItem key={item.id || i} {...item} />
                      ))}
                  </div>
                </div>
              )}
              {/* Proyectos */}
              {proyectos.filter((a) => a?.show).length > 0 && (
                <div className="w-full flex flex-col gap-4">
                  <Heading title={t("resume.projects.title")}>
                    <Folder size={18} strokeWidth={2.5} />
                  </Heading>
                  <div className="w-full flex flex-col gap-4">
                    {proyectos
                      .filter((item) => item.show)
                      .sort((a, b) => b.order - a.order)
                      .map((item, i) => (
                        <ResumeItem key={item.id || i} {...item} />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
