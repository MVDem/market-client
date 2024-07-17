import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OfferShortDetails from '../../components/OfferShortDetails/OfferShortDetails';
import styles from './OfferPage.module.scss';
import { offersAPI } from '../../store/services/offers.service';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';
import OfferCard from '../../components/OfferCard/OfferCard';

const OfferPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { data: farmeroffers } = offersAPI.useGetPaginatedSortedOffersQuery({
    stateParams: {
      search: { columnName: 'farmerId', value: state.offer?.farmer.id },
      sort: { columnName: 'createdAt', order: 'ASC' },
      pagination: { limit: 5, page: 1 },
      display: 'grid',
    },
  });
  console.log(farmeroffers?.offers);

  const handleNavigate = (directory: string, id: number) => {
    navigate(`/${directory}/ditails/${id}`);
  };

  return (
    <>
      {state.offer && (
        <div className={styles.container}>
          <OfferShortDetails offer={state.offer} />
          <span className={styles.line}></span>
          {state.offer.farmer && (
            <div
              className={styles.farmerInfo}
              onClick={() => handleNavigate('farmer', state.offer?.farmer.id)}
            >
              <div className={styles.logo}>
                <AvatarUI src={state.offer?.farmer?.logoURL!} />
              </div>
              <div className={styles.info}>
                <h3>{state.offer?.farmer?.name}</h3>
                <p>
                  {state.offer?.farmer?.city}, {state.offer?.farmer?.address}
                </p>
                <p>{state.offer?.farmer?.email}</p>
              </div>
            </div>
          )}
          <span className={styles.line}></span>
          <h2>Other products from this farmer:</h2>
          <div className={styles.offersList}>
            {farmeroffers?.offers.map((offer, i) => (
              <div
                key={i}
                className={styles.card}
                onClick={() => handleNavigate('offer', offer.id)}
              >
                <OfferCard offer={offer} farmerInfo={false} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default OfferPage;
