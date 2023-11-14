import React from "react";
import { dataProjects } from "@/app/lib/dataProjects";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import CloseButton from "@/app/ui/components/cerrar"

export default function page({ params }: { params: { id: string } }) {
  const project = dataProjects.find(
    (project) => project.id.toString() === params.id
  );
  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }
  return (
<div className={`${lusitana.className} min-h-screen flex items-center justify-center`}>
  <div className="
  w-5/6 
  bg-slate-900
  rounded-lg 
  overflow-hidden 
  shadow-lg 
  grid 
  grid-cols-1 
  md:grid-cols-2 
  gap-4 
  text-amber-50 m-2 p-4
  border-double 
  border-4 
  border-amber-200
  ">
    <div className="md:text-center bg-cyan-700 p-4 border-double border-sky-200 rounded-lg border-2">
      <div className="mb-4">
        <Image
          src={`/proyects${project.image}`}
          alt={project.name}
          width={400}
          height={300}
          className="mx-auto rounded-md"
        />
      </div>
      <div className="font-bold text-2xl text-center">{project.name}</div>
    </div>
    <div>
      <div className="text-center mb-2 font-semibold"><h4 className="text-gray-300 ">{project.numer}</h4></div>
      <div className="mb-4 bg-zinc-900 p-4 border-solid border-2 border-sky-700 rounded-md">{project.description}</div>
      <div className="mb-4 bg-zinc-900 p-4 border-solid border-2 border-sky-700 rounded-md">
        <div className="font-bold italic ">Tecnologías:</div>
        <div>{project.technologies}</div>
      </div>
      <div className="mb-4 line-clamp-3 bg-zinc-900 hover:bg-zinc-600 p-4 border-solid border-2 border-sky-700 rounded-md">
        <div className="font-bold ">GitHub:</div>
        <div className="cursor-pointer"><Link href={project.github} target="_blank"></Link>
          {project.github}</div>
      </div>
      <div className="mb-4 line-clamp-3 bg-zinc-900 hover:bg-zinc-600 p-4 border-solid border-2 border-sky-700 rounded-md">
        <div className="font-bold">Online:</div>
        <div className="cursor-pointer"><Link href={project.url} target="_blank"></Link>
          {project.url}</div>
      </div>
      </div>
      <CloseButton/>
    </div>
  </div>
  );
}
