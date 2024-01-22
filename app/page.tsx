import Contact from "@/app/ui/components/containers/Contact"
import styles from '@/app/ui/home.module.css';
import ProyectoList from "@/app/ui/components/client/ver";
import { lusitana} from "./ui/fonts";
import {Foto, Tecnologias} from "@/app/ui/components/containers/Perfil"
import ContactForm from "@/app/contact/page"
import ScrollToTopButton from "@/app/ui/components/client/TopButton"

export default function Home() {

  return (
    <main className={`${styles.main} ${lusitana.className}`}>
      <Foto />
      <Tecnologias />
      <ProyectoList />
      <ContactForm />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}

