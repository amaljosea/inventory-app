import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, StockItem } from "..";
import { getInventoryData, updateInventoryData } from "@/data/inventoryData";

interface InventoryData {
  products: Product[];
  stockIns: StockItem[];
  stockOuts: StockItem[];
}

interface InventoryContextType {
  data: InventoryData;
  addProduct: (product: Product) => void;
  deleteProduct: (productId: number) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const InventoryProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<InventoryData>({
    products: [],
    stockIns: [],
    stockOuts: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const inventoryData = getInventoryData();
      setData(inventoryData);
    };

    fetchData();
  }, []);

  const addProduct = (product: Product) => {
    // Implement logic to add a product
    const updatedProducts = [...data.products, product];
    const updatedData = { ...data, products: updatedProducts };
    setData(updatedData);
    updateInventoryData(updatedData);
  };

  const deleteProduct = (productId: number) => {
    // Implement logic to delete a product
    const updatedProducts = data.products.filter(
      (product) => product.id !== productId
    );
    const updatedData = { ...data, products: updatedProducts };
    setData(updatedData);
    updateInventoryData(updatedData);
  };

  return (
    <InventoryContext.Provider value={{ data, addProduct, deleteProduct }}>
      {children}
    </InventoryContext.Provider>
  );
};

// Custom hook to use the context
export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within an InventoryProvider");
  }
  return context;
};
