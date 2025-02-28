import { useGetAllItemsQuery } from "@/api/queries/use-get-all-items-query";
import { appSettings } from "@/lib/settings";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

type Item = {
  id?: number;
  name: string;
  price: number;
  img: string;
  priceFormatted: string;
};

const Item = ({ id, name, priceFormatted, img, price }: Item) => {
  const url = `${appSettings.baseURL}/${img}`;

  return (
    <div className="border border-gray-300 rounded-xl p-4 w-fit">
      <img
        height={300}
        width={300}
        src={url}
        alt={name}
        className="rounded-xl h-[250px] object-cover"
      />
      <h1 className="text-lg font-medium mt-4">{name}</h1>
      <p className="text-sm text-gray-500">${priceFormatted}</p>

      <Button className="mt-4 w-full">Add to Cart</Button>
    </div>
  );
};

export default function Items() {
  const { items, isPending } = useGetAllItemsQuery();

  if (isPending) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 w-fit"
          >
            <Skeleton className="h-[250px] w-[270px] rounded-xl" />
            <Skeleton className="h-6 w-32 mt-4" />
            <Skeleton className="h-4 w-16 mt-2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {items?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          priceFormatted={item.priceFormatted}
          img={item.img}
          price={item.price}
        />
      ))}
    </div>
  );
}
