import { commonClassName } from "@/constant";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <nav className="flex justify-center">
      <CustomLink href="/">Main</CustomLink>
      <CustomLink href="/products">Products</CustomLink>
      <CustomLink href="/stock-in">Stock In</CustomLink>
      <CustomLink href="/stock-out">Stock Out</CustomLink>
    </nav>
  );
};

export default Header;
