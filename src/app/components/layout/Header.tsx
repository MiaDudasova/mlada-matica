"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../layout/styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  useClient();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css"
        />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.domov}>
              <img
                src="./logoM.png"
                alt="Logo Mladá Matica"
                className={styles.logo}
              />
              <span className={styles.nazov}>Mladá Matica</span>
            </Link>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className={`${styles.navbarItems} ${isOpen ? styles.open : ""}`}>
            <li>
              <Link href="/kto-sme" className={styles.navbarItem}>
                Kto sme
              </Link>
            </li>
            <li>
              <Link href="/akcie" className={styles.navbarItem}>
                Akcie
              </Link>
            </li>
            <li>
              <Link href="/fotogaleria" className={styles.navbarItem}>
                Fotogaléria
              </Link>
            </li>
            <li>
              <Link href="/historia" className={styles.navbarItem}>
                História
              </Link>
            </li>
            <li>
              <Link href="/dokumenty" className={styles.navbarItem}>
                Dokumenty
              </Link>
            </li>
            <li>
              <Link href="/kontakty" className={styles.navbarItem}>
                Kontakty
              </Link>
            </li>
            <li>
              <Link href="/stan-sa-clenom" className={styles.navbarItem}>
                <span className={styles.button}>Staň sa členom</span>
              </Link>
            </li>
          </div>
          <img
            src="./menu.png"
            alt="Menu"
            id="menu-icon"
            className={styles.menuIcon}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

function useClient() {}
