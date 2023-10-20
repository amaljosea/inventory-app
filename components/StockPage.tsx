"use client";

import Layout from "@/components/Layout";
import { StockFormProps, StockForm } from "@/components/StockForm";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { StockItem } from "@/index";
import React from "react";

type StockPageProps = {
  stocks: StockItem[];
} & StockFormProps;

type ProductIdToNameMapType = { [key: string]: string };
const initialProductIdToNameMap = {} as ProductIdToNameMapType;

const StockPage = ({ stocks, handleSubmit, title }: StockPageProps) => {
  const { data } = useInventory();

  const productIdToNameMap = data.products.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
  }, initialProductIdToNameMap);

  return (
    <Layout title={title}>
      <div className="flex justify-center">
        {stocks.length === 0 && <p>No {title}</p>}
      </div>
      <ul>
        {stocks.map((stock) => (
          <li className={commonClassName} key={stock.id}>
            Product: {productIdToNameMap[stock.productId]} (Qtys: {stock.qty})
          </li>
        ))}
      </ul>
      <StockForm handleSubmit={handleSubmit} title={title} />
    </Layout>
  );
};

export default StockPage;
