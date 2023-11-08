import { Github, Linkedin, Sobre } from "@/app/ui/components/images/icons";

//
export default function PrinciFoother() {
  return (
    <div>
      <div className="flex items-center justify-center content-center">
      <p>Derechos de autor © 2023 Orlando Cardenas V. Todos los derechos reservados. </p>
      </div>
      <hr/>
          <div className="flex justify-around ... p-4">
      <div>
        <Github />
      </div>
      <div>
        <Sobre />
      </div>
      <div>
        <Linkedin />
      </div>
    </div>
    </div>

  );
}
