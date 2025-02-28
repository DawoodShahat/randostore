import Items from "@/components/items";
import AddItemView from "@/components/items/add-item-view";

function Home() {
  return (
    <div className="container mx-auto">
      <AddItemView />
      <Items />
    </div>
  );
}

export default Home;
