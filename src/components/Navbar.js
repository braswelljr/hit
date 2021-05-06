import { useState, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Brand from "../assets/logos/logom.png";
import BrandWhite from "../assets/logos/white-logo.png";
import NavLink from "./NavLink";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // add router links pages here
  const pages = [
    {
      path: `/`,
      name: `Home`
    },
    {
      path: `/academics`,
      name: `Academics`
    },
    {
      path: `/about`,
      name: `About`
    },
    {
      path: `/news`,
      name: `News`
    }
  ];

  useEffect(() => {
    const navbar = document.querySelector(`#navbar`);
    const brand = document.querySelector(`#brand`);
    const menu = document.querySelector(`#menu-list`);
    const tog = document.querySelector(`#tog`);
    const rm = () => {
      if (window.scrollY > 0) {
        // navbar.style.color = `#ffffff`;
        menu.classList.remove("md:text-[#4a4a4a]");
        menu.classList.remove("md:bg-white");
        menu.classList.add("md:bg-inherit");
        navbar.style.backgroundColor = `#4a4a4add`;
        brand.setAttribute(`src`, BrandWhite);
        menu.classList.add("md:text-white");
        tog.classList.add("text-white");
      } else {
        // navbar.style.color = `#4a4a4a`;
        menu.classList.add("md:text-[#4a4a4a]");
        menu.classList.remove("md:bg-inherit");
        menu.classList.add("md:bg-white");
        menu.classList.remove("md:text-white");
        navbar.style.backgroundColor = `#ffffff`;
        brand.setAttribute(`src`, Brand);
        tog.classList.remove("text-white");
      }
    };

    document.addEventListener("scroll", rm);
    return () => {
      document.removeEventListener("scroll", rm);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed inset-x-0 top-0 z-20 flex items-center bg-white justify-between px-8 py-4 md:px-12 xl:px-28 lg:px-20`}
    >
      <Link href={`/`}>
        <img src={Brand} id="brand" alt="Brand logo" className="block w-auto h-10 cursor-pointer" />
      </Link>

      {/* menu */}
      <div className="">
        <button
          type="button"
          id="tog"
          className={`focus:outline-none md:hidden  relative z-30 p-2 shadow ${
            open === true ? `bg-white text-current` : ``
          } rounded-full`}
          onClick={() => {
            open === true ? setOpen(false) : setOpen(true);
          }}
        >
          <Transition
            show={open}
            enter="ease-in duration-500"
            enterFrom="opacity-0 transform translate-x-3"
            enterTo="opacity-100 transform translate-x-0"
            leave="ease-out duration-400"
            leaveFrom="opacity-100 transform translate-x-0"
            leaveTo="opacity-0  transform -translate-x-3"
          >
            <HiX className="w-auto h-5 text-current" />
          </Transition>
          <Transition
            show={!open}
            enter="ease-in duration-500"
            enterFrom="opacity-0 transform translate-x-3"
            enterTo="opacity-100 transform translate-x-0"
            leave="ease-out duration-400"
            leaveFrom="opacity-100 transform translate-x-0"
            leaveTo="opacity-0  transform -translate-x-3"
          >
            <HiMenu className="w-auto h-5 text-current" />
          </Transition>
        </button>
        <button
          type="button"
          tabIndex={-1}
          className={`${
            open !== true ? `hidden` : `fixed`
          } inset-0 z-[19] bg-gray-800 w-full block md:hidden h-full bg-opacity-30`}
          onClick={() => (open === true ? setOpen(false) : setOpen(false))}
        ></button>
        <div
          id="menu-list"
          className={`fixed z-20 transform transition-all md:transition-none pb-20 md:pb-0 duration-300 ease-in md:translate-x-0 md:translate-y-0 inset-x-0 w-full h-[80vh] space-x-0 md:space-x-3 md:h-auto bg-secondary bg-opacity-90 md:bg-white text-white md:text-lg md:text-[#4a4a4a] top-0 flex items-center flex-col md:flex-row pt-28 md:pt-0 space-y-10 md:space-y-0 md:justify-between md:relative ${
            open === false ? `opacity-0` : `opacity-100`
          } md:opacity-100 pointer-events-auto`}
          style={{
            clipPath: `${open === false ? `circle(70vw at 90% -10%)` : `circle(90vh at 75% -25%)`}`,
            WebkitClipPath: `${
              open === false ? `circle(70vw at 90% -10%)` : `circle(90vh at 75% -25%)`
            }`
          }}
        >
          {pages.map(page => (
            <NavLink
              key={page.name.toString()}
              path={page.path}
              nameComponent={page.name.toUpperCase()}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
