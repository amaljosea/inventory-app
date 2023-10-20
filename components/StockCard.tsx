"use client";

import { commonClassName } from "@/constant";
import classNames from "classnames";
import React from "react";
import { StockItem } from "..";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type StockStockCardProps = {
  name: string;
  stock: StockItem;
};

export const StockCard = ({
  name = "Deleted product",
  stock,
}: StockStockCardProps) => {
  return (
    <li className={classNames(commonClassName, "flex justify-between")}>
      <span className="flex-1 p-2">{name}</span>
      <span className="flex-1 p-2">{stock.id}</span>
      <span className="flex-1 p-2">{stock.qty}</span>
      <span className="flex-1 p-2">{dayjs(stock.time).fromNow()}</span>
    </li>
  );
};
