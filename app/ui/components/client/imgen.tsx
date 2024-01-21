'use client'

import { useState } from 'react';
import { ImagenPUT } from '@/app/utils/proyects'
import { useSession, signIn, signOut } from "next-auth/react";
import { ImagenProyecto } from "@/app/lib/definitions"
import styles from "@/app/ui/form.module.css"

export default function ImagenComponent({ params }: { params: { id: string } }) {
  const [imagen, setImagen] = useState<File | null>(null);
  const { data: session, status } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [mensajeBackend, setMensajeBackend] = useState<string | null>(null); // Nuevo estado
  const token = session?.user.access_token;
  const proyectoId = params.id;

  const handleImagenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImagen(event.target.files[0]);
    }
  };

  const handleSubirImagen = async () => {
    if (imagen && proyectoId) {
      const result = await ImagenPUT({ proyectoId, imagen, token });

      if (result.error) {
        console.error('Error al subir la imagen:', result.error);
        setMensajeBackend(`Error al subir la imagen: ${result.error}`);
      } else {
        console.log('Imagen subida correctamente:', result);
        setMensajeBackend('Imagen subida correctamente');
      }
    } else {
      console.error('Imagen o proyectoId no válido');
    }
  };

  return (
    <div className={`${styles.form2} ${styles.inputFile}`}>
      <label htmlFor="fileInput">Seleccionar Archivo</label>
      <input type="file" accept="image/*" id="fileInput" onChange={handleImagenChange} />
      <button className={styles.submit2} onClick={handleSubirImagen}>Subir Imagen</button>
      {mensajeBackend && (
        <div className={styles.mensajeBackend}>{mensajeBackend}</div>
      )}
    </div>
  );
}
