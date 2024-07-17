import { useEffect, useState } from 'react';
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
import { Modal } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { Offer } from '../../types/Offers';

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
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

  const handleClick = (offer: Offer) => {
    setOpen(true);
    navigate(`/offer/ditails/${offer.id}`, {
      state: { offer: offer },
    });
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
                        <div
                          key={i}
                          className={styles.card}
                          onClick={() => handleClick(offer)}
                        >
                          <OfferCard offer={offer} farmerInfo={true} />
                        </div>
                      ))}
                    </>
                  )}
                </InfiniteScroll>
              </div>
            )}
          </>
        )}
        <Modal
          open={open}
          footer={<></>}
          onCancel={() => {
            setOpen(false);
            navigate(-1);
          }}
          width={'max-content'}
          className={styles.myModal}
          classNames={{ content: styles.myModalContent }}
        >
          <Outlet />
        </Modal>
      </div>
    </>
  );
}
