"use client";

import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import { ProductList } from "@/components/ProductList";
import React from "react";

const Products = () => {
  return (
    <Layout title="Products">
      <ProductList />
      <ProductForm />
    </Layout>
  );
};

export default Products;
