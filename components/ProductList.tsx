"use client";

import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import classNames from "classnames";
import React from "react";

export const ProductList = () => {
  const { data, deleteProduct } = useInventory();

  return (
    <>
      {!data.products.length ? (
        <div className="flex justify-center">
          <p>No products</p>
        </div>
      ) : (
        <ul>
          <li className={classNames("p-2 flex justify-between")}>
            <span className="flex-1">Name</span>
            <span className="flex-1">Quantity</span>
            <span className="flex-1" />
          </li>
          {data.products.map((product) => (
            <li
              className={classNames(commonClassName, "flex justify-between")}
              key={product.id}
            >
              <span className="flex-1">{product.name}</span>
              <span className="flex-1">{product.qty}</span>
              <button
                className="text-red-700 font-bold flex-1"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
