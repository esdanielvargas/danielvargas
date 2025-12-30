import { FalseHeader } from "../components";
import { Hero, Plans, Projects, Services } from "../sections";

export default function Home() {
  return (
    <>
      <Hero line />
      <Services line />
      <Plans line />
      <Projects />
      {/* <About /> */}
    </>
  );
}
