import Dev from "@/app/ui/components/images/Dev";
import { Foto, About1, About2, About3 } from "@/app/ui/components/containers/Perfil";

export default function Home() {
  return (
    <main className="
    flex flex-col ... 
    justify-center 
    items-center ">
        <div className="">
          <Foto />
        </div>
        <div className="py-4">
        <div className="py-8">
          <About1 />
        </div>
        <div className="py-8">
          <About2 />
        </div>
        <div className="py-8">
          <About3 />
        </div>
        </div>
    </main>
  );
}
