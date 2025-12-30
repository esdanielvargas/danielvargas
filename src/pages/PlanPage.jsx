import { useParams } from "react-router-dom";
import { getPlans } from "../database";
import { useTranslation } from "react-i18next";
import { Image, Wrapper } from "../components";
import { MoveLeft } from "lucide-react";
import NoFound from "./NoFound";

export default function PlanPage() {
  const { t } = useTranslation();
  const { path } = useParams();
  const plans = getPlans(t);
  const plan = plans.find((plan) => plan.path === path);

  if (!plan) {
    return (
      <>
        <div className="w-full min-h-22.5 sticky top-px border-b border-neutral-900" />
        <NoFound />
      </>
    );
  }

  return (
    <>
      <div className="w-full min-h-22.5 sticky top-px border-b border-neutral-900" />
      <section className="w-full flex justify-center">
        <Wrapper>
          <div className="w-full hidden gap-4">
            <div className="w-150 flex flex-col gap-6 sticky top-0 border-r border-neutral-900">
              <div className="w-full flex items-center justify-start">
                <div className="flex items-center gap-1.5 cursor-pointer text-sm text-neutral-400 hover:text-neutral-100 transition-all duration-300 ease-out">
                  <MoveLeft size={18} strokeWidth={1.5} />
                  Volver a los planes
                </div>
              </div>
              <div className="w-full">
                <h1 className="text-4xl font-bold">{plan.title}</h1>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full aspect-square">
                <Image src={plan.image} alt={plan.title} title={plan.title} />
              </div>
              <div className="w-full">
                <p className="text-lg">{plan.description}</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
