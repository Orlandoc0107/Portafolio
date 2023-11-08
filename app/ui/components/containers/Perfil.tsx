import Image from "next/image";

export function Foto() {
  return (
    <div className="p-4 m-4 mt-4 flex items-center mb-3 bg-invisible gap-4">
      <Image className="dark:bg-cyan-500 
    bg-cyan-900 
    shadow-lg 
    dark:shadow-cyan-500/50
    shadow-cyan-900/50  
    w-30 h-30 rounded-full 
    border-4 
    dark:border-sky-500
    border-sky-900"
        src="/Perfil.jpg"
        height={200}
        width={200}
        alt="MiFoto"
      />
      <div className="p-5 rounded-lg border border-sky-900 dark:border-sky-500">
        <strong className="font-bold">Orlando Cardenas Villegas</strong>
        <br />
        <span>Programador Full-stack web en Python</span>
        <br />
      </div>
    </div>
  );
}

export function About1() {
  return (
    <div
      className="max-w-prose p-10 rounded-lg border border-sky-900 dark:border-sky-500  leading-normal">
      <h2 className="text-2xl font-bold mb-4">Acerca de Mí</h2>
      <br />
      <p>
        ¡Hola! Soy Orlando Cardenas Villegas, un apasionado programador
        fullstack
      </p>
      <p>
        con experiencia en desarrollo y especialización en Python Mi enfoque
      </p>
      <p>
        es crear soluciones tecnológicas innovadoras que hagan que la web sea
      </p>
      <p>
        un lugar más funcional y atractivo. Te invito a explorar mi portafolio
      </p>
      <p>
        para descubrir ejemplos de mi trabajo y cómo puedo ayudar a impulsar
      </p>
      <p>tus proyectos en línea.</p>
    </div>
  );
}

export function About2() {
  return (
    <div className="max-w-prose p-10 rounded-lg border border-sky-900 dark:border-sky-500  leading-normal"
    >
      <h2 className="text-2xl font-bold mb-4">Tecnologias y Habilidades </h2>
      <br />
      <p>Lenguajes de Programación:</p>
      <strong>Python</strong>
      <br />
      <p>Desarrollo Web:</p>
      <strong>React.js, Next.js</strong>
      <br />
      <p>Diseño de Interfaz:</p>
      <strong>Bootstrap, Tailwind CSS</strong>
      <br />
      <p>Frameworks de Desarrollo Web:</p>
      <strong>Django, Flask</strong>
      <br />
      Bases de Datos: <strong>SQLite, MySQL</strong>
    </div>
  );
}

export function About3() {
  return (
    <div className="max-w-prose p-10 rounded-lg border border-sky-900 dark:border-sky-500  leading-normal">
      <p>
        Estare Actualizando Este Portal cada vez que cree un proyecto nuevo,
      </p>
      <p>
        hay mucho por descubrir. ¡No dudes en hacer clic en las secciones
        Proyectos
      </p>
      <p>
        y Ejemplos para explorar cómo he aplicado mis habilidades y
        tecnologías
      </p>
      <p>
        en proyectos emocionantes! Estoy seguro de que encontrarás algo que te
        inspire.
      </p>
      <br />
      <p>Gracias por visitar</p>
      <p>
        mi portafolio, y no dudes en ponerte en contacto si tienes alguna
        pregunta o deseas
      </p>
      <p>colaborar en futuros proyectos. ¡Disfruta explorando!</p>
      <br />
    </div>
  );
}
