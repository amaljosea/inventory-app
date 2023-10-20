"use client";

import Layout from "@/components/Layout";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import classNames from "classnames";
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

  const buttonDisabled = !(newStockIn.productId && newStockIn.qty);

  const handleStockIn = () => {
    stockIn(newStockIn);
    setNewStockIn(defaultStock);
  };

  const productOptions = data.products.map((product: Product) => (
    <option key={product.id} value={product.id}>
      {product.name}
    </option>
  ));

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
        <button
          disabled={buttonDisabled}
          className={classNames(commonClassName, {
            "bg-gray-200 border-gray-200 cursor-not-allowed": buttonDisabled,
          })}
          onClick={handleStockIn}
        >
          Stock In
        </button>
      </div>
    </Layout>
  );
};

export default StockIn;
