import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounse';
import styles from './SearchBar.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { FaGrip, FaMapLocationDot } from 'react-icons/fa6';
import { Params } from '../../pages/home/Home';

type SearchBarProps = {
  setParams: (params: any) => void;
  setIsMap: (value: boolean) => void
};

export default function SearchBar({ setParams, setIsMap }: SearchBarProps) {
  const [search, setSearch] = useState<string>('');
  const [text, setText] = useState<string>('');
  const debounced = useDebounce(text);

  useEffect(() => {
    if (debounced.length > 3) {
      setParams((prev: Params) => {
        const newParams = { ...prev };
        newParams.search = { columnName: 'name_EN', value: debounced };
        return newParams;
      });
      console.log(text);
    }
  }, [debounced]);

  return (
    <div className={styles.contaner}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search groceries"
          onChange={(e) => setText(e.target.value)}
        />
        <label>
          <RiSearch2Line />
        </label>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.glowOnHover} type="button" onClick={() => setIsMap(true)}>
          <FaMapLocationDot />
        </button>
        <button className={styles.glowOnHover} type="button" onClick={() => setIsMap(false)}>
          <FaGrip />
        </button>
      </div>
    </div>
  );
}
