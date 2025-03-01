import { appSettings } from "@/lib/settings";
import { useCartStore } from "@/lib/stores/cart-store";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  priceFormatted: string;
};

const CartItem = ({
  id,
  name,
  price,
  img,
  quantity,
  priceFormatted,
}: CartItem) => {
  const url = img.includes("http") ? img : `${appSettings.baseURL}/${img}`;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={url} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <h1>{name}</h1>
          <p className="text-sm text-gray-500">Qty: {quantity}</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-medium text-sm">${priceFormatted}</h1>
      </div>
    </div>
  );
};

export default function CartItems() {
  const { items, getTotalPrice } = useCartStore();
  const navigate = useNavigate();
  const totalPrice = getTotalPrice().toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleCheckout = () => {
    navigate("/order-placed");
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
            priceFormatted={item.priceFormatted}
          />
        ))}
      </div>

      <div className="border-t my-3 pt-3 flex items-center justify-end">
        <h1>Total: {totalPrice}</h1>
      </div>

      <div className="flex items-center justify-end">
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  );
}
