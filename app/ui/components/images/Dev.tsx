import React from "react";
import Image from "next/image";

export default function Dev() {
  return (
    <div>
      <Image
        src="/Desarrollo.png"
        width={900}
        height={900}
        alt="En Desarrollo"
      />
    </div>
  );
}
