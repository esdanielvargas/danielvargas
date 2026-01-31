import {
  FalseHeader,
  Image,
  PageTitle,
  Section,
  SmartButton,
  Soap,
  Wrapper,
} from "../components";
import { useParams } from "react-router-dom";
import { getProjects } from "../database";
import { useTranslation } from "react-i18next";

export default function ProjectPage() {
  const { t } = useTranslation();
  const { path } = useParams();
  const projects = getProjects(t);
  const project = projects.find((project) => project.path === path);

  return (
    <>
      <FalseHeader page />
      <Section>
        <Wrapper>
          <PageTitle
            path={`/projects/${path}`}
            heading={project.title}
            caption={project.caption}
          />
          <div className="w-full space-y-2">
            <Image
              src={project.image}
              width={1200}
              height={720}
              alt="Preview del proyecto"
              className="w-300 max-h-[580px] border border-neutral-800"
            />
          </div>

          {/* 3. Sección de información */}
          <section className="w-full grid grid-cols-1 gap-8">
            <div>
              <h2 className="text-xl font-semibold font-sans mb-2">
                {t("common.label.caption")}
              </h2>
              <p className="leading-relaxed font-text text-neutral-400">
                {project.caption}
              </p>
            </div>

            {project.tech && (
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {t("common.label.technologies")}
                </h2>
                <div className="w-full flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Soap key={tech.id} {...tech} />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 4. Galería de capturas */}
          <section className="w-full hidden">
            <h2 className="text-xl font-semibold mb-4">Galería</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <img
                src="/ruta/preview1.png"
                alt="Pantalla 1"
                className="rounded-xl shadow"
              />
              <img
                src="/ruta/preview2.png"
                alt="Pantalla 2"
                className="rounded-xl shadow"
              />
            </div>
          </section>

          {/* 5. Enlaces de acción */}
          <div className="flex gap-4 justify-center">
            <SmartButton to="/projects">
              ← {t("common.action.go_back_projects")}
            </SmartButton>
            <SmartButton variant="secondary" href={project.link}>
              {t("common.action.visit_website")}
            </SmartButton>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
