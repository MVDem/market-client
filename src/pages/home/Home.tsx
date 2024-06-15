import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';

import OffersList from '../../components/OffersList/OffersList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { offersAPI } from '../../store/services/offers.service';
import styles from './Home.module.scss';
import Map from '../../components/Map/Map';

export type Params = {
  search: {
    columnName: string;
    value: string;
  };
  limit: number;
  page: number;
  sortBy: string;
  order: string;
};

export default function Home() {
  const [isMap, setIsMap] = useState(false);
  const [params, setParams] = useState<Params>({
    search: { columnName: '', value: '' },
    limit: 25,
    page: 1,
    sortBy: 'createdAt',
    order: 'ASC',
  });

  const { data: _data } = offersAPI.useGetPaginatedSortedOffersQuery(params);
  const { offers } = _data || { offers: [] };
  // console.log(offers, count);

  return (
    <>
      <div className={styles.container}>
        <SearchBar setParams={setParams} setIsMap={setIsMap} />
        <CategoryList />
        <Banner />
        {isMap ? (
          <Map offersList={offers} />
        ) : (
          <OffersList offersList={offers} />
        )}
      </div>
    </>
  );
}
