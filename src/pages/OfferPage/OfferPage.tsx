import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OfferShortDetails from '../../components/OfferShortDetails/OfferShortDetails';
import styles from './OfferPage.module.scss';
import { offersAPI } from '../../store/services/offers.service';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';

const OfferPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: offer } = offersAPI.useGetByIdQuery({ offerId: +id! });

  console.log(offer);

  const handleClick = () => {
    navigate(`/farmer/profile/${offer?.farmer.id}`);
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
                <AvatarUI src={offer.farmer.logoURL} />
              </div>
              <div className={styles.info}>
                <h3>{offer.farmer.name}</h3>
                <p>
                  {offer.farmer.city}, {offer.farmer.address}
                </p>
                <p>{offer.farmer.email}</p>
              </div>
            </div>
          )}
          <span className={styles.line}></span>
        </div>
      )}
    </>
  );
};

export default OfferPage;
