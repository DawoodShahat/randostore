import { getAllItems } from "../items-api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllItemsQuery = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: () => getAllItems(),
  });
};
