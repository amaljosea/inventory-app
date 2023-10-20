"use client";

import StockPage from "@/components/StockPage";
import { useInventory } from "@/context/InventoryContext";
import { StockItem } from "@/index";
import React, { useState } from "react";

const StockIn = () => {
  const { data, stockIn } = useInventory();

  const handleStockIn = (newStockIn: StockItem) => {
    stockIn(newStockIn);
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
