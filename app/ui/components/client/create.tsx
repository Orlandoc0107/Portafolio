'use client'

import { useState } from 'react';
import { Crear } from '@/app/utils/proyects';
import { Proyecto } from '@/app/lib/definitions';
import { useSession } from "next-auth/react";
import styles from "@/app/ui/form.module.css"

interface Props {
  token: string;
}

const NuevoProyecto: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const token = session?.user?.access_token;
  //const token = tokenWithBearer ? tokenWithBearer.split(" ")[1] : null;
  console.log(token)

  const [nombre, setNombre] = useState<string>('');

  const handleChange = () => {
    setError(null);
    setSuccessMessage(null)
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const proyecto: Proyecto = {
      nombre,
    };

    if (token) {
      const resultado = await Crear({ ...proyecto, token });

      if (resultado.success) {
        setSuccessMessage("¡Proyecto creado con éxito!");
        setError(null);
        console.log(resultado.data);
      } else {
        setError(`Error al crear el proyecto: ${resultado.error}`);
      }
    } else {
      console.error("Error: No hay un token disponible");
    }
  };

  return (
    <div className={styles.form}>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit} >
        <label
          htmlFor="nombre"
          className={styles.label}>
          Nombre:
          <input
            className={styles.input}
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              handleChange();
            }}
          />
        </label>
        <button className={styles.submit} type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
};

export default NuevoProyecto;
