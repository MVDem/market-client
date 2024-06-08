import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounse";
import styles from "./SearchBar.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";

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
      <div className={styles.myInput}>
        <input
          className={styles.myInputInput}
          autoFocus
          type="text"
          placeholder="Search groceries "
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className={styles.mylable}>
          <RiSearch2Line />
        </label>
        <div className={styles.foundGroceries}>Found groceries....</div>
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <button className={styles.glowOnHover} type="button">
            <FaBasketShopping />
          </button>
          <button className={styles.glowOnHover} type="button">
            <FaHeartCirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
