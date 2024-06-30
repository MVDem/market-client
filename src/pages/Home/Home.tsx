import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import OffersList from '../../components/OffersList/OffersList';
import { offersAPI } from '../../store/services/offers.service';
import styles from './Home.module.scss';
import Map from '../../components/Map/Map';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@mui/material';
import { Offer } from '../../types/Offers';
import { useAppSelector } from '../../store/hooks';

// export type Params = {
//   search: {
//     columnName: string;
//     value: string;
//   };
//   limit: number;
//   page: number;
//   sortBy: string;
//   order: string;
//   categoryId?: number;
// };

// export type ParamsByCategory = Params & {
//   categoryId: number;
// };

export default function Home() {
  const searchState = useAppSelector((state) => state.searchReducer);
  const { data: paginatedData } = offersAPI.useGetPaginatedSortedOffersQuery({
    stateParams: searchState,
  });
  console.log(paginatedData, 'paginatedData');
  const [hasMore, setHasMore] = useState(true);
  const [offers, setOffers] = useState<Offer[]>([]);

  // useEffect(() => {
  //   if (paginatedData) {
  //     if (params.page === 1) {
  //       setOffers(paginatedData.offers);
  //     } else {
  //       setOffers((prev) => [...prev, ...paginatedData.offers]);
  //     }
  //     setHasMore(paginatedData.offers.length >= params.limit);
  //   }
  // }, [paginatedData]);

  // const chooseCategory = (id: number) => {
  //   setCurrentCategory(id);
  //   setHasMore(true);
  // };

  const fetchMoreData = () => {
    console.log('🚀 ~ fetchMoreData');
    // setParams((prev) => ({
    //   ...prev,
    //   page: prev.page + 1,
    // }));
  };

  return (
    <>
      <div className={styles.container}>
        <CategoryList />
        <Banner />
        {searchState.display === 'map' ? (
          <Map offersList={offers} />
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <InfiniteScroll
              dataLength={offers.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<CircularProgress />}
              style={{ overflow: 'unset' }}
            >
              <OffersList offersList={offers} />
            </InfiniteScroll>
          </div>
        )}
      </div>
    </>
  );
}
