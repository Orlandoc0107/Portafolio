"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Sobre,
  Linkedin,
  Hogar,
  Equipaje,
  Cerrar,
} from "@/app/ui/components/images/icons";
import Image from "next/image";
import Link from "next/link";

export function MenuP() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => {
        toggleMenu();
      }, 20000); 

      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

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
      {/* menu-overlay fixed inset-x-0 inset-y-0 bg-invisible z-40 box-content h-40 w-40 */}
      {menuOpen && (
        <div className="fixed flex m-auto inset-0">
          <div className="mx-50 my-30 px-5 py-20">
            <div className="gap-x-8 flex justify-around dark:bg-slate-800 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
              <div className="flex gap-2">
                <button onClick={toggleMenu} className="text-white dark:text-white"><Cerrar/></button>
                <div  className="cursor-pointer text-slate-400 dark:text-slate-400" onClick={toggleMenu} >Close</div>
              </div>
            </div>
            <details
              className="open:bg-white dark:open:bg-slate-900 bg-slate-900  open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
              open
            >
              <summary className="text-sm leading-6 dark:text-white text-white font-semibold select-none">
                Menu
              </summary>
              <div className="flex flex-col gap-2 overflow-hidden mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <div className="flex gap-2">
                  <div><Hogar/></div>
                  <Link href="/">Home</Link>
                </div>
                <div className="flex gap-2">
                  <div><Github/></div>
                  <Link href="https://github.com/Orlandoc0107" target="_blank">
                    GitHub
                  </Link>
                </div>
                <div className="flex gap-2">
                  <div><Linkedin/></div>
                  <Link
                    href="https://www.linkedin.com/in/orlando-cardenas-villegas-7a2390248/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </div>
                <div className="flex gap-2">
                  <div><Equipaje/></div>
                  <Link href="/proyect">Proyect</Link>
                </div>
                <div className="flex gap-2">
                  <div><Sobre/></div>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </details>
            <details
              className="open:bg-white dark:open:bg-slate-900 bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
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
