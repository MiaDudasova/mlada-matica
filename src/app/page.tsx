"use client";
import styles from "./styles/Home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PosledneAkcie from "./components/PosledneAkcie/PosledneAkcie";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImg}>
        <img src="/hory.webp" alt="Hory" />
        <div className={styles.kontent}>
          <h1 className={styles.nazov}>Mladá Matica</h1>
          <button className={styles.button}>Staň sa členom</button>
        </div>
      </div>

      <div className={styles.posledneAkcie}>
        <a href="/fotogaleria" className={styles.preklik}>
          POSLEDNÉ AKCIE →
        </a>
        <PosledneAkcie akcieGaleria="galeria" />
      </div>
    </div>
  );
};

export default Home;
