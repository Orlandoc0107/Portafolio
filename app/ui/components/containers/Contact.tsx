import React from 'react'
import Image from 'next/image'
import Whatsapp from '@/app/ui/components/client/whatsapp'
import Link from "next/link";
import styles from '@/app/ui/home.module.css';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div >
                <Link href="https://github.com/Orlandoc0107" target="_blank">
                    <div >
                        <Image
                            src="/icons/github.png"
                            width={40}
                            height={40}
                            alt="Github"
                            className={styles.contactImage}
                        />
                    </div>
                </Link>
            </div>
            <div >
                <Link href="/contact">
                    <div >
                        {" "}
                        <Image
                            src="/icons/sobre.png"
                            width={40}
                            height={40}
                            alt="sobre"
                        />
                    </div>
                </Link>
            </div>
            <div >
                <Link href="https://www.linkedin.com/in/orlando-cardenas-villegas-7a2390248/" target="_blank">
                    <div >
                        <Image
                            src="/icons/linkedin.png"
                            width={40}
                            height={40}
                            alt="Linkedin"
                        />
                    </div>
                </Link>
            </div>
            <div >
                <Whatsapp />
            </div>
        </div>
    );
}