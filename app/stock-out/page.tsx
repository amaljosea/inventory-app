"use client";

import Layout from "@/components/Layout";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import classNames from "classnames";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StockOut = () => {
  const { data, stockOut } = useInventory();
  const [newStockOut, setNewStockOut] = useState<StockItem>({
    id: uuidv4(),
    productId: "",
    qty: 0,
  });

  const buttonDisabled = !(newStockOut.productId && newStockOut.qty);

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

  const productOptions = data.products.map((product: Product) => (
    <option key={product.id} value={product.id}>
      {product.name}
    </option>
  ));

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
      <div>
        <label>
          Product:
          <select
            className={commonClassName}
            value={newStockOut.productId}
            onChange={(e) =>
              setNewStockOut({
                ...newStockOut,
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
            value={newStockOut.qty}
            onChange={(e) =>
              setNewStockOut({ ...newStockOut, qty: parseInt(e.target.value) })
            }
          />
        </label>
        <button
          disabled={buttonDisabled}
          className={classNames(commonClassName, {
            "bg-gray-200 border-gray-200 cursor-not-allowed": buttonDisabled,
          })}
          onClick={handleStockOut}
        >
          Stock Out
        </button>
      </div>
    </Layout>
  );
};

export default StockOut;
