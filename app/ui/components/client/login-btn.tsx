"use client";
import styles from '@/app/ui/home.module.css';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function NextAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    if (session) {
      await router.push("/");
    }

    await signOut({ redirect: false });
  };

  if (status === "loading") {
    return <p className={styles.Link}>Loading...</p>;
  }

  if (session) {
    return (
      <div>
        <Link
        href=""
        className={styles.Link}
          onClick={handleSignOut}
        >
          Salir
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
      href=""
        className={styles.Link}
        onClick={() => signIn()}
      >
        Ingresar
      </Link>
    </div>
  );
}