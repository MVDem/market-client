import { useEffect } from 'react';
import { offersAPI } from '../../store/services/offers.service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateSearchParams } from '../../store/slices/search.slice';
import styles from './Home.module.scss';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import Map from '../../components/Map/Map';
import InfiniteScroll from 'react-infinite-scroll-component';
import OfferCard from '../../components/OfferCard/OfferCard';
import OfferCardSkeleton from '../../components/OfferCard/OfferCardSkeleton';

export default function Home() {
  const searchState = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();
  const {
    data: paginatedData,
    isSuccess: isSuccessOffers,
    refetch,
  } = offersAPI.useGetPaginatedSortedOffersQuery({
    stateParams: searchState,
  });

  useEffect(() => {
    refetch();
  }, [searchState]);

  const fetchMoreData = () => {
    dispatch(
      updateSearchParams({
        pagination: {
          page: searchState.pagination.page + 1,
          limit: searchState.pagination.limit,
        },
      }),
    );
  };

  return (
    <>
      <div className={styles.container}>
        <CategoryList />
        <Banner />
        {paginatedData && (
          <>
            {searchState.display === 'map' ? (
              <Map offersList={paginatedData?.offers} />
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
                  dataLength={paginatedData.offers.length}
                  next={fetchMoreData}
                  hasMore={paginatedData.offers.length < paginatedData.count}
                  loader={<OfferCardSkeleton count={10} />}
                  style={{ overflow: 'unset' }}
                  pullDownToRefreshThreshold={50}
                  className={styles.offersList}
                >
                  {isSuccessOffers && (
                    <>
                      {paginatedData?.offers.map((offer, i) => (
                        <div key={i} className={styles.card}>
                          <OfferCard offer={offer} />
                        </div>
                      ))}
                    </>
                  )}
                </InfiniteScroll>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
