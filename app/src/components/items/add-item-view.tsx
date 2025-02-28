import { Button } from "@/components/ui/button";
import { AddItemDialog } from "@/components/items/add-item-dialog";
export default function AddItemView() {
  return (
    <div className="flex justify-end mb-4">
      <AddItemDialog trigger={<Button variant="secondary">Add Item</Button>} />
    </div>
  );
}
