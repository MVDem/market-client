import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounse';
import styles from './SearchBar.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { FaGrip, FaMapLocationDot } from 'react-icons/fa6';

export default function SearchBar() {
  const [search, setSearch] = useState<string>('');
  const debounced = useDebounce(search);

  useEffect(() => {
    if (debounced.length > 3) {
      console.log(search);
    }
  }, [debounced]);

  return (
    <div className={styles.contaner}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search groceries"
          onChange={(e) => setSearch(e.target.value)}
        />
        <label>
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
