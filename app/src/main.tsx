import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeLayout from "@/components/layouts/home-layout.tsx";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home.tsx";
import Cart from "@/pages/cart.tsx";
import OrderPlaced from "@/pages/order-placed.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-placed" element={<OrderPlaced />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
