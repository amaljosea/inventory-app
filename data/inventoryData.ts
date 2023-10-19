import { InventoryData } from "..";

export function getInventoryData(): InventoryData {
  return {
    products: [],
    stockIns: [],
    stockOuts: [],
  };
}

export function updateInventoryData(newData: InventoryData): void {}
