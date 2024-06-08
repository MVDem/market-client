import React from 'react';
import { useParams } from 'react-router-dom';
import OfferShortDetails from '../../components/OfferShortDetails/OfferShortDetails';
import styles from './OfferPage.module.scss';
import { offersAPI } from '../../store/services/offers.service';

const OfferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: offer } = offersAPI.useGetOneByIdQuery({ offerId: id! });
  console.log(offer);

  return (
    <>
      {offer && (
        <div className={styles.container}>
          <OfferShortDetails offerId={id!} />
          <span className={styles.line}></span>
          <div className={styles.farmerInfo}>
            <div className={styles.logo}>
              <img src={offer.farmer.imageURL} alt="Logo" />
            </div>
            <div className={styles.info}>
              <h3>{offer.farmer.name}</h3>
              <p>
                {offer.farmer.city}, {offer.farmer.address}
              </p>
              <p>{offer.farmer.email}</p>
            </div>
          </div>
          <span className={styles.line}></span>
        </div>
      )}
    </>
  );
};

export default OfferPage;
