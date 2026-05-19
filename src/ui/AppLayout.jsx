import { Outlet } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  );
}
