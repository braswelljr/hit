import React from "react";
import Link from "next/link";

const NavLink = ({ path, nameComponent, setOpen }) => {
  return (
    <Link
      href={{
        pathname: path
      }}
    >
      <div
        className={`cursor-pointer px-3 py-1 md:text-current  text-xl md:text-lg font-semibold`}
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
