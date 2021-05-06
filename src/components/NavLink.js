import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, nameComponent, setOpen }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer px-3 py-1 ${
          router.asPath === `${href}` ? `text-primary` : `text-current`
        }  text-xl md:text-lg font-semibold`}
        onClick={e => {
          e.preventDefault();
          router.push(href);
          setOpen(false);
        }}
      >
        {nameComponent}
      </div>
    </Link>
  );
};

export default NavLink;
