"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Fotogaleria.module.scss";
import { galeria } from "../constants/data";
import Prispevok from "../components/Prispevok/Prispevok";
import Loading from "../components/Loading/Loading";

const Fotogaleria = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingDelay);
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.prispevky}>
          {galeria.map((prispevok) => {
            return <Prispevok key={prispevok.id} prispevok={prispevok} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Fotogaleria;
