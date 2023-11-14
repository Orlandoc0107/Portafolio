"use client";

import Link from "next/link";
import { dataProjects } from "@/app/lib/dataProjects";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CardsProyectos() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const projectsPerSet = 2;
  const totalSets = Math.ceil(dataProjects.length / projectsPerSet);

  const startProjectIndex = currentSetIndex * projectsPerSet;
  const endProjectIndex = Math.min(
    (currentSetIndex + 1) * projectsPerSet,
    dataProjects.length
  );

  const nextSet = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
  };

  const prevSet = () => {
    setCurrentSetIndex((prevIndex) =>
      prevIndex === 0 ? totalSets - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div
        className="
        flex 
        space-x-8 
        place-items-center
      ">
        {dataProjects
          .slice(startProjectIndex, endProjectIndex)
          .map((project, index: any) => (
            <div
              key={index}
              className="shadow-2xl w-3/6 h-48 border-stone-200 border-double border-2 hover:border-4 hover:border-stone-600 rounded-lg"
              style={{ backgroundImage: `url('/proyects${project.image}')` }}
            >
              <h3 className="text-center p-4 uppercase text-2xl font-bold
            text-gray-900 dark:text-gray-600
              ">{project.name}</h3>
              <div>
                <button
                  className="bg-gray-800 
                  text-white 
                  px-3 
                  py-1
                  mx-10
                  my-20 
                  rounded 
                  transition 
                  duration-300 
                  hover:bg-blue-900"
                >
                  <Link href={`/proyect/${project.id}`} target="_blank">Detalles</Link>
                </button>
              </div>
            </div>
          ))}
      </div>
      {totalSets > 1 && (
        <div className="flex justify-center justify-items-center p-4">
          <button
            onClick={prevSet}
            className="bg-stone-200 hover:bg-stone-600 px-6 py-1 mr-2 rounded shadow-lg shadow-cyan-500/50"
          ></button>
          <button
            onClick={nextSet}
            className="bg-stone-200 hover:bg-stone-600  px-6 py-1 rounded shadow-lg shadow-cyan-500/50"
          ></button>
        </div>
      )}
    </div>
  );
}
