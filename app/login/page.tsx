import LoginPage from '@/app/ui/components/client/login'
import styles from '@/app/ui/home.module.css'

export default function page() {
  return (
    <div className={styles.main}>
      <LoginPage />
    </div>
  )
}