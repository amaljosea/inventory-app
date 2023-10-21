"use client";

import Layout from "@/components/Layout";
import { StockFormProps, StockForm } from "@/components/StockForm";
import { useInventory } from "@/context/InventoryContext";
import { StockItem } from "@/index";
import classNames from "classnames";
import React, { useMemo } from "react";
import { StockCard } from "./StockCard";

type StockPageProps = {
  stocks: StockItem[];
} & StockFormProps;

type ProductIdToNameMapType = { [key: string]: string };

const StockPage = ({ stocks, handleSubmit, title }: StockPageProps) => {
  const { data } = useInventory();

  const productIdToNameMap = useMemo(
    () =>
      data.products.reduce((acc, item) => {
        acc[item.id] = item.name;
        return acc;
      }, {} as ProductIdToNameMapType),
    [data]
  );

  const reversedStock = [...stocks].reverse();

  return (
    <Layout title={title}>
      {stocks.length === 0 ? (
        <div className="flex justify-center">
          <p>No {title}</p>
        </div>
      ) : (
        <ul>
          <li className={classNames("p-2 flex justify-between")}>
            <span className="flex-1 p-2">Name</span>
            <span className="flex-1 p-2">Quantity</span>
            <span className="flex-1 p-2">Created time</span>
          </li>
          {reversedStock.length > 10 && <p className="p-2">Latest</p>}
          {reversedStock.slice(0, 10).map((stock) => (
            <StockCard
              key={stock.id}
              name={productIdToNameMap[stock.productId]}
              stock={stock}
            />
          ))}
          {reversedStock.length > 10 && (
            <>
              <p className="p-2">Old stock</p>
              {reversedStock.slice(10).map((stock) => (
                <StockCard
                  key={stock.id}
                  name={productIdToNameMap[stock.productId]}
                  stock={stock}
                />
              ))}
            </>
          )}
        </ul>
      )}
      <StockForm handleSubmit={handleSubmit} title={title} />
    </Layout>
  );
};

export default StockPage;
