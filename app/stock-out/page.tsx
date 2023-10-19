"use client";

import Layout from "@/components/Layout";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StockOut = () => {
  const { data, stockOut } = useInventory();
  const [newStockIn, setNewStockIn] = useState<StockItem>({
    id: uuidv4(),
    productId: "",
    qty: 0,
  });

  const handleStockOut = () => {
    if (newStockIn.productId && newStockIn.qty) {
      stockOut(newStockIn);
      setNewStockIn({ id: uuidv4(), productId: "", qty: 0 });
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
                productId: e.target.value,
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
        <button className={commonClassName} onClick={handleStockOut}>
          Stock Out
        </button>
      </div>
    </Layout>
  );
};

export default StockOut;
