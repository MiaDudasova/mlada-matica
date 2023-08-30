"use client"
import React, { useEffect } from "react";
import styles from "../styles/Kontakty.module.scss";

const Kontakty: React.FC = () => {
  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.querySelector(`.${styles.close}`);

    if (modal && btn && span) {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
      });

      span.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mapWrapper}>
        <img src="/mapaOMM.png" alt="Mapa" id="myBtn" className={styles.mapaimg} />
        <div id="myModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close}>&times;</span>
            <img src="/mapaOMM.png" alt="Mapa" className={styles.mapa} />
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/Dom+Matice+Slovenskej/@48.1442593,17.1158307,15z/data=!4m6!3m5!1s0x476c89415aeef1f9:0x13540277dcc83410!8m2!3d48.1442593!4d17.1158307!16s%2Fg%2F1hc38wq99?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zobraziť na mape
        </a>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <h1 className={styles.nadpis}>Kontakt</h1>
          Odbor Mladej Matice Bratislava – Staré Mesto
          <br />
          Grösslingová 2310/23
          <br />
          812 51 Bratislava – Staré Mesto
          <br />
          <br />
          <span className={styles.label}>Právna forma:</span> verejnoprávna
          inštitúcia zriadená osobitným zákonom (zákon o Matici slovenskej)
          <br />
          <span className={styles.label}>IČO:</span> 55551955
          <br />
          <br />
          <br />
          <span className={styles.label}>Mobil:</span> +421 915 673 515
          <br />
          <span className={styles.label}>E-mail:</span> ommbratislava@gmail.com
          <br />
          <span className={styles.label}>Instagram:</span> @omm_bratislava
          <br />
          <span className={styles.label}>Facebook:</span> Odbor Mladej Matice –
          Bratislava
          <br />
          <br />
          <span className={styles.label}>Web Matice slovenskej:</span> matica.sk
          <br />
          <span className={styles.label}>Web Mladej Matice:</span>{" "}
          mladamatica.sk
        </div>
      </div>
    </div>
  );
};

export default Kontakty;
