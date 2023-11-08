import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      {" "}
      <Image 
      src="/Logo.png" 
      width={50} 
      height={50} 
      alt="Logo_Tipo"
      className="rounded-full border-double border-4 border-sky-800 ..."
      />
    </div>
  );
}
