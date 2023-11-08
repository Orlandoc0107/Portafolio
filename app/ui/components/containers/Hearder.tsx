import Logo from "../images/Logo";
import { Home, Proyectos } from "@/app/ui/components/buttons/Button";
import Theme from "@/app/lib/Themes";
import { MenuP } from "@/app/lib/Menu";
import { Search } from '@/app/lib/inputs'

export default function PrincHearder() {
  return (
    <div className="
    flex justify-between ... 
    sticky top-0 z-100... 
    p-2 shadow-2xl ...
    ">
      <div>
        <Logo />
      </div>
      <div className="flex gap-1">
          <Search />
        </div>
      <div className="flex gap-4 p-2">
        <MenuP />
        <Theme />
      </div>
    </div>
  );
}
