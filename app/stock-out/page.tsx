"use client";

import StockPage from "@/components/StockPage";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import React from "react";

const StockOut = () => {
  const { data, stockOut } = useInventory();

  const handleStockOut = (newStockOut: StockItem) => {
    const product = data.products.find(
      (p) => p.id === newStockOut.productId
    ) as Product;

    if (product.qty >= newStockOut.qty) {
      stockOut(newStockOut);
    } else {
      alert(`Sorry, there is only ${product.qty} products to stock out!`);
    }
  };

  return (
    <StockPage
      stocks={data.stockOuts}
      handleSubmit={handleStockOut}
      title="Stock Out"
    />
  );
};

export default StockOut;
