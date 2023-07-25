import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.kontent}>
        <img
          src="/skautska-lalia.png"
          alt="Skautská ľália"
          className={styles.lalia}
        />
        Mia Dudášová - {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
