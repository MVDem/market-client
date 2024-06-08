import React from "react";
import styles from "./Baner.module.scss";

export default function Baner() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContents}>
        <h2 className={styles.headerContentsH2}>
          Order your favorite food here
        </h2>
        <p className={styles.headerContentsP}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          suscipit voluptas excepturi ea illo earum necessitatibus, libero
          consequatur. Asperiores nam modi adipisci explicabo fugit vero sequi
          libero? Iusto, minus est.
        </p>
        <button className={styles.headerContentsButton}>Viev Menu</button>
      </div>
    </div>
  );
}
