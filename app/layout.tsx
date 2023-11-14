import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";
import PrincHearder from "@/app/ui/components/containers/Hearder";
import PrincFoother from "@/app/ui/components/containers/Foother";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio Orlando Cardenas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.className}`}
    >
      <body className="
      dark
      bg-gradient-to-r 
      from-cyan-500 
      to-blue-500 ...
      dark:bg-gradient-to-r 
      dark:from-cyan-700
      dark:to-slate-900
      text-slate-900
      dark:text-slate-300
      ">
        <PrincHearder />
        {children}
        <PrincFoother />
      </body>
    </html>
  );
}
