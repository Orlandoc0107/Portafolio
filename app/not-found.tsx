import Link from 'next/link'
import styles from '@/app/ui/home.module.css'

export default function NotFound() {
  return (
    <div className={styles.main}>
      <h2>No Funciona la Ruta</h2>
      <p >Could not find the requested resource.</p>
      <Link href="/">
        <div className={styles.Link}>
        Return Home
        </div>
      </Link>
    </div>
  );
}