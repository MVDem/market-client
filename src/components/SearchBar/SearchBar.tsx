import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounse';
import styles from './SearchBar.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { FaGrip, FaMapLocationDot } from 'react-icons/fa6';
import { TbZoomReset } from 'react-icons/tb';
import { Params } from '../../pages/home/Home';

type SearchBarProps = {
  setParams: (params: any) => void;
  setIsMap: (value: boolean) => void;
  refetch: () => void;
  params: Params;
  setCurrentCategory: (id: number | null) => void;
};

export default function SearchBar({
  setParams,
  setIsMap,
  refetch,
  params,
  setCurrentCategory,
}: SearchBarProps) {
  const [mapBtn, setMapBtn] = useState<boolean>(true);
  const [text, setText] = useState<string>(params.search.value || '');
  const debounced = useDebounce(text);

  useEffect(() => {
    // if (debounced.length >= 3) {
    setParams((prev: Params) => {
      const newParams = { ...prev };
      newParams.search = { columnName: 'name_EN', value: debounced };
      delete newParams.categoryId;
      return newParams;
    });
    // }
  }, [debounced]);

  const displayMap = () => {
    setParams((prev: Params) => {
      const newParams = { ...prev };
      newParams.limit = 1000;
      return newParams;
    });
    refetch();
    setIsMap(true);
    setMapBtn(false);
  };

  const displayGrip = () => {
    setParams((prev: Params) => {
      const newParams = { ...prev };
      newParams.limit = 25;
      return newParams;
    });
    refetch();
    setIsMap(false);
    setMapBtn(true);
  };

  const onReset = () => {
    setParams((prev: Params) => {
      const newParams = { ...prev };
      newParams.search = { columnName: '', value: '' };
      delete newParams.categoryId;
      return newParams;
    });
    setText('');
    setCurrentCategory(null)
    refetch();
  }

  return (
    <div className={styles.contaner}>
      <div className={styles.search}>
        <input
          type="text"
          value={text}
          placeholder="Search groceries"
          onChange={(e) => setText(e.target.value)}
        />
        <label>
          <RiSearch2Line />
        </label>
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={styles.glowOnHover}
          type="button"
          onClick={onReset}
        >
          <TbZoomReset />
        </button>
        {mapBtn ? (
          <button
            className={styles.glowOnHover}
            type="button"
            onClick={displayMap}
          >
            <FaMapLocationDot />
          </button>
        ) : (
          <button
            className={styles.glowOnHover}
            type="button"
            onClick={displayGrip}
          >
            <FaGrip />
          </button>
        )}
      </div>
    </div>
  );
}
