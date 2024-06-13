import { useState } from 'react';
import Baner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';

import OffersList from '../../components/OffersList/OffersList';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Home.module.scss';

export default function Home() {
  const [isMap, setIsMap] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <h1>Home - Farmer Market</h1>
        <SearchBar setIsMap={setIsMap}/>
        <CategoryList />
        <Baner />
        {isMap ? <Map /> : <OffersList />}
      </div>
    </>
  );
}
