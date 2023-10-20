"use client";

import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import classNames from "classnames";
import React from "react";

export const ProductList = () => {
  const { data, deleteProduct } = useInventory();

  return (
    <>
      <div className="flex justify-center">
        {data.products.length === 0 && <p>No products</p>}
      </div>
      <ul>
        {data.products.map((product) => (
          <li
            className={classNames(commonClassName, "flex justify-between")}
            key={product.id}
          >
            {product.name} (Qty: {product.qty})
            <button
              className="text-red-700 font-bold"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
