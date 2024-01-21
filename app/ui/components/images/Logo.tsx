import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/logo">
      <Image 
      src="/Logo.png" 
      width={80} 
      height={80} 
      alt="Logo_Tipo"
      className={styles.logo}
      />
      </Link>
    </div>
  );
}
