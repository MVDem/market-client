import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounse";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const debounced = useDebounce(search);

  useEffect(() => {
    if (debounced.length > 3) {
      console.log(search);
    }
  }, [debounced]);

  return (
    <div className={styles.contanerSearch}>
      <div className={styles.myinput}>
        <input
          className={styles.myInputInput}
          autoFocus
          type="text"
          placeholder=" "
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className={styles.mylable}>
          <strong>Search groceries...</strong>
        </label>
        <div className={styles.foundGroceries}>Found groceries....</div>
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <button className={styles.glowOnHover} type="button">
            HOVER ME, THEN CLICK ME!
          </button>
          <button className={styles.glowOnHover} type="button">
            HOVER ME, THEN CLICK ME!
          </button>
        </div>
      </div>
    </div>
  );
}
