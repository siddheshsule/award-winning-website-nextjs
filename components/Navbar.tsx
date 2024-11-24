"use client";

import React, { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Nexus", "Vault", "Prologue", "About","Contact"];

const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product Button */}

          <div className="">
            <img src="/img/logo.png" alt="logo" className="w-15" />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          {/* Navigation links and audio buttons */}

          <div className="flex h-full">
            <div className="hidden md:block">
                {navItems.map((item) => (
                    <a href={`#${item.toLowerCase()}`}>
                        {item}
                    </a>
                ))}

            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
