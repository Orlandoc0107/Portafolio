'use client'

// components/ScrollToTopButton.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="btnScrollToTop"
            className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
        >
            <Image 
            src= "/icons/chevron-doble-up.png"
            width={15}
            height={15}
            alt="Subir"
            />

        </button>
    );
};

export default ScrollToTopButton;
