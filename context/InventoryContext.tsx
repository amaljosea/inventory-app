"use client";

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
  deleteProduct: (productId: string) => void;
  stockIn: (product: StockItem) => void;
  stockOut: (product: StockItem) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const InventoryProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<InventoryData>({
    products: [],
    stockIns: [],
    stockOuts: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const inventoryData = getInventoryData();
      setLoading(false);
      setData(inventoryData);
    };

    fetchData();
  }, []);

  const addProduct = (product: Product) => {
    const updatedProducts = [...data.products, product];
    const updatedData = { ...data, products: updatedProducts };
    setData(updatedData);
    updateInventoryData(updatedData);
  };

  const stockIn = (stock: StockItem) => {
    const updatedStockins = [...data.stockIns, stock];
    const updatedData = {
      ...data,
      stockIns: updatedStockins,
      products: data.products.map((product) => {
        if (product.id === stock.productId) {
          return {
            ...product,
            qty: product.qty + stock.qty,
          };
        }
        return product;
      }),
    };
    setData(updatedData);
    updateInventoryData(updatedData);
  };

  const stockOut = (stock: StockItem) => {
    const updatedStockouts = [...data.stockOuts, stock];
    const updatedData = {
      ...data,
      stockOuts: updatedStockouts,
      products: data.products.map((product) => {
        if (product.id === stock.productId) {
          return {
            ...product,
            qty: product.qty - stock.qty,
          };
        }
        return product;
      }),
    };
    setData(updatedData);
    updateInventoryData(updatedData);
  };

  const deleteProduct = (productId: string) => {
    const updatedProducts = data.products.filter(
      (product) => product.id !== productId
    );
    const updatedData = { ...data, products: updatedProducts };
    setData(updatedData);
    updateInventoryData(updatedData);
  };

  if (loading) {
    return "Loading...";
  }
  return (
    <InventoryContext.Provider
      value={{ data, addProduct, deleteProduct, stockIn, stockOut }}
    >
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
