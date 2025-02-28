import { getAllItems } from "../items-api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllItemsQuery = () => {
  const query = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItems(),
  });

  const items = query.data?.map((item) => ({
    ...item,
    priceFormatted: item.price.toLocaleString("en-US"),
  }));

  return { items, ...query };
};
