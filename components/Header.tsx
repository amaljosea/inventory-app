import Link from "next/link";

const linkClassName = "border-solid border-2 border-indigo-600 m-2 rounded p-2";

const Header = () => {
  return (
    <nav className="flex justify-center">
      <Link className={linkClassName} href="/">
        Main
      </Link>
      <Link className={linkClassName} href="/products">
        Products
      </Link>
      <Link className={linkClassName} href="/stock-in">
        Stock In
      </Link>
      <Link className={linkClassName} href="/stock-out">
        Stock Out
      </Link>
    </nav>
  );
};

export default Header;
