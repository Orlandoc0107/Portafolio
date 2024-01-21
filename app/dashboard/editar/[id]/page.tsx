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

  const [descripcion, setDescripcion] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [tecnologias, setTecnologias] = useState<string>('');
  const [github, setGithub] = useState<string>('');
  const [online, setOnline] = useState<string>('');
  const proyectoId = params.id

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const actualizarProyecto: ActualizarProyecto = {
      nombre,
      descripcion,
      url,
      tecnologias,
      github,
      online,
    };

    if (token) {
      const resultado = await Actualizar({ proyectoId, ...actualizarProyecto, token, });
    } else {
      console.log("Error: No hay un token disponible");
    }
  };

  return (
    <div className={styles.main}
    >
      <div className={styles.vistaeditar}>
        <div className={styles.vistaproyecto}>
          < ProyectoId params={params}/>
        </div>
        <div className={styles.vistaform}>
          <div className={styles.form}>
            <h1>Editar Proyecto</h1>
            <form onSubmit={handleSubmit}>
              <label className={styles.label}>
                Nombre:
                <input
                  className={styles.input}
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </label>
              <label className={styles.label}>
                Descripcion:
                <input
                  className={styles.input}
                  type="text"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </label>
              <label className={styles.label}>
                URL:
                <input
                  className={styles.input}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </label>
              <label className={styles.label}>
                Tecnologías:
                <input
                  className={styles.input}
                  type="text"
                  value={tecnologias}
                  onChange={(e) => setTecnologias(e.target.value)}
                />
              </label>
              <label className={styles.label}>
                Github:
                <input
                  className={styles.input}
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </label>
              <label className={styles.label}>
                Online:
                <input
                  className={styles.input}
                  type="text"
                  value={online}
                  onChange={(e) => setOnline(e.target.value)}
                />
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