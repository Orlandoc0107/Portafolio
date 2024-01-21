'use client';

import { VerProyecto } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import { VerProyectoId } from "@/app/utils/proyects";
import Link from "next/link";
import Image from "next/image";
import styles from '@/app/ui/home.module.css'
import Skeleton from "react-loading-skeleton";

export default function ProyectoId({ params }: { params: { id: string } }) {

  const [proyectoData, setProyectoData] = useState<VerProyecto | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await VerProyectoId(params.id);

        if ('error' in result) {
          setError(result.response);
        } else {
          setProyectoData(result.response);
        }
      } catch (error) {
        console.error("Error fetching proyecto data:", error);
        setError("Error al obtener los datos del proyecto");
      }
    };

    fetchData();
  }, [params.id]);

  if (error) {
    return <div className={styles.main}>Error: {error}</div>;
  }

  if (!proyectoData) {
    return <div className={styles.main}>Cargando...</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.proyecto}>
        <div className={styles.proyectoTitulo}>{proyectoData.nombre}</div>
        {proyectoData.imagen != null ? (
          <Image
            width={700}
            height={500}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${proyectoData.imagen}`}
            alt={`${proyectoData.nombre} Imagen`}
            className={styles.proyectoImage}
          />
        ) : (
          <div className={styles.proyectoImageSkeletonWrapper}>
            <Skeleton className={styles.proyectoImageSkeleton} />
          </div>
        )}
        <div>
          <div>
            {proyectoData.descripcion != null ? (
              <div className={styles.description}>
                <p>
                  {proyectoData.descripcion}
                </p>
              </div>
            ) : (
              <div><Skeleton />
                <Skeleton /></div>
            )}
          </div>
          <div className={styles.tecnologiasProyect}>
            {proyectoData.tecnologias != null ?
              (<p>Tecnoligias : {proyectoData.tecnologias}</p>)
              : (<Skeleton />)}
          </div>
        </div>
        <div className={styles.urls}>
          <div>
            {proyectoData.github != null ?
              (<Link target="_blank"
                rel="noopener noreferrer"
                href={proyectoData.github}>
                <Image
                  src="/icons/github.png"
                  alt="Github"
                  width={40}
                  height={40}
                />
              </Link>) :
              (<><Skeleton /></>)}
          </div>
          <div>
            {proyectoData.online != null ?
              (<Link target="_blank"
                rel="noopener noreferrer"
                href={proyectoData.online}
              >
                <Image
                  src="/icons/red-global.png"
                  alt="Online"
                  width={40}
                  height={40}
                />
              </Link>) :
              (<><Skeleton /> No Disponible</>)}
          </div>
        </div>
        <div className={styles.btnAdmin}>
          <div>
            <Link className={styles.Link}
              href={`/dashboard/editar/${params.id}/`}
              passHref>
              Editar
            </Link>
          </div>
          <div>
            <Link className={styles.Link}
              href={`/dashboard/borrar/${params.id}/`}
              passHref>
              Borrar
            </Link>
          </div>
        </div>
      </div>
    </main >
  )
};