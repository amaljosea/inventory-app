"use client";

import { defaultStock } from "@/components/StockForm";
import StockPage from "@/components/StockPage";
import { useInventory } from "@/context/InventoryContext";
import { StockItem } from "@/index";
import React, { useState } from "react";

const StockIn = () => {
  const { data, stockIn } = useInventory();
  const [newStockIn, setNewStockIn] = useState<StockItem>(defaultStock);

  const handleStockIn = () => {
    stockIn(newStockIn);
    setNewStockIn(defaultStock);
  };

  return (
    <StockPage
      stocks={data.stockIns}
      handleSubmit={handleStockIn}
      title="Stock In"
    />
  );
};

export default StockIn;
