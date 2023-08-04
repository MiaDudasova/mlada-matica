"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Fotogaleria.module.scss";
import { galeria } from "../constants/data";
import Prispevok from "../components/Prispevok/Prispevok";
import Loading from "../components/Loading/Loading";

const Fotogaleria = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [opened, setOpened] = useState(true);

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingDelay);
  }, []);

  const [rokOpen, setRokOpen] = useState(false);

  const rokyBox = () => {
    setRokOpen(!rokOpen);
  };

  const [dlzkaAkcieOpen, setDlzkaAkcieOpen] = useState(false);

  const dlzkaAkcieBox = () => {
    setDlzkaAkcieOpen(!dlzkaAkcieOpen);
  };

  const extractYear = (dateString: string) => {
    const parts = dateString.split(" ");
    if (parts.length >= 1) {
      const datePart = parts[0];
      const yearParts = datePart.split(".");
      if (yearParts.length >= 3) {
        const year = yearParts[2];
        if (year.length === 4) {
          return year;
        }
      }
    }
    return null; 
  };

  const allYears = galeria.reduce((years: string[], prispevok) => {
    const yearFromZaciatok = extractYear(prispevok.datumZaciatok);
    const yearFromKoniec = extractYear(prispevok.datumKoniec);

    if (yearFromZaciatok && !years.includes(yearFromZaciatok)) {
      years.push(yearFromZaciatok);
    }

    if (yearFromKoniec && !years.includes(yearFromKoniec)) {
      years.push(yearFromKoniec);
    }

    return years;
  }, []);

  allYears.sort((a: string, b: string) => parseInt(b, 10) - parseInt(a, 10));

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.content}>
          {opened ? (
            <div className={styles.filterOpened}>
              <div
                className={styles.filterButton}
                onClick={() => setOpened(!opened)}
              >
                <img src="./filter.svg" alt="Filtre" />
                <span style={{ margin: "0 10px 0 5px" }}>|</span> Filtre
              </div>
            </div>
          ) : (
            <div className={styles.filterOpened}>
              <div
                className={styles.filterButton}
                onClick={() => setOpened(!opened)}
              >
                <span style={{ fontWeight: "bold" }}>X</span>{" "}
                <span style={{ margin: "0 10px 0 5px" }}>|</span> Filtre
              </div>
              <div className={styles.filterButton} onClick={rokyBox}>
                Rok
              </div>
              {rokOpen && (
                <div className={styles.box}>
                  {allYears.map((rok) => (
                    <div key={rok} className={styles.item}>
                      {rok}
                    </div>
                  ))}
                </div>
              )}
              <div className={styles.filterButton} onClick={dlzkaAkcieBox}>
                Dĺžka akcie
              </div>
              {dlzkaAkcieOpen && (
                <div className={styles.box}>
                  <div className={styles.item}>Stretnutie</div>
                  <div className={styles.item}>Jednodňová akcia</div>
                  <div className={styles.item}>Viacdňová akcia</div>
                </div>
              )}
            </div>
          )}
          <div className={styles.prispevky}>
            {galeria.map((prispevok) => {
              return <Prispevok key={prispevok.id} prispevok={prispevok} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fotogaleria;
