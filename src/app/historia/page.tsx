import styles from "../styles/Historia.module.scss";

const Historia = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <h1 className={styles.nadpis}>História</h1>
          Odbor Mladej Matice Bratislava – Staré Mesto vznikol dňa 05. 10. 2001
          v Bratislave ako Klub Odboru Mladých Matičiarov Bratislava. Na
          ustanovujúcom valnom zhromaždení Klubu OMM bola zvolené nasledujúce
          vedenie:
          <ul className={styles.vedenie}>
            <li>
              <span className={styles.label}>Predsedníčka:</span> Natália
              Rolková
            </li>
            <li>
              <span className={styles.label}>Výbor:</span>
              Peter Horník, Anna Martinovičová (tajomníčka), Mgr. Roman
              Michelko, Mgr. Maroš Puchovský (podpredseda), Natália Rolková
            </li>
            <li>
              <span className={styles.label}>Dozorný výbor:</span>
              Zuzana Kušnieriková, Rastislav Schlossár, Blanka Škodáčková
            </li>
          </ul>
          Taktiež prvý krát zasadol výbor K-OMM. Schválila sa právna
          subjektivita K-OMM, stanovy, bol predložený návrh na uskutočnenie
          besedy k dňu študentstva a začalo sa s plánovaním besied a akcií. Tiež
          sa dala vyhotoviť prvá pečiatka K-OMM.
          <br />
          <br /> Členské ústredie Matice slovenskej v Martine potvrdilo
          registráciu K-OMM dňa 23. 10. 2001 pod registračným číslom 119/8.
          <br />
          <br /> Všetky dokumenty spojené s vznikom nášho OMM si môžete pozrieť
          tu:
          <ul className={styles.dokumenty}>
            <li>
              <a
                href="/files/zapisnica-z-ustanovujuceho-valneho-zhromazdenia-klubu-OMM-bratislava.pdf"
                target="_blank"
              >
                Zápisnica z ustanovujúceho valného zhromaždenia Klubu OMM
                Bratislava
              </a>
            </li>
            <li>
              <a
                href="/files/uznesenie-VZ-klubu-OMM-bratislava.pdf"
                target="_blank"
              >
                Uznesenie VZ Klubu OMM Bratislava
              </a>
            </li>
            <li>
              <a
                href="/files/zapisnica-z-ustanovujuceho-zasadnutia-vyboru-klubu-OMM-bratislava.pdf"
                target="_blank"
              >
                Zápisnica z ustanovujúceho zasadnutia Výboru Klubu OMM
                Bratislava
              </a>
            </li>
            <li>
              <a
                href="/files/potvrdenie-o-registracii-klubu-odboru-mladych-maticiarov.pdf"
                target="_blank"
              >
                Potvrdenie o registrácii Klubu Odboru mladých matičiarov
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Historia;
