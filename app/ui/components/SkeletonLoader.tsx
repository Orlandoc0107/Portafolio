import React from 'react';
import styles from '@/app/ui/home.module.css';

const SkeletonLoader: React.FC = () => {
  return (
    <div className={styles.skeletonLoader}>
    </div>
  );
};

export default SkeletonLoader;
