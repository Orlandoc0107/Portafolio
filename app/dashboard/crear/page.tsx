'use client'

import NuevoProyecto from "@/app/ui/components/client/create"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "@/app/ui/home.module.css"

const Page = () => {
  const { data: session } = useSession();

  const router = useRouter();

  if (!session) {
    return (
      <div className={styles.main}>
        <p >Debes iniciar sesión para acceder a esta página</p>
        <button
          onClick={() => router.back()}
          className={styles.Link}
        >
          Regresar
        </button>
      </div>
    );
  }
  return (
    <div className={styles.main}
    >
      <NuevoProyecto />
    </div>
  )
}

export default Page;