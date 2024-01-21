import Contact from "@/app/ui/components/containers/Contact"
import styles from '@/app/ui/home.module.css';
import ProyectoList from "@/app/ui/components/client/ver";
import { lusitana} from "./ui/fonts";
import {Foto, Tecnologias} from "@/app/ui/components/containers/Perfil"
import ContactForm from "@/app/contact/page"

export default function Home() {

  return (
    <main className={`${styles.main} ${lusitana.className}`}>
      <Foto />
      <Tecnologias />
      <ProyectoList />
      <ContactForm />
    </main>
  );
}

