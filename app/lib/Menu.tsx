"use client";

import { useState } from "react";
import {
  Github,
  Sobre,
  Linkedin,
  Hogar,
} from "@/app/ui/components/images/icons";
import Image from "next/image";
import Link from "next/link";

export function MenuP() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <Image
        src="/icons/menu-hamburguesa.png"
        width={25}
        height={25}
        alt="menu"
        onClick={toggleMenu}
        className="cursor-pointer"
      />
      {menuOpen && (
        <div className="menu-overlay fixed inset-y-0 left-0 w-screen bg-sky-900 z-50 justify-center items-center place-items-center">
          <div className="mx-60 my-10">
          <div>
                <button onClick={toggleMenu}>Cerrar</button>
              </div>
            <details
              className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
              open
            >

              <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                Menu
              </summary>
              <div className="flex flex-col gap-2 overflow-hidden mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <div>
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <Link href="https://github.com/Orlandoc0107" target="_blank">
                    GitHub
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.linkedin.com/in/orlando-cardenas-villegas-7a2390248/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </div>
                <div>
                  <Link href="/proyect">Proyect</Link>
                </div>
                <div>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </details>
            <details
              className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
              open
            >
              <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                Topic
              </summary>
              <div className="flex flex-col gap-2 overflow-hidden mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <div>
                  <Link href="/">Proximamente</Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}
