import { useGetAllItemsQuery } from "./api/queries/use-get-all-items-query";

function App() {
  const { data, isLoading, error } = useGetAllItemsQuery();
  console.log(data);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
