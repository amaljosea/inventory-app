"use client";

import Layout from "@/components/Layout";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StockIn = () => {
  const { data, stockIn } = useInventory();
  const [newStockIn, setNewStockIn] = useState<StockItem>({
    id: uuidv4(),
    productId: 0,
    qty: 0,
  });

  const handleStockIn = () => {
    if (newStockIn.productId && newStockIn.qty) {
      stockIn(newStockIn);
      setNewStockIn({ id: uuidv4(), productId: 0, qty: 0 });
    }
  };

  const productOptions = data.products.map((product: Product) => (
    <option key={product.id} value={product.id}>
      {product.name}
    </option>
  ));

  return (
    <Layout title="Stock In">
      <ul>
        {data.stockIns.map((stockIn) => (
          <li className={commonClassName} key={stockIn.id}>
            Product ID: {stockIn.productId} (Qty: {stockIn.qty})
          </li>
        ))}
      </ul>
      <div>
        <label>
          Product:
          <select
            className={commonClassName}
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
            className={commonClassName}
            type="number"
            value={newStockIn.qty}
            onChange={(e) =>
              setNewStockIn({ ...newStockIn, qty: parseInt(e.target.value) })
            }
          />
        </label>
        <button className={commonClassName} onClick={handleStockIn}>
          Stock In
        </button>
      </div>
    </Layout>
  );
};

export default StockIn;
