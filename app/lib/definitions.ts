export type Proyecto = {
    nombre: string;
  };

  export type VerProyecto = {
    id: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    tecnologias: string;
    github: string;
    online: string;
  };

  export type ActualizarProyecto = {
    nombre: string;
    descripcion: string;
    url: string;
    tecnologias: string;
    github: string;
    online: string;
  };

  export type ImagenProyecto = {
    imagen: string;
  };
