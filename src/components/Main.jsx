import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="w-full flex flex-col">
      <Outlet />
    </main>
  );
}
