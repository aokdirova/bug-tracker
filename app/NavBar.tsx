"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { FC } from "react";
import { BsFillBugFill } from "react-icons/bs";
import classnames from "classnames";

interface NavBarProps {}
const links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issues",
    href: "/issues",
  },
];

const NavBar: FC<NavBarProps> = ({}) => {
  const pathname = usePathname();

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <BsFillBugFill />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={classnames({
                "text-zinc-400": link.href !== pathname,
                "text-zinc-900": link.href === pathname,
                "hover: text-zinc-800 transition-colors": true,
              })}>
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
