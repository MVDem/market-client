import styles from './farmerPage.module.scss';
import { useParams } from 'react-router-dom';
import { farmersAPI } from '../../store/services/farmers.service';
import OffersList from '../../components/OfferCard/OffersList';
import { offersAPI } from '../../store/services/offers.service';
import { SearchState } from '../../store/slices/search.slice';
import { useEffect, useState } from 'react';

function FarmerPage() {
  const { id } = useParams<{ id: string }>();
  const { data: farmer } = farmersAPI.useGetFarmerByIdQuery(id!);

  const [searchState, setSearchState] = useState<SearchState>({
    search: { columnName: 'farmerId', value: id!.toString() },
    sort: { columnName: 'createdAt', order: 'ASC' },
    pagination: { limit: 25, page: 1 },
    display: 'grid',
  });

  useEffect(() => {
    setSearchState((prev) => ({
      ...prev,
      search: { columnName: 'farmerId', value: id!.toString() },
    }));
  });

  const { data: farmeroffers } = offersAPI.useGetPaginatedSortedOffersQuery({
    stateParams: searchState,
    context: 'home',
  });

  // const { data: farmeroffers } = offersAPI.useGetPaginatedSortedOffersQuery({
  //   search: { columnName: 'farmerId', value: farmer?.id.toString() },
  // });

  return (
    <>
      {farmer && (
        <div className={styles.container}>
          <section className={styles.topContainer}>
            <div className={styles.cover}>
              <img src={farmer.coverURL} alt="avatar" />
            </div>
            <div className={styles.avatar}>
              <img
                src={
                  farmer?.logoURL ? farmer?.logoURL : '/public/img/default.jpg'
                }
                alt="avatar"
              />
            </div>
          </section>
          <section className={styles.title}>
            <div className={styles.mainInfo}>
              <h1>{farmer.name}</h1>
              <p>
                {farmer.city}, {farmer.address}
              </p>
            </div>
            <div className={styles.contacts}>
              <p>Phone: {farmer?.phone}</p>
              <p>Email: {farmer?.email}</p>
            </div>
          </section>
          <section className={styles.extra}>
            <h2>About</h2>
            <p>{farmer?.description}</p>
          </section>
          <span className={styles.line}></span>
          <section className={styles.offers}>
            <h2>Offers:</h2>
            <OffersList offersList={farmeroffers?.offers!} />
          </section>
        </div>
      )}
    </>
  );
}
export default FarmerPage;
