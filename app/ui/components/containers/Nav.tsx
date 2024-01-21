"use client";

import React from "react";
import NextAuth from "@/app/ui/components/client/login-btn";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/app/ui/home.module.css"
import Skeleton from 'react-loading-skeleton';
import Image from "next/image";

export default function Nav() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const scrollToContact = () => {
    const contactoElement = document.getElementById('contacto');
    if (contactoElement) {
      contactoElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleGoBack = () => {
    router.back();
  }

  const handleSignOut = async () => {
    if (session) {
      await router.push("/");
    }

    await signOut({ redirect: false });
  };

  if (status === "loading") {
    return (
      <div className={styles.nav}>
        <div onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          <Image
            src="/icons/atras.png"
            width={50}
            height={50}
            alt="back"
          />
        </div>
        <div>
          <Link href="/"
            className={styles.Link}>
            Inicio
          </Link>
        </div>
        <div>
          <Link href="/#proyectos"
          onClick={scrollToContact}
            className={styles.Link}>
            Proyectos
          </Link>
        </div>
        <div>
          <Link href="/#contacto"
            className={styles.Link}
            onClick={scrollToContact}
            >
            Contact
          </Link>
        </div>
        <div>
          <p className={styles.Link}>
            Loading
          </p>
        </div>
      </div>
    );
  }

  if (session) {
    return (
      <div className={styles.nav}>
        <div onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          <Image
            src="/icons/atras.png"
            width={50}
            height={50}
            alt="back"
          />
        </div>
        <div>
          <NextAuth />
        </div>
        <div>
          <Link className={styles.Link}
            href="/proyectos/">Ver</Link>
        </div>
        <div>
          <Link className={styles.Link}
            href="/dashboard/crear">Crear</Link>
        </div>
        <div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.nav}>
      <div onClick={handleGoBack} style={{ cursor: 'pointer' }}>
        <Image
          src="/icons/atras.png"
          width={50}
          height={50}
          alt="back"
        />
      </div>
      <div>
        <Link href="/"
          className={styles.Link}>
          Inicio
        </Link>
      </div>
      <div>
        <Link href="/#proyectos"
        onClick={scrollToContact}
          className={styles.Link}>
          Proyectos
        </Link>
      </div>
      <div>
        <Link href="/#contacto"
          className={styles.Link}
          onClick={scrollToContact}
          >
          Contact
        </Link>
      </div>
      <div>
        <NextAuth />
      </div>
    </div>
  );
}