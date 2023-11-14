import Logo from "../images/Logo";
import Theme from "@/app/lib/Themes";
import { MenuP } from "@/app/lib/Menu";
import { Search } from '@/app/lib/inputs'

export default function PrincHearder() {
  return (
    <div className="
    z-20
    flex justify-between 
    sticky top-0 z-100
    p-2 shadow-2xl
    bg-opacity-75
    ">
      <div className="z-30">
        <Logo />
      </div>
      <div className="z-20 flex gap-1">
          <Search />
        </div>
      <div className="z-20 flex gap-4 p-2">
        <MenuP />
        <Theme />
      </div>
    </div>
  );
}
