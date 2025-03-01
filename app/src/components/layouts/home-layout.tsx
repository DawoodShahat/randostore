import { Outlet } from "react-router";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

export default function HomeLayout() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <main className="py-8 px-7 md:px-0">
        <Outlet />
      </main>
    </>
  );
}
