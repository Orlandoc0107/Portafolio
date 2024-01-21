import Image from "next/image"
import styles from '@/app/ui/home.module.css';

export default function page() {
    return (
        <main className={styles.main}>
            <div>
                {" "}
                <Image
                    src="/Logo.png"
                    width={600}
                    height={600}
                    alt="Logo_Tipo"
                    className={styles.logo}
                />
            </div>
        </main>
    )
}
