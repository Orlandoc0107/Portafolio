"use client";

import Link from "next/link";
import { dataProjects } from "@/app/lib/dataProjects";
import React, { useState } from "react";
import Image from "next/image";

export default function CardsProyectos() {
  const projectsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalProjects = dataProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = Math.min(currentPage * projectsPerPage, totalProjects);

  const goToPage = (page:any) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen p-10 m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center">
        {dataProjects.slice(startIndex, endIndex).map((project, index) => (
          <div
            key={index}
            className="shadow-2xl h-72 border-stone-200 border-double border-2 hover:border-4 hover:border-stone-600 rounded-lg"
          >
            <div
              className="h-2/3 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url('/proyects${project.image}')`,
              }}
            ></div>
            <div className="p-4 flex flex-col justify-between h-1/3">
              <h3 className="text-center uppercase text-lg font-bold text-gray-900 dark:text-gray-600">
                {project.name}
              </h3>
              <div className="text-center">
                <button className="bg-gray-800 text-white px-3 py-1 rounded transition duration-300 hover:bg-blue-900">
                  <Link href={`/proyect/${project.id}`} target="_blank">
                    Detalles
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center justify-items-center p-4">
          <button
            onClick={prevPage}
            className="bg-stone-200 hover:bg-stone-600 px-6 py-1 mr-2 rounded shadow-lg shadow-cyan-500/50"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-stone-600 text-white"
                  : "bg-stone-200 hover:bg-stone-600"
              } px-4 py-1 rounded shadow-lg shadow-cyan-500/50`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            className="bg-stone-200 hover:bg-stone-600 px-6 py-1 ml-2 rounded shadow-lg shadow-cyan-500/50"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
