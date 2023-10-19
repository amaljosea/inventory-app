import { InventoryData } from "..";

const LOCAL_STORAGE_KEY = "inventory-data";
export function getInventoryData(): InventoryData {
  const storedString = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (storedString) {
    return JSON.parse(storedString);
  }

  return {
    products: [],
    stockIns: [],
    stockOuts: [],
  };
}

export function updateInventoryData(newData: InventoryData): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
}
