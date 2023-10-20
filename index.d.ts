export interface Product {
  id: string;
  name: string;
  qty: number;
  time: string;
}

export interface StockItem {
  id: string;
  productId: string;
  qty: number;
  time: string;
}

export interface InventoryData {
  products: Product[];
  stockIns: StockItem[];
  stockOuts: StockItem[];
}
