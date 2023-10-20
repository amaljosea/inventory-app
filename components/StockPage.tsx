"use client";

import Layout from "@/components/Layout";
import { StockFormProps, StockForm } from "@/components/StockForm";
import { commonClassName } from "@/constant";
import { StockItem } from "@/index";
import React from "react";

type StockPageProps = {
  stocks: StockItem[];
} & StockFormProps;

const StockPage = ({ stocks, handleSubmit, title }: StockPageProps) => {
  return (
    <Layout title={title}>
      <div className="flex justify-center">
        {stocks.length === 0 && <p>No {title}</p>}
      </div>
      <ul>
        {stocks.map((stock) => (
          <li className={commonClassName} key={stock.id}>
            Product ID: {stock.productId} (Qty: {stock.qty})
          </li>
        ))}
      </ul>
      <StockForm handleSubmit={handleSubmit} title={title} />
    </Layout>
  );
};

export default StockPage;
