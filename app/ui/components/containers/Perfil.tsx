"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/app/ui/home.module.css";

export function Foto() {
  return (
    <div className={styles.infor}>
      <div className={styles.containerfoto}>
        <Image
          src="/Perfil.jpg"
          height={150}
          width={150}
          alt="Mi Foto"
          className={styles.foto}
        />
      </div>
      <div className={styles.data}>
        <h1>Orlando Cardenas Villegas</h1>
        <h4>
          ¡Hola, Bienvenido a mi portafolio! Soy Programador Full-stack Web en
          Python con experiencia en desarrollo y especialización en Python.
        </h4>
        <h5>
          Mi enfoque es crear soluciones tecnológicas innovadoras que hagan que
          la web sea un lugar más funcional y atractivo. Te invito a explorar mi
          portafolio para descubrir ejemplos de mi trabajo y cómo puedo ayudar a
          impulsar tus proyectos en línea. Agradezco tu visita a mi portafolio.
          Si tienes alguna pregunta o estás interesado en colaborar en futuros
          proyectos, no dudes en ponerte en contacto. ¡Espero que disfrutes
          explorando!
        </h5>
      </div>
    </div>
  );
}

export const Tecnologias = () => {

  
  return (
    <div className={styles.tecnologias}>
      <div>
        <Image
          src="/icons/html.png"
          alt="HTML"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/css.png"
          alt="CSS"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/js.png"
          alt="JavaScript"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/django.jpg"
          alt="Django"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/flask.png"
          alt="Flask"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/git.jpg"
          alt="Git"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/github.png"
          alt="GitHub"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/mysql.png"
          alt="Mysql"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/nextjs.jpg"
          alt="NextJs"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/python.png"
          alt="Python"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/react.png"
          alt="React"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/sql.png"
          alt="SQL"
          width={130}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/sqlite.jpg"
          alt="Sqlite"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/tailwindcss.png"
          alt="Tailwindcss"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
      <div>
        <Image
          src="/icons/Bootstrap.png"
          alt="Booststrap"
          width={100}
          height={100}
          className={styles.tecnologiasImage}
        />
      </div>
    </div>
  );
};
