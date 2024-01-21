import React from 'react';
import styles from '@/app/ui/home.module.css'
import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  return (
    <main className={styles.main}>
      <Skeleton height={20} width={200} style={{ marginBottom: '10px' }} />
      <div>
        <h1>Loading . . . </h1>
      </div>
      <Skeleton height={400} style={{ borderRadius: '10px' }} />
    </main>
  );
}
