"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";

const navLinks = [
  {
    title: "À propos",
    href: "#about",
  },
  {
    title: "Projet",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opcity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {" "}
          E.K{" "}
        </Link>
        <div className="mobile-menu block md:hidden">
          {openMenu ? (
            <button
              onClick={() => setOpenMenu(false)}
              className="flex items-center px-3 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpenMenu(true)}
              className="flex items-center px-3 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openMenu && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
