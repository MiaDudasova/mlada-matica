import styles from "../styles/KtoSme.module.scss";

const KtoSme = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src="/images/kto-sme.jpg" alt="Skupinová fotka" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.nadpis}>Kto sme?</div>
          <div className={styles.popis}>
            Sme skupina kamarátov, mladých Slovákov z Bratislavy a okolia,
            ktorých spája jedno:{" "}
            <span style={{ fontWeight: "bold" }}>
              priazeň k Slovensku, jeho tradíciám a histórií
            </span>
            .
            <br />
            <br />
            Ako jediný odbor Mladej Matice v celej Bratislave reprezentujeme
            mladých matičiarov za Mladú Maticu ale aj Maticu slovenskú.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Mladá Matica</span> je
            záujmovým odborom Matice slovenskej, združujúcim mladých Slovákov,
            ktorí odkazujú na matiční odkaz.
            <br />
            <br />
            <span style={{ fontStyle: "italic" }}>
              „Slovenská Matica je jednota milovníkov národa a života
              slovenského a jej cieľ: v členoch slovenského národa mravnú a umnú
              vzdelanosť budiť, rozširovať a utvrdzovať; slovenskú literatúru a
              krásne umenia pestovať a podporovať a tým i hmotný dobrobyt
              slovenského národa napomáhať, a na jeho zvelebení pracovať.“
            </span>
            - Stanovy Matice slovenskej, 1862
            <br />
            <br />
            <span className={styles.buttonWrapper}>
              Tak neváhaj a 
              <div className={styles.button}>
                <a href="/stan-sa-clenom">STAŇ SA ČLENOM</a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KtoSme;
