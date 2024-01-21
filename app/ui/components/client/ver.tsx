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
        <Image
          width={350}
          height={450}
          quality={100}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${proyecto.imagen}`}
          alt={`${proyecto.nombre} Imagen`}
          className={styles.imagen}
        />
      ) : (
        <span className={styles.span}> No hay imagen disponible</span>
      )}
    </div>
    <div className={styles.descripcionContainer}>
      <div className={styles.span}>
        <span>{proyecto.nombre}</span>
      </div>
    </div>
    <div className={styles.cardInfo}>
      <Link
        className={styles.cardInfoDetals}
        title="Ver Details"
        href={`/proyectos/${proyecto.id}/`} key={proyecto.id} passHref>
        <Image
          src="/icons/detalles.png"
          alt="detalles"
          width={60}
          height={40} />
      </Link>
      <div className={styles.cardInfonombre}>
        <p>{proyecto.nombre}</p>
      </div>
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
      <div className={styles.Card}>
        <div className={styles.Card2}>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.Card}>
      <div className={styles.Card2}>
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default ProyectoList;

