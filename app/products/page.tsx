"use client";

import Header from "@/components/Header";
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
    <div>
      <h1>Products Page</h1>
      <Header />
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            {product.name} (Qty: {product.qty})
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Available Quantity"
          value={newProduct.qty}
          onChange={(e) =>
            setNewProduct({ ...newProduct, qty: parseInt(e.target.value) })
          }
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default Products;
