"use client";

import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product, StockItem } from "@/index";
import classNames from "classnames";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const defaultStock = {
  id: uuidv4(),
  productId: "",
  qty: 0,
};

export type StockFormProps = {
  handleSubmit: (stock: StockItem) => void;
  title: string;
};

export const StockForm = ({ handleSubmit, title }: StockFormProps) => {
  const { data } = useInventory();
  const [newStock, setNewStock] = useState<StockItem>(defaultStock);

  const buttonDisabled = !(newStock.productId && newStock.qty);

  const productOptions = data.products.map((product: Product) => (
    <option key={product.id} value={product.id}>
      {product.name}
    </option>
  ));

  return (
    <div>
      <label>
        Product:
        <select
          className={commonClassName}
          value={newStock.productId}
          onChange={(e) =>
            setNewStock({
              ...newStock,
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
          value={newStock.qty}
          onChange={(e) =>
            setNewStock({ ...newStock, qty: parseInt(e.target.value) })
          }
        />
      </label>
      <button
        disabled={buttonDisabled}
        className={classNames(commonClassName, {
          "bg-gray-200 border-gray-200 cursor-not-allowed": buttonDisabled,
        })}
        onClick={() => {
          handleSubmit(newStock);
        }}
      >
        {title}
      </button>
    </div>
  );
};
