"use client";

import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product } from "@/index";
import classNames from "classnames";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const getDefaultProduct = () => ({
  id: uuidv4(),
  name: "",
  qty: 0,
  time: new Date().toString(),
});

const ProductForm = () => {
  const { addProduct, data } = useInventory();
  const [newProduct, setNewProduct] = useState<Product>(getDefaultProduct());

  const buttonDisabled = !(newProduct.name && newProduct.qty);

  const handleAddProduct = () => {
    if (data.products.find((i) => i.name === newProduct.name)) {
      alert(`${newProduct.name} already exists`);
      return;
    }
    addProduct(newProduct);
    setNewProduct(getDefaultProduct());
  };

  return (
    <div
      className={classNames(
        commonClassName,
        "bg-indigo-500 flex justify-end sm:flex-row flex-col"
      )}
    >
      <label>
        Name
        <br />
        <input
          className={commonClassName}
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
      </label>
      <label>
        Quantity
        <br />
        <input
          className={commonClassName}
          type="number"
          placeholder="Available Quantity"
          value={newProduct.qty}
          onChange={(e) =>
            setNewProduct({ ...newProduct, qty: parseInt(e.target.value) })
          }
        />
      </label>
      <button
        disabled={buttonDisabled}
        className={classNames(commonClassName, {
          "bg-gray-200 border-gray-200 cursor-not-allowed": buttonDisabled,
        })}
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductForm;
