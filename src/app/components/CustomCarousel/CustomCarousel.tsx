"use client";
import styles from "./styles/CustomCarousel.module.scss";
import { Carousel } from "react-responsive-carousel";
import { Prispevok, galeria } from "@/app/constants/data";
import { useState } from "react";

interface Props {
  nazov: string;
  preklik: string;
  akcieGaleria: Prispevok[];
}

const CustomCarousel = (props: Props) => {
  const { akcieGaleria } = props;
  const { nazov } = props;
  const { preklik } = props;

  function datumy(a: any, b: any) {
    const datePartsA = a.datumZaciatok.split(".");
    const datePartsB = b.datumZaciatok.split(".");
    const dateA = new Date(
      Number(datePartsA[2]),
      Number(datePartsA[1]) - 1,
      Number(datePartsA[0])
    );
    const dateB = new Date(
      Number(datePartsB[2]),
      Number(datePartsB[1]) - 1,
      Number(datePartsB[0])
    );

    return dateB.getTime() - dateA.getTime();
  }
  galeria.sort(datumy);
  const posledne3prispevky = galeria.slice(0, 5);

  const [expandedPopisId, setExpandedPopisId] = useState<string | null>(null);

  function truncatePopis(text: any, maxLength: any) {
    if (text.length <= maxLength) return text;
    return text.slice(0, text.lastIndexOf(" ", maxLength)) + "...";
  }

  const getDirectImageUrl = (url: any) => {
    const match = url.match(/\/file\/d\/([^/]+)/);
    if (match) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return url;
  };

  const generateUniqueIdFromImageUrl = (imageUrl: any) => {
    let uniqueId = imageUrl.charAt(4) + imageUrl.charAt(11);

    for (let i = 0; i < 4; i++) {
      const randomNum = Math.floor(Math.random() * 10);
      uniqueId += randomNum;
    }

    return uniqueId;
  };

  const getURLFriendlyName = (name: string) => {
    const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return normalized.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <a href={"/" + preklik} className={styles.preklik}>
          {nazov} →
        </a>
        <Carousel
          className={styles.carousel}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          interval={3500}
          showStatus={false}
        >
          {akcieGaleria.slice(0, 3).map((prispevok) => {
            console.log(preklik);
            return (
              <>
                {prispevok.obrazky.length !== 0 ? (
                  <a
                    href={
                      "/" + preklik + "/" + getURLFriendlyName(prispevok.nazov)
                    }
                    key={prispevok.id}
                    className={styles.prispevok}
                  >
                    {posledne3prispevky.some(
                      (item) => item.nazov === prispevok.nazov
                    ) && (
                      <div className={styles.akcia} key={prispevok.nazov}>
                        <span className={styles.nazov}>{prispevok.nazov}</span>
                        <span className={styles.datum}>
                          {prispevok.datumZaciatok} - {prispevok.datumKoniec}
                        </span>
                        <span className={styles.popis}>
                          {expandedPopisId === prispevok.id
                            ? prispevok.popis
                            : truncatePopis(prispevok.popis, 100)}
                        </span>
                        <div className={styles.obrazky}>
                          {prispevok.obrazky.slice(0, 4).map((obrazok) => (
                            <img
                              src={obrazok}
                              alt="Obrazok"
                              key={generateUniqueIdFromImageUrl(obrazok)}
                              className={styles.obrazok}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </a>
                ) : (
                  <a
                    href={
                      "/" + preklik + "/" + getURLFriendlyName(prispevok.nazov)
                    }
                    key={prispevok.id}
                    className={styles.prispevok}
                  >
                    {posledne3prispevky.some(
                      (item) => item.nazov === prispevok.nazov
                    ) && (
                      <div className={styles.akciaa} key={prispevok.nazov}>
                        <div className={styles.imageWrapper}>
                          <img src={prispevok.obrazok} alt="Fotka" />
                        </div>
                        <div className={styles.textWrapper}>
                          <span className={styles.nazov}>
                            {prispevok.nazov}
                          </span>
                          <span className={styles.datum}>
                            {prispevok.datumZaciatok} - {prispevok.datumKoniec}
                          </span>
                          <span className={styles.popis}>
                            {prispevok.popis}
                          </span>
                        </div>
                      </div>
                    )}
                  </a>
                )}
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
