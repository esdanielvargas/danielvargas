import { useRef } from "react";
import { LangProvider, MenuProvider } from "../context";
import { Footer, Header, Main, Menu, ScrollToTop } from "../components";

export default function Layout() {
  const menuRef = useRef(null);

  return (
    <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <LangProvider>
        <MenuProvider>
          <ScrollToTop />
          <Header menuRef={menuRef} />
          <Menu menuRef={menuRef} />
          <Main />
          <Footer />
        </MenuProvider>
      </LangProvider>
    </div>
  );
}
