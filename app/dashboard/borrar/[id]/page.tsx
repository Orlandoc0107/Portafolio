'use client'

import Link from 'next/link';
import { useSession } from "next-auth/react";
import { EliminarProyecto } from '@/app/utils/proyects';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/home.module.css'

interface Props {
  token: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const token = session?.user?.access_token;
  const router = useRouter();
  const id = params.id;

  const handleConfirmar = async () => {
    if (token) {
      console.log('ID del proyecto:', id);
      const result = await EliminarProyecto({ id, token });

      if (result.success) {
        console.log('Proyecto eliminado:', result.message);
        showMessage(result.message || "");
      } else {
        console.error('Hubo un error al eliminar el proyecto:', result.error);
        showMessageError(result.error || "");
      }
    }
    console.log('Proyecto confirmado para eliminar');
  };

  const handleCancelar = () => {
    router.push(`/dashboard/ver/proyecto/${params.id}`);
  };

  const handleRegresar = () => {
    router.back();
  };

  const showMessage = (message: string) => {
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
      messageContainer.innerText = message;
      messageContainer.style.display = 'block';
    }
  };

  const showMessageError = (error: string) => {
    const errorContainer = document.getElementById('error-container');
    if (errorContainer) {
      errorContainer.innerText = error;
      errorContainer.style.display = 'block';
    }
  };

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
      <h1>¿Estás seguro de eliminar este proyecto?</h1>
      <div id="message-container" className={styles.messageContainer}></div>
      <div id="error-container" className={styles.errorContainer}></div>
      <div className="flex">
        <button
          className={styles.Link}
          onClick={handleConfirmar}
        >
          Sí, estoy seguro
        </button>
        <Link href={`/dashboard/ver/proyecto/${params.id}`}>
          <button
            className={styles.Link}
            onClick={handleCancelar}
          >
            Cancelar
          </button>
        </Link>
        <button
          className={styles.Link}
          onClick={handleRegresar}
        >
          Regresar
        </button>
      </div>
    </main>
  );
}