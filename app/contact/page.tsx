'use client'
import React from 'react';
import styles from "@/app/ui/form.module.css";
import ContactForm from "@/app/ui/components/client/contact"

export default function page (){
  return (
    <main className={styles.main}>
      <ContactForm/>
    </main>
  )
}