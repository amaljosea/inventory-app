"use client";

import Layout from "@/components/Layout";
import StockForm from "@/components/StockForm";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { StockItem } from "@/index";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const defaultStock = {
  id: uuidv4(),
  productId: "",
  qty: 0,
};

const StockIn = () => {
  const { data, stockIn } = useInventory();
  const [newStockIn, setNewStockIn] = useState<StockItem>(defaultStock);

  const handleStockIn = () => {
    stockIn(newStockIn);
    setNewStockIn(defaultStock);
  };

  return (
    <Layout title="Stock In">
      <div className="flex justify-center">
        {data.stockIns.length === 0 && <p>No Stock Ins</p>}
      </div>
      <ul>
        {data.stockIns.map((stockIn) => (
          <li className={commonClassName} key={stockIn.id}>
            Product ID: {stockIn.productId} (Qty: {stockIn.qty})
          </li>
        ))}
      </ul>
      <StockForm handleSubmit={handleStockIn} submitText="Stock In" />
    </Layout>
  );
};

export default StockIn;
