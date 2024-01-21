'use client'
import React, { useEffect, useState } from 'react';
import { VerProyectos } from '@/app/utils/proyects';
import { VerProyecto } from '@/app/lib/definitions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "@/app/ui/home.module.css"
import SkeletonLoader from '@/app/ui/components/SkeletonLoader'

const ProyectoCard: React.FC<{ proyecto: VerProyecto }> = ({ proyecto }) => (

  <div className={styles.proyectoCard}>
    <div className={styles.imagenContainer}>
      {proyecto.imagen ? (
        <Link href={`/proyectos/${proyecto.id}`} passHref>
          <Image
            width={250}
            height={350}
            quality={100}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${proyecto.imagen}`}
            alt={`${proyecto.nombre} Imagen`}
            title={proyecto.nombre}
            className={styles.imagen}
          />
        </Link>
      ) : (
        <span className={styles.span}> No hay imagen disponible</span>
      )}
    </div>
  </div>
);

const ProyectoList: React.FC = () => {
  const [proyectos, setProyectos] = useState<VerProyecto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await VerProyectos();

        if ('error' in resultado) {
          console.error("Error al obtener los proyectos:", resultado.error);
        } else {
          setProyectos(resultado.response);
        }
      } catch (error) {
        console.error("Error al obtener los proyectos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (delta: number) => {
    const newPage = Math.max(1, currentPage + delta);
    setCurrentPage(newPage);
    router.push(`/dashboard/ver/proyecto?page=${newPage}`);
  };


  if (loading) {
    return (
      <div id="proyectos" className={styles.Card}>
        <div className={styles.Card2}>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  return (
    <div id="proyectos"  className={styles.Card}>
      <div className={styles.Card2}>
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default ProyectoList;

