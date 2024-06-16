import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OfferShortDetails from '../../components/OfferShortDetails/OfferShortDetails';
import styles from './OfferPage.module.scss';
import { offersAPI } from '../../store/services/offers.service';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';
import { farmersAPI } from '../../store/services/farmers.service';
import OffersListItem from '../../components/OffersList/OffersListItem';

const OfferPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: offer } = offersAPI.useGetByIdQuery({ offerId: +id! });
  const { data: farmer } = farmersAPI.useGetFarmerByIdQuery(
    offer?.farmer.id.toString()!,
  );
  const { data: farmeroffers } = offersAPI.useGetPaginatedSortedOffersQuery({
    search: { columnName: 'farmerId', value: offer?.farmer.id.toString() },
  });

  const handleClick = () => {
    navigate(`/farmer/ditails/${offer?.farmer.id}`);
  };

  return (
    <>
      {offer && (
        <div className={styles.container}>
          <OfferShortDetails offerId={+id!} />
          <span className={styles.line}></span>
          {offer.farmer && (
            <div className={styles.farmerInfo} onClick={handleClick}>
              <div className={styles.logo}>
                <AvatarUI src={farmer?.logoURL!} />
              </div>
              <div className={styles.info}>
                <h3>{farmer?.name}</h3>
                <p>
                  {farmer?.city}, {farmer?.address}
                </p>
                <p>{farmer?.email}</p>
              </div>
            </div>
          )}
          <span className={styles.line}></span>
          <h2>Other products from this farmer:</h2>
          <div className={styles.offersList}>
            {farmeroffers?.offers.slice(0, 5)?.map((offer, i) => (
              <div key={i} className={styles.card}>
                <OffersListItem offer={offer} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default OfferPage;
