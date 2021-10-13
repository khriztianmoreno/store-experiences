import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Header from '../components/Header';
import SideImage from '../components/SideImage';
import Form from '../components/Form';
import CopyRight from '../components/CopyRight';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <SideImage />
        </div>
        <div className={styles.formContainer}>
          <p>
            Vivir momentos únicos es quizá uno de los motivos que a muchos nos
            une como humanos.
          </p>

          <p>
            Has llegado a la comunidad que te brindará experiencias únicas e
            irrepetibles para vivir, compartir, regalar y recordar.
          </p>

          <p>Bienvenidos a Tienda Experiencias</p>
          <h3>Regístrate</h3>
          <Form />
          <div className={styles.divider} />
          <span className={styles.experience}>
            ¿Ofreces experiencias que quisieras incluir en nuestro portafolio?.
            <a className={styles.linkExperience}> Ingresa aquí</a>
          </span>
          {/* <CopyRight /> */}
        </div>
      </main>
    </>
  );
}
