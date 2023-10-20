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
            <span>Name</span>
            <span>Quantity</span>
            <span />
          </li>
          {data.products.map((product) => (
            <li
              className={classNames(commonClassName, "flex justify-between")}
              key={product.id}
            >
              <span>{product.name}</span>
              <span>{product.qty}</span>
              <button
                className="text-red-700 font-bold"
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
