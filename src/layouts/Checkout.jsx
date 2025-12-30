import { Link } from "react-router-dom";
import { Main, Wrapper } from "../components";
import { ChevronLeft, CloudUpload, Trash2 } from "lucide-react";

export default function Checkout() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full min-h-22.5 flex items-center justify-center border-b border-neutral-200">
        <Wrapper className="!flex-row !my-0">
          <div className="w-full flex items-center justify-start">
            <button
              type="button"
              title="Retroceder"
              onClick={() => window.history.back()}
              className="size-10 cursor-pointer flex items-center justify-center text-sm font-grotesk rounded-lg border border-neutral-200 bg-neutral-100 hover:shadow-sm"
            >
              <ChevronLeft strokeWidth={1.5} className="-ml-0.5" />
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <Link to="/" className="flex items-center justify-start">
              <div className="font-bold text-xl font-sans min-w-max text-neutral-950 dark:text-neutral-50">
                DANIEL VARGAS
              </div>
            </Link>
          </div>
          <div className="w-full flex items-center justify-end">
            <button
              type="button"
              title="Este formulario se guardará en la nube"
            //   onClick={() => window.history.back()}
              className="size-10 cursor-pointer flex items-center justify-center text-sm font-grotesk rounded-lg border border-neutral-200 bg-neutral-100 hover:shadow-sm"
            >
              <Trash2 size={20} strokeWidth={1.5} />
            </button>
          </div>
        </Wrapper>
      </div>
      <Main />
    </div>
  );
}
