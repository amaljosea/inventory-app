export interface Product {
  id: string;
  name: string;
  qty: number;
}

export interface StockItem {
  id: number;
  productId: number;
  qty: number;
}

export interface InventoryData {
  products: Product[];
  stockIns: StockItem[];
  stockOuts: StockItem[];
}
