"use client";
import styles from "./styles/Home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Prispevok, galeria } from "./constants/data";
import Carousel from "./components/CustomCarousel/CustomCarousel";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel";

const Home = () => {
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

  console.log(pastEvents);

  console.log(galeria);

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImg}>
        <img src="/hory.webp" alt="Hory" />
        <div className={styles.kontent}>
          <h1 className={styles.nazov}>
            Odbor Mladej Matice
            <div className={styles.mesto}>Bratislava - Staré mesto</div>
          </h1>
          <div className={styles.buttons}>
            <button className={styles.button} style={{ marginRight: "3vw" }}>
              Staň sa členom
            </button>
            <button className={styles.reversedButton}>Čítať viac ▼</button>
          </div>
        </div>
      </div>

      <CustomCarousel
        nazov="POSLEDNÉ AKCIE"
        preklik="fotogaleria"
        akcieGaleria={pastEvents}
      />

      <CustomCarousel
        nazov="NAJBLIŽŠIE AKCIE"
        preklik="akcie"
        akcieGaleria={futureEvents}
      />
    </div>
  );
};

export default Home;
