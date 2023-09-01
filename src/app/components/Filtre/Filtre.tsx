"use client";
import { useState } from "react";
import { galeria } from "@/app/constants/data";
import styles from "./styles/Filtre.module.scss";

interface FiltreProps {
  rokFilter: string;
  trvanieFilter: string;
  setRokFilter: React.Dispatch<React.SetStateAction<string>>;
  setTrvanieFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filtre: React.FC<FiltreProps> = ({
  rokFilter,
  trvanieFilter,
  setRokFilter,
  setTrvanieFilter,
}) => {
  const [opened, setOpened] = useState(true);
  const [rokOpen, setRokOpen] = useState(false);
  const [dlzkaAkcieOpen, setDlzkaAkcieOpen] = useState(false);

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
    <div className={styles.filtre}>
      {opened ? (
        <div className={styles.filterOpened}>
          <div
            className={styles.filterButton}
            onClick={() => setOpened(!opened)}
          >
            <img src="/icons/filter.svg" alt="Filtre" />
            <span style={{ margin: "0 10px 0 5px" }}>|</span> Filtre
          </div>
        </div>
      ) : (
        <div className={styles.filterOpened}>
          <div
            className={styles.filterButton}
            onClick={() => {
              setOpened(!opened);
              setRokFilter("");
              setRokOpen(false);
              setDlzkaAkcieOpen(false);
              setTrvanieFilter("");
            }}
          >
            <span style={{ fontWeight: "bold" }}>X</span>{" "}
            <span style={{ margin: "0 10px 0 5px" }}>|</span> Filtre
          </div>
          <div
            className={styles.filterButton}
            onClick={() => setRokOpen(!rokOpen)}
          >
            Rok
          </div>
          {rokOpen && (
            <div className={styles.box}>
              {allYears.map((rok) => (
                <div
                  key={rok}
                  className={styles.item}
                  onClick={() => {
                    setRokFilter(rok);
                    setRokOpen(false);
                  }}
                >
                  {rok}
                </div>
              ))}
            </div>
          )}
          {rokFilter !== "" && (
            <div onClick={() => setRokFilter("")} className={styles.filter}>
              {rokFilter}
            </div>
          )}
          <div
            className={styles.filterButton}
            onClick={() => setDlzkaAkcieOpen(!dlzkaAkcieOpen)}
          >
            Trvanie akcie
          </div>
          {dlzkaAkcieOpen && (
            <div className={styles.box}>
              <div
                className={styles.item}
                onClick={() => {
                  setTrvanieFilter("Stretnutie");
                  setDlzkaAkcieOpen(false);
                  console.log(trvanieFilter);
                }}
              >
                Stretnutie
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  setTrvanieFilter("Jednodňová akcia");
                  setDlzkaAkcieOpen(false);
                }}
              >
                Jednodňová akcia
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  setTrvanieFilter("Viacdňová akcia");
                  setDlzkaAkcieOpen(false);
                }}
              >
                Viacdňová akcia
              </div>
            </div>
          )}
          {trvanieFilter !== "" && (
            <div onClick={() => setTrvanieFilter("")} className={styles.filter}>
              {trvanieFilter}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filtre;
