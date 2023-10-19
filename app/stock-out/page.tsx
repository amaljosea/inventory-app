"use client";

import Layout from "@/components/Layout";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StockOut = () => {
  const { data, stockOut } = useInventory();
  const [newStockIn, setNewStockIn] = useState<StockItem>({
    id: uuidv4(),
    productId: 0,
    qty: 0,
  });

  const handleStockOut = () => {
    if (newStockIn.productId && newStockIn.qty) {
      stockOut(newStockIn);
      setNewStockIn({ id: uuidv4(), productId: 0, qty: 0 });
    }
  };

  const productOptions = data.products.map((product: Product) => (
    <option key={product.id} value={product.id}>
      {product.name}
    </option>
  ));

  return (
    <Layout title="Stock out">
      <ul>
        {data.stockOuts.map((stockIn) => (
          <li key={stockIn.id}>
            Product ID: {stockIn.productId} (Qty: {stockIn.qty})
          </li>
        ))}
      </ul>
      <div>
        <label>
          Product:
          <select
            value={newStockIn.productId}
            onChange={(e) =>
              setNewStockIn({
                ...newStockIn,
                productId: parseInt(e.target.value),
              })
            }
          >
            <option value={0}>Select a Product</option>
            {productOptions}
          </select>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={newStockIn.qty}
            onChange={(e) =>
              setNewStockIn({ ...newStockIn, qty: parseInt(e.target.value) })
            }
          />
        </label>
        <button onClick={handleStockOut}>Stock Out</button>
      </div>
    </Layout>
  );
};

export default StockOut;
