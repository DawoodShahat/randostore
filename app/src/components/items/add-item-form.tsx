import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddItemMutation } from "@/api/mutations/use-add-item-mutation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(50),
  price: z
    .string({ invalid_type_error: "Price must be a number" })
    .min(1, { message: "Price is required" })
    .pipe(z.coerce.number()),
  img: z.string().url({ message: "Invalid image URL" }),
});

export default function AddItemForm({
  closeDialog,
}: {
  closeDialog: () => void;
}) {
  const queryClient = useQueryClient();
  const { mutate: mutateAddItem, isPending } = useAddItemMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      toast.success("Item added successfully", {
        duration: 2000,
        position: "top-center",
      });
      closeDialog();
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      img: "https://placehold.co/400",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutateAddItem(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="Item Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="img"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add Item"}
        </Button>
      </form>
    </Form>
  );
}
