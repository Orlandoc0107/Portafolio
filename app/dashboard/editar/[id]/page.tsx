'use client'

import { ActualizarProyecto } from "@/app/lib/definitions"
import { useState } from "react"
import { Actualizar } from "@/app/utils/proyects"
import { useSession, signIn, signOut } from "next-auth/react";
import ImagenComponent from "@/app/ui/components/client/imgen"
import styles from '@/app/ui/form.module.css';
import ProyectoId from '@/app/proyectos/[id]/page'

const Page = ({ params }: { params: { id: string } }) => {
  const { data: session, status } = useSession();
  const token = session?.user.access_token;
  const [nombre, setNombre] = useState<string>('');
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [descripcion, setDescripcion] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [tecnologias, setTecnologias] = useState<string>('');
  const [github, setGithub] = useState<string>('');
  const [online, setOnline] = useState<string>('');
  const proyectoId = params.id

  // Estados para indicar si los campos deben ser actualizados o no
  const [actualizarNombre, setActualizarNombre] = useState<boolean>(true);
  const [actualizarDescripcion, setActualizarDescripcion] = useState<boolean>(true);
  const [actualizarUrl, setActualizarUrl] = useState<boolean>(true);
  const [actualizarTecnologias, setActualizarTecnologias] = useState<boolean>(true);
  const [actualizarGithub, setActualizarGithub] = useState<boolean>(true);
  const [actualizarOnline, setActualizarOnline] = useState<boolean>(true);

  // Funciones para cambiar los estados de actualización
  const handleActualizarNombre = () => setActualizarNombre(!actualizarNombre);
  const handleActualizarDescripcion = () => setActualizarDescripcion(!actualizarDescripcion);
  const handleActualizarUrl = () => setActualizarUrl(!actualizarUrl);
  const handleActualizarTecnologias = () => setActualizarTecnologias(!actualizarTecnologias);
  const handleActualizarGithub = () => setActualizarGithub(!actualizarGithub);
  const handleActualizarOnline = () => setActualizarOnline(!actualizarOnline);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const actualizarProyecto: ActualizarProyecto = {
      nombre: actualizarNombre ? nombre ?? '' : '',
      descripcion: actualizarDescripcion ? descripcion ?? '' : '',
      url: actualizarUrl ? url ?? '' : '',
      tecnologias: actualizarTecnologias ? tecnologias ?? '' : '',
      github: actualizarGithub ? github ?? '' : '',
      online: actualizarOnline ? online ?? '' : '',
    };

    if (token) {
      try {
        const resultado = await Actualizar({ proyectoId, ...actualizarProyecto, token });

        setMensaje("Proyecto actualizado exitosamente");
      } catch (error) {
        console.error("Error al actualizar el proyecto:", error);

        setMensaje("Error al actualizar el proyecto");
      }
    } else {
      console.error("Error: No hay un token disponible");
      setMensaje("Error: No hay un token disponible");
    }
  };

  return (
    <div className={styles.main}
    >
      <div className={styles.vistaeditar}>
        <div className={styles.vistaproyecto}>
          < ProyectoId params={params} />
        </div>
        <div className={styles.vista2}>

        </div>
        <div className={styles.vistaform}>
          <div className={styles.form}>
            <h1>Editar Proyecto</h1>
            {mensaje && <p className={mensaje.includes("Error") ? styles.error : styles.success}>{mensaje}</p>}

            <form onSubmit={handleSubmit}>
              <label className={styles.label}>
                Nombre:
                <input
                  className={styles.input}
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  disabled={!actualizarNombre}
                />
                <input
                  type="checkbox"
                  checked={actualizarNombre}
                  onChange={handleActualizarNombre}
                />
                Actualizar
              </label>
              <label className={styles.label}>
                Descripcion:
                <input
                  className={styles.input}
                  type="text"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  disabled={!actualizarDescripcion}
                />
                <input
                  type="checkbox"
                  checked={actualizarDescripcion}
                  onChange={handleActualizarDescripcion}
                />
                Actualizar
              </label>
              <label className={styles.label}>
                URL:
                <input
                  className={styles.input}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={!actualizarUrl}
                />
                <input
                  type="checkbox"
                  checked={actualizarUrl}
                  onChange={handleActualizarUrl}
                />
                Actualizar
              </label>
              <label className={styles.label}>
                Tecnologías:
                <input
                  className={styles.input}
                  type="text"
                  value={tecnologias}
                  onChange={(e) => setTecnologias(e.target.value)}
                  disabled={!actualizarTecnologias}
                />
                <input
                  type="checkbox"
                  checked={actualizarTecnologias}
                  onChange={handleActualizarTecnologias}
                />
                Actualizar
              </label>
              <label className={styles.label}>
                Github:
                <input
                  className={styles.input}
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  disabled={!actualizarGithub}
                />
                <input
                  type="checkbox"
                  checked={actualizarGithub}
                  onChange={handleActualizarGithub}
                />
                Actualizar
              </label>
              <label className={styles.label}>
                Online:
                <input
                  className={styles.input}
                  type="text"
                  value={online}
                  onChange={(e) => setOnline(e.target.value)}
                  disabled={!actualizarOnline}
                />
                <input
                  type="checkbox"
                  checked={actualizarOnline}
                  onChange={handleActualizarOnline}
                />
                Actualizar
              </label>
              <button type="submit"
                className={styles.submit}
              >Actualizar</button>
            </form>
          </div>

          <ImagenComponent params={params} />

        </div>
      </div>

    </div>
  )
}

export default Page;