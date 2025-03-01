import { useMutation } from "@tanstack/react-query";
import { createItem } from "../items-api";

export const useAddItemMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({
    mutationFn: createItem,
    onSuccess,
  });
};
