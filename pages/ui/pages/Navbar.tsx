"use client";

import { MoreHorizontal, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MenuHoverAnimationOpen from "../components/MenuHoverAnimationOpen";
import MenuHoverAnimationClose from "../components/menuHoverAnimationClose";

const menuItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Collections", href: "/collections" },
  { id: 3, title: "About Us", href: "/about" },
  { id: 4, title: "Contact", href: "/contact" },
  { id: 5, title: "Blog", href: "/blog" },
];

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimationState, setMenuAnimationState] = useState("closed");
  const [closingItemIndex, setClosingItemIndex] = useState(-1);
  const [openingItemIndex, setOpeningItemIndex] = useState(-1);

  useEffect(() => {
    if (isMenuOpen) {
      setMenuAnimationState("opening");
      setClosingItemIndex(-1);
      setOpeningItemIndex(-1);
      const menuOpenTimer = setTimeout(() => {
        setMenuAnimationState("open");
        const itemOpenInterval = setInterval(() => {
          setOpeningItemIndex((prev) =>
            prev < menuItems.length - 1 ? prev + 1 : prev
          );
        }, 100);
        const finalOpenTimer = setTimeout(() => {
          clearInterval(itemOpenInterval);
          setOpeningItemIndex(menuItems.length);
        }, menuItems.length * 100);
        return () => {
          clearInterval(itemOpenInterval);
          clearTimeout(finalOpenTimer);
        };
      }, 300);
      return () => clearTimeout(menuOpenTimer);
    } else {
      setMenuAnimationState("closing");
      setClosingItemIndex(menuItems.length - 1);
      const itemCloseInterval = setInterval(() => {
        setClosingItemIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }, 100);
      const menuCloseTimer = setTimeout(() => {
        clearInterval(itemCloseInterval);
        setMenuAnimationState("closed");
        setOpeningItemIndex(-1);
      }, menuItems.length * 100 + 300);
      return () => {
        clearInterval(itemCloseInterval);
        clearTimeout(menuCloseTimer);
      };
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-6 py-6 bg-white text-black">
        <Link
          href="/"
          className="text-3xl px-10 font-normal font-['Jost'] tracking-[5px]"
        >
          MOHAIR
        </Link>
        <div className="flex items-center gap-12  ">
          <span className=" italic text-xl font-['Ibarra_Real_Nova'] text-black ">
            Call Us: +3266 427.5981
          </span>
          <div
            className="transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {!isMenuOpen && <MenuHoverAnimationOpen />}
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-all duration-500 ${
          menuAnimationState === "closed"
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div
          className="absolute top-6 right-6 p-2  transition-colors"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          {isMenuOpen && <MenuHoverAnimationClose />}
        </div>
        <nav className=" w-full max-w-6xl h-full px-20">
          <ul className="w-full h-full flex flex-col gap-8 items-start justify-center text-center">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`transform transition-all duration-300 ease-out ${
                  (menuAnimationState === "open" &&
                    openingItemIndex >= index) ||
                  (menuAnimationState === "opening" &&
                    openingItemIndex >= index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay:
                    menuAnimationState === "opening" ||
                    menuAnimationState === "open"
                      ? `${300 + index * 100}ms`
                      : menuAnimationState === "closing"
                      ? `${(menuItems.length - 1 - index) * 100}ms`
                      : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  className="text-6xl font-normal font-['Jost'] hover:italic hover:font-['Ibarra_Real_Nova'] transition-colors"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
