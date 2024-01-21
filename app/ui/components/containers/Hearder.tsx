import Logo from "../images/Logo";
import Nav from "@/app/ui/components/containers/Nav"
import styles from '@/app/ui/home.module.css';

export default function PrincHearder() {

  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
    </div>
  );
}
