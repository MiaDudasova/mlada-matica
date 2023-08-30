import styles from "./styles/Prispevok.module.scss";

const Prispevok = ({ prispevok }: any) => {
  const getDirectImageUrl = (url: any) => {
    const fileId = url.match(/\/file\/d\/(.+?)\//)[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  const pocetObrazkov = prispevok.obrazky.length - 3;

  const getURLFriendlyName = (name: string) => {
    const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
    return normalized.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <a
      href={"/fotogaleria/" + getURLFriendlyName(prispevok.nazov)}
      key={prispevok.id}
      className={styles.prispevok}
    >
      <div className={styles.obrazky}>
        <div className={styles.horne}>
          <img
            src={prispevok.obrazky[0]}
            alt="Fotka"
            className={styles.lu}
          />
          <img
            src={prispevok.obrazky[1]}
            alt="Fotka"
            className={styles.ru}
          />
        </div>
        <div className={styles.dolne}>
          <img
            src={prispevok.obrazky[2]}
            alt="Fotka"
            className={styles.ld}
          />
          <div className={styles.viacObrazkov}>
            <img
              src={prispevok.obrazky[3]}
              alt="Fotka"
              className={styles.obrazok}
            />
            <div className={styles.filter}></div>
            <p className={styles.pocet}>+ {pocetObrazkov}</p>
          </div>
        </div>
        <h2 className={styles.nazov}>{prispevok.nazov}</h2>
      </div>
    </a>
  );
};

export default Prispevok;
