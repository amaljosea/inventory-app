"use client";

import Layout from "@/components/Layout";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { Product } from "@/index";
import classNames from "classnames";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const { data, addProduct, deleteProduct } = useInventory();
  const [newProduct, setNewProduct] = useState<Product>({
    id: uuidv4(),
    name: "",
    qty: 0,
  });

  const buttonDisabled = !(newProduct.name && newProduct.qty);

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ id: uuidv4(), name: "", qty: 0 });
  };

  return (
    <Layout title="Products">
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
      <div className={commonClassName}>
        <input
          className={commonClassName}
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          className={commonClassName}
          type="number"
          placeholder="Available Quantity"
          value={newProduct.qty}
          onChange={(e) =>
            setNewProduct({ ...newProduct, qty: parseInt(e.target.value) })
          }
        />
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
    </Layout>
  );
};

export default Products;
