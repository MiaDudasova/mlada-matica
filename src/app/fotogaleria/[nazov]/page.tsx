import { useRouter } from "next/router";
import styles from "../../styles/FotogaleriaAkcia.module.scss";
import { Prispevok, galeria } from "@/app/constants/data";

const Akcia = ({ params }: { params: { nazov: string } }) => {
  const nazov = params.nazov.toLowerCase().replace(/\s+/g, "-");
  console.log(nazov);

  const post: any = galeria.find(
    (post) => post.nazov.toLowerCase().replace(/\s+/g, "-") === nazov
  );
  console.log(post);

  const getDirectImageUrl = (url: any) => {
    const fileId = url.match(/\/file\/d\/(.+?)\//)[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  if (!post) {
    return <div className={styles.wrapper}>Post not found!</div>;
  }

  const generateUniqueIdFromImageUrl = (imageUrl: any) => {
    let uniqueId = imageUrl.charAt(4) + imageUrl.charAt(11);

    for (let i = 0; i < 4; i++) {
      const randomNum = Math.floor(Math.random() * 10);
      uniqueId += randomNum;
    }

    return uniqueId;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.textWrapper}>
          {post.nazov}
          <div className={styles.datum}>
            {post.datumZaciatok} - {post.datumKoniec}
          </div>
          {post.popis}
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={getDirectImageUrl(post.obrazok)}
            alt="Hlavná fotka"
            className={styles.mainImage}
          />
          <div className={styles.obrazky}>
            {post.obrazky.map((obrazok: any) => (
              <img
                src={getDirectImageUrl(obrazok)}
                alt="Fotka"
                key={generateUniqueIdFromImageUrl(obrazok)}
                className={styles.obrazok}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akcia;
