'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "@/app/ui/home.module.css"

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <main className={styles.main}>
        <div>
        <p>Debes iniciar sesión para acceder a esta página</p>
        <button
          onClick={() => router.back()}
          className={styles.Link}
        >
          Regresar
        </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div>
      <h1>Dashboard</h1>
      </div>
    </main>
  );
};

export default Dashboard;

