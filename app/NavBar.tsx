import { link } from "fs";
import Link from "next/link";
import { FC } from "react";
import { BsFillBugFill } from "react-icons/bs";

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
              className='text-zinc-500 hover:text-zinc-800 transition-colors'>
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
