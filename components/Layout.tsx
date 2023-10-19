import Header from "./Header";
import { ReactNode } from "react";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-red-700 font-bold ">{title}</h1>
      <Header />
      <div className="border-solid border-2 border-grey-600 m-2 rounded p-2 drop-shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
