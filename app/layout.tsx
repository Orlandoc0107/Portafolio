import type { Metadata } from "next";
import "@/app/ui/globals.css";
import styles from '@/app/ui/home.module.css';
import { inter } from "@/app/ui/fonts";
import PrincHearder from "@/app/ui/components/containers/Hearder";
import PrincFoother from "@/app/ui/components/containers/Foother";
import SessionProvider from "@/context/SessionAuthProvider";
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "OrlandoCV",
  description: "Portafolio OrlandoC0107",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html
        lang="es">
        <body className={`${styles.body} ${lusitana.className} ${inter.className}`}>
          <PrincHearder />
          {children}
          <PrincFoother />
        </body>
      </html>
    </SessionProvider>
  );
}
