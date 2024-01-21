'use client'
import Link from "next/link";
import { VerProyectos } from "@/app/utils/proyects";
import { VerProyecto } from "@/app/lib/definitions";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const CardProyect: React.FC<{ proyecto?: VerProyecto }> = ({ proyecto }) => (
    <div className="bg-white mb-2 rounded-md overflow-hidden ">
      
      {proyecto ? (
        <div className="relative">
          
          <div
            className="h-40 bg-cover bg-center"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}${proyecto.imagen})`,
            }}
          />
          <div className="px-1 py-1 absolute bottom-0 left-0 w-full bg-opacity-30 bg-color3 text-color1">
            <Link href={`/proyectos/${proyecto.id}/`} key={proyecto.id}>
              <button className="inline-block rounded border-2 border-cyan-500 text-color1 
              hover:border-cyan-600 hover:bg-color2 hover:bg-opacity-90 hover:text-color5 
              focus:border-cyan-700 focus:text-cyan-700 active:border-cyan-800 active:text-cyan-800 px-6 pb-2 pt-2.5 
              text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none 
              focus:ring-0 "> Detalles : {proyecto.nombre}</button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="p-4">Cargando ...</p>
      )}
    </div>
  );



const CardsProyectos: React.FC = () => {
  const [proyectos, setProyectos] = useState<VerProyecto[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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
      }
    };

    fetchData();
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-10/12 py-8">
      <div className="flex justify-center">
      
        <div className="bg-color2 py-2 p-2 mb-2 rounded-md w-11/12">
          <CardProyect proyecto={proyectos[currentProjectIndex]} />
          <div className="flex justify-evenly ... mt-4">
            <button
              onClick={prevProject}
              className="hover:bg-color1 bg-color5 text-white px-12 py-1 rounded-full"
            >
            </button>
            <button
              onClick={nextProject}
              className="hover:bg-color1 bg-color5 text-white px-12 py-1 rounded-full"
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProyectos;
