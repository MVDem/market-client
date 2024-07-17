import { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import { useDebounce } from '../../hooks/debounse';
import { RiSearch2Line } from 'react-icons/ri';
import { FaGrip, FaMapLocationDot } from 'react-icons/fa6';
import { RxReset } from 'react-icons/rx';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  resetSearchParams,
  updateSearchParams,
} from '../../store/slices/search.slice';

type SearchBarProps = {};

export default function SearchBar({}: SearchBarProps) {
  const [text, setText] = useState<string>('');
  const searchState = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();

  const debounced = useDebounce(text);

  useEffect(() => {
    let columnName = '';
    if (debounced.length > 0) {
      columnName = 'name_EN';
    }
    dispatch(
      updateSearchParams({
        search: { columnName, value: debounced },
        pagination: { limit: 25, page: 1 },
      }),
    );
  }, [debounced]);

  useEffect(() => {
    if (searchState.search.columnName === 'name_EN') {
      setText(searchState.search.value);
    } else {
      setText('');
    }
  }, [searchState.search.value]);

  const handleDisplayMod = (mod: string) => {
    dispatch(updateSearchParams({ display: mod }));
  };

  const handleReset = () => {
    dispatch(resetSearchParams());
  };

  return (
    <div className={styles.contaner}>
      <label className={styles.search}>
        <span className={styles.icon}>
          <RiSearch2Line />
        </span>
        <input
          type="text"
          value={text}
          placeholder="Search groceries"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <div className={styles.buttonContainer}>
        <button
          className={styles.searchBtn}
          type="button"
          onClick={handleReset}
        >
          <RxReset />
        </button>
        {searchState.display === 'grid' ? (
          <button
            className={styles.searchBtn}
            type="button"
            onClick={() => handleDisplayMod('map')}
          >
            <FaMapLocationDot />
          </button>
        ) : (
          <button
            className={styles.searchBtn}
            type="button"
            onClick={() => handleDisplayMod('grid')}
          >
            <FaGrip />
          </button>
        )}
      </div>
    </div>
  );
}
