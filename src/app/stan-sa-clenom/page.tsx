import styles from "../styles/StanSaClenom.module.scss";

const StanSaClenom = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.nadpis}>Staň sa členom</div>
          <div className={styles.popis}>
            Členom
            <span style={{ fontWeight: "bold" }}>
              &nbsp;Odboru Mladej Matice Bratislava – Staré Mesto&nbsp;
            </span>
            sa môže stať každý občan Slovenskej republiky, ako aj občan iného
            štátu, ktorý vyjadrí súhlas s poslaním, Programom a so Stanovami
            odboru Mladej Matice (OMM), Mladej Matice (MM) a Matice slovenskej
            (MS) a podá si prihlášku za riadneho člena OMM.
            <br />
            <br />
            Vzhľadom na príslušnosť OMM k MM, môže byť členom OMM iba občan do
            35 rokov. Členovia OMM sú členmi Mladej Matice a Matice slovenskej.
            <br />
            <br />
            Členský príspevok bol na tento rok stanovený na 5,-€.
          </div>
          <ol type="1">
            Ako sa stať členom OMM:
            <li> &nbsp; &nbsp; Vypíš a pošli nám prihlášku za člena OMM.</li>
            <a href="/files/prihlaska-za-clena-OMM.pdf" target="_blank">
              &nbsp; &nbsp;
              <img src="/dokument.svg" alt="dokument" />
              Prihláška za člena OMM
            </a>
            <li>
              {" "}
              &nbsp; &nbsp; Výbor OMM na svojom zasadnutí schváli Tvoje
              členstvo.
            </li>
            <li> &nbsp; &nbsp; Zašleme Ti rozhodnutie o prijatí.</li>
            <li> &nbsp; &nbsp; Zaplatíš členský príspevok.</li>
            <li> &nbsp; &nbsp; Vystavíme Ti členský preukaz.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StanSaClenom;
