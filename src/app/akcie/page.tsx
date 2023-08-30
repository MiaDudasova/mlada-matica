"use client";
import { useState } from "react";
import { Prispevok, galeria } from "../constants/data";
import styles from "../styles/Akcie.module.scss";

const Akcie = () => {
  const [expandedPopisId, setExpandedPopisId] = useState<string | null>(null);

  function truncatePopis(text: any, maxLength: any) {
    if (text.length <= maxLength) return text;
    return text.slice(0, text.lastIndexOf(" ", maxLength)) + "...";
  }

  const getDirectImageUrl = (url: any) => {
    const fileId = url.match(/\/file\/d\/(.+?)\//)[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  const getURLFriendlyName = (name: string) => {
    const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return normalized.toLowerCase().replace(/\s+/g, "-");
  };

  function parseDate(dateStr: any) {
    const [datePart, timePart] = dateStr.split(" ");
    const [day, month, year] = datePart.split(".");
    const [hour = "00", minute = "00", second = "00"] = (
      timePart || "00:00:00"
    ).split(":");
    return new Date(
      `${month}/${day}/${year} ${hour}:${minute}:${second}`
    ).getTime();
  }

  function compareDatumZaciatok(a: Prispevok, b: Prispevok) {
    const timeA = parseDate(a.datumZaciatok);
    const timeB = parseDate(b.datumZaciatok);

    return timeA - timeB;
  }

  const sortedGaleria = galeria.slice().sort(compareDatumZaciatok).reverse();
  console.log(sortedGaleria);

  const currentDate = new Date();

  const pastEvents = galeria.filter((event) => {
    const eventDate = parseDate(event.datumZaciatok);
    return eventDate < currentDate.getTime();
  });
  pastEvents.sort(compareDatumZaciatok).reverse();

  const futureEvents = galeria.filter((event) => {
    const eventDate = parseDate(event.datumZaciatok);
    return eventDate >= currentDate.getTime();
  });
  futureEvents.sort(compareDatumZaciatok);

  return (
    <div className={styles.wrapper}>
      <div className={styles.akcie}>
        {futureEvents.map((akcia) => {
          return (
            <div key={akcia.id} className={styles.akciaBuducnost}>
              <div className={styles.textWrapper}>
                <span className={styles.nazov}>{akcia.nazov}</span>
                <div className={styles.datum}>
                  {akcia.datumZaciatok} - {akcia.datumKoniec}
                </div>
                <span className={styles.popis}>{akcia.popis}</span>
                <div className={styles.buttonWrapper}>
                  <a
                    href={"/akcie/" + getURLFriendlyName(akcia.nazov)}
                    className={styles.button}
                  >
                    Zobraziť viac
                  </a>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <img src={akcia.obrazok} alt="Fotka" />
              </div>
            </div>
          );
        })}
        {pastEvents.map((akcia) => {
          return (
            <div key={akcia.id} className={styles.akciaMinulost}>
              <div className={styles.textWrapper}>
                <span className={styles.nazov}>{akcia.nazov}</span>
                <div className={styles.datum}>
                  {akcia.datumZaciatok} - {akcia.datumKoniec}
                </div>
                <span className={styles.popis}>{akcia.popis}</span>
                <div className={styles.buttonWrapper}>
                  <a
                    href={"/akcie/" + getURLFriendlyName(akcia.nazov)}
                    className={styles.button}
                  >
                    Zobraziť viac
                  </a>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <img src={akcia.obrazok} alt="Fotka" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Akcie;
