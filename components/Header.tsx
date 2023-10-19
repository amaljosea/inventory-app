import { commonClassName } from "@/constant";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-center">
      <Link className={commonClassName} href="/">
        Main
      </Link>
      <Link className={commonClassName} href="/products">
        Products
      </Link>
      <Link className={commonClassName} href="/stock-in">
        Stock In
      </Link>
      <Link className={commonClassName} href="/stock-out">
        Stock Out
      </Link>
    </nav>
  );
};

export default Header;
