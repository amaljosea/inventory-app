"use client";

import Layout from "@/components/Layout";
import StockForm from "@/components/StockForm";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StockOut = () => {
  const { data, stockOut } = useInventory();
  const [newStockOut, setNewStockOut] = useState<StockItem>({
    id: uuidv4(),
    productId: "",
    qty: 0,
  });

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
    <Layout title="Stock out">
      <div className="flex justify-center">
        {data.stockOuts.length === 0 && <p>No Stock Outs</p>}
      </div>
      <ul>
        {data.stockOuts.map((stockIn) => (
          <li className={commonClassName} key={stockIn.id}>
            Product ID: {stockIn.productId} (Qty: {stockIn.qty})
          </li>
        ))}
      </ul>
      <StockForm handleSubmit={handleStockOut} submitText="Stock Out" />
    </Layout>
  );
};

export default StockOut;
