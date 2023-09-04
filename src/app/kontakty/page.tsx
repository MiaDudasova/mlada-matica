"use client";
import React, { useEffect } from "react";
import styles from "../styles/Kontakty.module.scss";

const Kontakty: React.FC = () => {
  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.querySelector(`.${styles.close}`);

    const closeModal = () => {
      if (modal) {
        modal.style.display = "none";
      }
    };

    if (modal && btn && span) {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
      });

      span.addEventListener("click", closeModal);

      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });

      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeModal();
        }
      });
    }

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mapWrapper}>
        <div className={styles.mapa}>
          <img src="/images/mapaOMM.png" alt="Mapa" className={styles.mapaimg} />
          <a
            href="https://www.google.com/maps/place/Dom+Matice+Slovenskej/@48.1442593,17.1158307,15z/data=!4m6!3m5!1s0x476c89415aeef1f9:0x13540277dcc83410!8m2!3d48.1442593!4d17.1158307!16s%2Fg%2F1hc38wq99?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/pin.svg"
              alt=""
              className={styles.icon}
              style={{ right: "0.5vh", height: "4vh", fontWeight: "bold" }}
            />
          </a>
          <img
            src="/icons/zoom.svg"
            alt=""
            id="myBtn"
            className={styles.icon}
            style={{ right: "4.5vh", height: "3.95vh", fontWeight: "bold" }}
          />
        </div>
        <div id="myModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <img src="/images/mapaOMM.png" alt="Mapa" className={styles.close} />
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <h1 className={styles.nadpis}>Kontakty</h1>
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
          <div className={styles.kontakt}>
            <img src="/icons/phone.svg" alt="telefón" />
            <span className={styles.label}>Mobil:</span>
            <a href="tel:+421 915 673 515">+421 915 673 515</a>
          </div>
          <div className={styles.kontakt}>
            <img src="/icons/mail.svg" alt="mail" />
            <span className={styles.label}>E-mail:</span>
            <a href="mailto:ommbratislava@gmail.com">ommbratislava@gmail.com</a>
          </div>
          <div className={styles.kontakt}>
            <img src="/icons/instagram.svg" alt="instagram" />
            <span className={styles.label}>Instagram:</span>
            <a href="https://www.instagram.com/omm_bratislava/" target="_blank">
              @omm_bratislava
            </a>
          </div>
          <div className={styles.kontakt}>
            <img src="/icons/facebook.svg" alt="facebook" />
            <span className={styles.label}>Facebook:</span>
            <a
              href="https://www.facebook.com/people/Odbor-Mladej-Matice-Bratislava/100093738729850/"
              target="_blank"
            >
              Odbor Mladej Matice – Bratislava
            </a>
          </div>
          <br />
          <div className={styles.kontakt}>
            <img src="/icons/web.svg" alt="web" />
            <span className={styles.label}>Matica slovenská:</span>
            <a href="https://matica.sk/" target="_blank">
              matica.sk
            </a>
          </div>
          <div className={styles.kontakt}>
            <img src="/icons/web.svg" alt="web" />
            <span className={styles.label}>Mladá Matica:</span>{" "}
            <a href="https://mladamatica.sk/" target="_blank">
              mladamatica.sk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakty;
