"use client";

import Layout from "@/components/Layout";
import { useInventory } from "@/context/InventoryContext";

const Main = () => {
  const { data } = useInventory();

  return (
    <Layout title="Main ">
      <div className="flex items-center justify-center flex-col">
        <p>Welcome to the inventory app</p>

        <div className="m-5">
          <p>Types of products: {data.products.length}</p>
          <p>
            Total no of stock:{" "}
            {data.products.reduce((acc, i) => acc + i.qty, 0)}
          </p>
          <p>Total no Stock Ins: {data.stockIns.length}</p>
          <p>Total no Stock Outs: {data.stockOuts.length}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
