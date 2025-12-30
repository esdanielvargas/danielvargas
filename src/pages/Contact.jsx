import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center">
        <div className="w-full max-w-[1200px] m-[30px] flex flex-col items-center">
          <h1>Formulario de Contacto</h1>
          {plan && (
            <p className="text-neutral-500 my-4">
              Estás solicitando el plan: <strong>{plan}</strong>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
