"use client";

import { defaultStock } from "@/components/StockForm";
import StockPage from "@/components/StockPage";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StockOut = () => {
  const { data, stockOut } = useInventory();
  const [newStockOut, setNewStockOut] = useState<StockItem>(defaultStock);

  const handleStockOut = () => {
    const product = data.products.find(
      (p) => p.id === newStockOut.productId
    ) as Product;

    if (product?.qty >= newStockOut.qty) {
      stockOut(newStockOut);
      setNewStockOut({ id: uuidv4(), productId: "", qty: 0 });
    } else {
      alert("Sorry, there is no enough products to stock out!");
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
