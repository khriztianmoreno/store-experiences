import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.imageContainer}>image</div>
        <div className={styles.formContainer}>form</div>
      </main>
    </>
  );
}
