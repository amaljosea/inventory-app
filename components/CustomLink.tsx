import { commonClassName } from "@/constant";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      className={classNames(commonClassName, {
        "bg-blue-700 text-white": isActive,
      })}
      href={href}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
