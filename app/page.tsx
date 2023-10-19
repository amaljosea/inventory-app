import Link from "next/link";

const Main = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link href="/products">Products</Link>
      <Link href="/stock-in">Stock In</Link>
      <Link href="/stock-out">Stock Out</Link>
    </div>
  );
};

export default Main;
