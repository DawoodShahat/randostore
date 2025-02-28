import { Outlet } from "react-router";
import Navbar from "@/components/navbar";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className="py-8">
        <Outlet />
      </main>
    </>
  );
}
