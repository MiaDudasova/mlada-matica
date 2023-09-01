import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.kontent}>
        <img
          src="/images/skautska-lalia.png"
          alt="Skautská ľália"
          className={styles.lalia}
        />
        <a href="mailto: mia.istokova.806@gmail.com">
          Mia Dudášová - {new Date().getFullYear()}
        </a>
      </div>
    </div>
  );
};

export default Footer;
