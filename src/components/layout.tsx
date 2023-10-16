import React, { ReactNode } from 'react';
import Heading from "./heading";
import styles from '@/styles/index.module.css';
import bg from '@/assets/background.jpg';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout} style={{backgroundImage: `url(${bg.src})`, backgroundSize:'cover'}}>
      <Heading />
      <main className={styles.main}>{children}</main>
      <p className={styles.source}>www.anh-dev.com</p>
    </div>
  );
}
