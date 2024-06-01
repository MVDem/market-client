import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './OffersListItem.module.scss';
import { OfferCard } from '../../types/Offers';
import { truncate } from '../../utils/truncate';

interface OffersListItemProps {
  offer: OfferCard;
}

const language = 'en';
const maxDescLength = 100;

const OffersListItem: React.FC<OffersListItemProps> = ({ offer }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const url = `/product/${offer.id}`;
    console.log(url);
    navigate(url);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img
        src={offer.image}
        alt={language === 'en' ? offer.description_EN : offer.description_HE}
        className={styles.image}
      />
      <div className={styles.details}>
        <div className={styles.unitPrice}>
          <h3 className={styles.unit}>{offer.unit}</h3>
          <p className={styles.price}>${offer.price}</p>
        </div>
        <div className={styles.text}>
          <p className={styles.description}>
            {language === 'en'
              ? truncate(offer.description_EN, maxDescLength)
              : truncate(offer.description_HE, maxDescLength)}
          </p>
          <p className={styles.farmer}>
            Farmer:
            <Link to={`/farmer/${offer.farmerId}`} className={styles.link}>
              {offer.farmerId}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffersListItem;
