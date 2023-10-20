"use client";

import Layout from "@/components/Layout";
import { StockFormProps, StockForm } from "@/components/StockForm";
import { commonClassName } from "@/constant";
import { useInventory } from "@/context/InventoryContext";
import { StockItem } from "@/index";
import classNames from "classnames";
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
      {stocks.length === 0 ? (
        <div className="flex justify-center">
          <p>No {title}</p>
        </div>
      ) : (
        <ul>
          <li className={classNames("p-2 flex justify-between")}>
            <span>Name</span>
            <span>Quantity</span>
          </li>
          {stocks.map((stock) => (
            <li
              className={classNames(commonClassName, "flex justify-between")}
              key={stock.id}
            >
              <span>
                {productIdToNameMap[stock.productId] || "Deleted product"}
              </span>
              <span>{stock.qty}</span>
            </li>
          ))}
        </ul>
      )}
      <StockForm handleSubmit={handleSubmit} title={title} />
    </Layout>
  );
};

export default StockPage;
