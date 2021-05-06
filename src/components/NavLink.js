import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, nameComponent, setOpen }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer px-3 py-1 ${
          router.pathname == href ? `text-primary` : `text-current`
        } md:text-current  text-xl md:text-lg font-semibold`}
        onClick={() => {
          setOpen(false);
        }}
      >
        {nameComponent}
      </div>
    </Link>
  );
};

export default NavLink;
