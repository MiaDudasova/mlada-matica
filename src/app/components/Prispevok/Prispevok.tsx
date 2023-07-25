import styles from "./styles/Prispevok.module.scss";

const Prispevok = ({prispevok}: any) => {
  const getDirectImageUrl = (url: any) => {
    const fileId = url.match(/\/file\/d\/(.+?)\//)[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  const pocetObrazkov = prispevok.obrazky.length - 3;

  return (
    <div key={prispevok.id} className={styles.prispevok}>
      <h2 className={styles.nazov}>{prispevok.nazov}</h2>
      <div className={styles.obrazky}>
        {prispevok.obrazky.slice(0, 3).map((obrazok: any, index: number) => (
          <img
            key={index}
            src={getDirectImageUrl(obrazok)}
            alt="hory"
            className={styles.obrazok}
          />
        ))}
        <div className={styles.viacObrazkov}>
          <img
            src={getDirectImageUrl(prispevok.obrazky[3])}
            alt="hory"
            className={styles.obrazok}
          />
          <div className={styles.filter}></div>
          <p className={styles.pocet}>+ {pocetObrazkov}</p>
        </div>
      </div>
    </div>
  );
};

export default Prispevok;
