export interface Product {
  id: string;
  name: string;
  qty: number;
}

export interface StockItem {
  id: string;
  productId: string;
  qty: number;
}

export interface InventoryData {
  products: Product[];
  stockIns: StockItem[];
  stockOuts: StockItem[];
}
