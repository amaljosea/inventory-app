"use client";

import Layout from "@/components/Layout";
import { useInventory } from "@/context/InventoryContext";
import { Product } from "@/index";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const { data, addProduct, deleteProduct } = useInventory();
  const [newProduct, setNewProduct] = useState<Product>({
    id: uuidv4(),
    name: "",
    qty: 0,
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.qty) {
      addProduct(newProduct);
      setNewProduct({ id: uuidv4(), name: "", qty: 0 });
    }
  };

  return (
    <Layout title="Products">
      <ul>
        {data.products.map((product) => (
          <li
            className="border-solid border-2 border-indigo-600 m-2 rounded p-2 flex justify-between"
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
      <div className="border-solid border-2 border-indigo-600 m-2 rounded p-2">
        <input
          className="border-solid border-2 border-indigo-600 m-2 rounded p-2"
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          className="border-solid border-2 border-indigo-600 m-2 rounded p-2"
          type="number"
          placeholder="Available Quantity"
          value={newProduct.qty}
          onChange={(e) =>
            setNewProduct({ ...newProduct, qty: parseInt(e.target.value) })
          }
        />
        <button
          className="border-solid border-2 border-indigo-600 m-2 rounded p-2"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </Layout>
  );
};

export default Products;
