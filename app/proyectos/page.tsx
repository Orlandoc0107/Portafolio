import React from 'react'
import ProyectoList from "@/app/ui/components/client/ver"
import styles from "@/app/ui/home.module.css"

export default function page() {

    return (
        <main className={styles.main}>
            <ProyectoList />
        </main>
    )
}
