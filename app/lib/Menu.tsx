'use client'

import { useState } from "react";
import Link from "next/link";
import { Github, Sobre, Linkedin, Hogar } from "@/app/ui/components/images/icons";

export function MenuP() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <img
        src="/icons/menu-hamburguesa.png"
        width={25}
        height={25}
        alt="menu"
        onClick={toggleMenu}
        className="cursor-pointer"
      />
      {menuOpen && (
        <div className="menu-overlay fixed inset-y-0 left-0 w-1/4 bg-stone-800 p-4 z-50">
          <ul className="text-white flex flex-col space-y-4">
            <li className="flex items-center">
              <div className="w-6 h-6">
                <Hogar />
              </div>
              <span className="ml-2">Home</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6">
                <Github />
              </div>
              <span className="ml-2">Github</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6">
                <Sobre />
              </div>
              <span className="ml-2">Contact</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6">
                <Linkedin />
              </div>
              <span className="ml-2">Linkedin</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}