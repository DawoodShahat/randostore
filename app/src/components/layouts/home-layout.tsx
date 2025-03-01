import { Outlet } from "react-router";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

export default function HomeLayout() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <main className="py-8">
        <Outlet />
      </main>
    </>
  );
}
