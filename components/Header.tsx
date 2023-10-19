import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-center">
      <Link className="" href="/products">
        Products
      </Link>
      <Link href="/stock-in">Stock In</Link>
      <Link href="/stock-out">Stock Out</Link>
    </nav>
  );
};

export default Header;
