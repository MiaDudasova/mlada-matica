import styles from "./styles/Fotogaleria.module.scss";
import { galeria } from "../constants/data";
import Prispevok from "../components/Prispevok/Prispevok";

const Fotogaleria = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.prispevky}>
        {galeria.map((prispevok) => {
          return <Prispevok key={prispevok.id} prispevok={prispevok} />;
        })}
      </div>
    </div>
  );
};

export default Fotogaleria;
