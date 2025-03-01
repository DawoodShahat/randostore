import { appSettings } from "@/lib/settings";

interface Item {
  id?: number;
  name: string;
  price: number;
  img: string;
}

const API_BASE_URL = appSettings.baseURL;

export const getAllItems = async (): Promise<Item[]> => {
  const response = await fetch(`${API_BASE_URL}/items`);
  return response.json();
};

export const getItemById = async (id: number): Promise<Item> => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return response.json();
};

export const createItem = async (item: Omit<Item, "id">): Promise<Item> => {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const updateItem = async (item: Item): Promise<Item> => {
  if (!item.id) {
    throw new Error("Item ID is required for updates");
  }

  const response = await fetch(`${API_BASE_URL}/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const deleteItem = async (id: number): Promise<Item> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
