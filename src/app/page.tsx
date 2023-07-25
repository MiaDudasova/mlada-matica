"use client";
import styles from "./styles/Home.module.scss";
import { galeria } from "./constants/data";
import Prispevok from "./components/Prispevok/Prispevok";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  function datumy(a: any, b: any) {
    const datePartsA = a.datum.split(".");
    const datePartsB = b.datum.split(".");
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

  // Helper function to truncate popis to the last full word
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
    // Return the original URL if the regular expression doesn't match
    return url;
  };

   const generateUniqueIdFromImageUrl = (imageUrl:any) => {
     let uniqueId = imageUrl.charAt(4) + imageUrl.charAt(11);

     // Generate 4 random numbers between 0 and 9
     for (let i = 0; i < 4; i++) {
       const randomNum = Math.floor(Math.random() * 10);
       uniqueId += randomNum;
     }

     return uniqueId;
   };

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
        <a href="" className={styles.preklik}>
          POSLEDNÉ AKCIE →
        </a>
        <Carousel
          className={styles.carousel}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          interval={3500}
        >
          {galeria.slice(0, 5).map((prispevok) => (
            <div key={prispevok.id} className={styles.prispevok}>
              {posledne3prispevky.some(
                (item) => item.nazov === prispevok.nazov
              ) && (
                <div className={styles.akcia} key={prispevok.nazov}>
                  <span className={styles.nazov}>{prispevok.nazov}</span>
                  <span className={styles.datum}>{prispevok.datum}</span>
                  <span className={styles.popis}>
                    {expandedPopisId === prispevok.id
                      ? prispevok.popis
                      : truncatePopis(prispevok.popis, 100)}
                    {prispevok.popis.length > 100 && (
                      <>
                        {expandedPopisId === prispevok.id ? (
                          <button
                            className={styles.viacMenej}
                            onClick={() => setExpandedPopisId(null)}
                          >
                            zobraziť menej
                          </button>
                        ) : (
                          <button
                            className={styles.viacMenej}
                            onClick={() => setExpandedPopisId(prispevok.id)}
                          >
                            zobraziť viac
                          </button>
                        )}
                      </>
                    )}
                  </span>
                  <div className={styles.obrazky}>
                    {prispevok.obrazky.slice(0, 4).map((obrazok) => (
                      <img
                        src={getDirectImageUrl(obrazok)}
                        alt="Obrazok"
                        key={generateUniqueIdFromImageUrl(obrazok)}
                        className={styles.obrazok}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
