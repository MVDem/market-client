import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounse';
import styles from './SearchBar.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { FaGrip, FaMapLocationDot } from 'react-icons/fa6';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { TfiLayoutListThumbAlt } from 'react-icons/tfi';
import { TbLayoutListFilled } from 'react-icons/tb';

export default function SearchBar() {
  const [search, setSearch] = useState<string>('');
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
          placeholder="Search groceries"
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className={styles.mylable}>
          <RiSearch2Line />
        </label>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.glowOnHover} type="button">
          <FaMapLocationDot />
        </button>
        <button className={styles.glowOnHover} type="button">
          <FaGrip />
        </button>
      </div>
    </div>
  );
}
