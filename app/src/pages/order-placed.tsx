import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useCartStore } from "@/lib/stores/cart-store";
import { useEffect } from "react";
export default function OrderPlaced() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid place-content-center pt-10">
        <h1 className="text-4xl font-bold text-center">
          We have received your order
        </h1>
        <p className="text-gray-500 text-center mt-1 mb-4">
          Your order has been placed successfully. We will notify you once it is
          shipped.
        </p>
        <Button className="w-fit mx-auto" asChild>
          <Link to="/">Explore more items</Link>
        </Button>
      </div>
    </div>
  );
}
