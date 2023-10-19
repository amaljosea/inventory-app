import Header from "./Header";
import { ReactNode } from "react";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
