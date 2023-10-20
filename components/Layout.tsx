import Header from "./Header";
import { ReactNode } from "react";
import classNames from "classnames";
import { commonClassName } from "@/constant";
import { clearInventoryData } from "@/data/inventoryData";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-indigo-700 font-bold ">{title}</h1>
      <Header />
      <div className={classNames(commonClassName, "drop-shadow-md w-[90%]")}>
        {children}
      </div>
      <button onClick={clearInventoryData}>Clear Data</button>
    </div>
  );
};

export default Layout;
