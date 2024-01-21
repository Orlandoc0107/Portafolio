"use client";
import styles from "@/app/ui/home.module.css"

import { useState, useEffect } from "react";
import {
  Sobre,
  Hogar,
  Equipaje,
  Cerrar,
} from "@/app/ui/components/images/icons";
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
    <div>
      <button className={styles.button1} onClick={toggleMenu}>
      Menu
        </button> 
        
      {menuOpen && (
        <div className={styles.menuOpen}>
          <div className="mx-50 my-25 px-5 py-20">
            <div className="gap-x-8 flex justify-around open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg">
            </div>
            <details
              className="bg-color1 border-color5 border-4 text-color5 open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg"
              open
            >
              <summary className="text-sm leading-6 font-semibold select-none">
                Menu
              </summary>
              <div className="text-color5 flex flex-col gap-2 overflow-hidden mt-3 text-sm leading-6">
                <div className="flex gap-2 hover:text-color1">
                  <button onClick={toggleMenu}><Cerrar /></button>
                  <div className="cursor-pointer" onClick={toggleMenu} >Close</div>
                </div>
                <div className="flex gap-2 hover:text-color1">
                  <div><Hogar /></div>
                  <Link href="/">Home</Link>
                </div>
                <div className="flex gap-2 hover:text-color1">
                  <div><Equipaje /></div>
                  <Link href="/proyectos">Proyectos</Link>
                </div>
                <div className="flex gap-2 hover:text-color1">
                  <div><Sobre /></div>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}
