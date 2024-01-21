import Image from "next/image"
import Link from "next/link";

export function Github() {
  return (
    <Link href="https://github.com/Orlandoc0107" target="_blank">
        <div >
          <Image
            src="/icons/github.png"
            width={25}
            height={25}
            alt="Github"
            
          />
        </div>
    </Link>
  );
}

export function Linkedin() {
  return (
    <Link href="https://www.linkedin.com/in/orlando-cardenas-villegas-7a2390248/" target="_blank">
    <div >
    <Image 
    src="/icons/linkedin.png" 
    width={25} 
    height={25} 
    alt="Linkedin"
    />
    </div>
    </Link>


  )
}

export function Busqueda() {
  return (
    <div>
    {" "}
    <Image 
    src="/icons/busqueda.png" 
    width={20} 
    height={20} 
    alt="Busqueda"
    />
  </div>
  )
}

export function Hogar() {
  return (
  <Link href="/">
      <div >
    {" "}
    <Image 
    src="/icons/hogar.png" 
    width={25} 
    height={25} 
    alt="hogar"
    />
  </div>
  </Link>
  )
}

export function Sobre() {
  return (
    <Link href="/contact">
          <div >
    {" "}
    <Image 
    src="/icons/sobre.png" 
    width={25} 
    height={25} 
    alt="sobre"
    />
  </div>
    </Link>

  )
}

export function Menu() {
  return (
    <div>
    {" "}
    <Image 
    src="/icons/menu-hamburguesa.png" 
    width={25} 
    height={25} 
    alt="menu"
    />
  </div>
  )
}

export function Sol() {
  return (
    <div>
    {" "}
    <Image 
    src="/icons/sol.png" 
    width={10} 
    height={10} 
    alt="sol"
    />
  </div>
  )
}


export function Oscuro() {
  return (
    <div>
    {" "}
    <Image 
    src="/icons/oscuro.png" 
    width={10} 
    height={10} 
    alt="oscuro"
    />
  </div>
  )
}


export function Equipaje() {
  return (
    <div>
    {" "}
    <Image 
    src="/icons/equipaje.png" 
    width={25} 
    height={25} 
    alt="equipaje"
    />
  </div>
  )
}

export function Cerrar() {
  return (
    <div>
    {" "}
    <Image 
    src="/icons/cerrar.png" 
    width={25} 
    height={25} 
    alt="cerrar"
    />
  </div>
  )
}

export function Email() {
  return (
    <a href="mailto:orlandocardenas0107@gmail.com">
      <div>
        <Image 
          src="/icons/sobre.png" 
          width={25} 
          height={25} 
          alt="email"
        />
      </div>
    </a>
  );
}
