import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OffersListItem.module.scss';
import { OfferCard } from '../../types/Offers';

interface OffersListItemProps {
  offer: OfferCard;
}

const language = 'en';

const OffersListItem: React.FC<OffersListItemProps> = ({ offer }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${offer.id}`} className={styles.link}>
        <img
          src={offer.image}
          alt={language === 'en' ? offer.description_EN : offer.description_HE}
          className={styles.image}
        />
        <div className={styles.details}>
          <h3 className={styles.unit}>{offer.unit}</h3>
          <p className={styles.price}>${offer.price}</p>
          <p className={styles.description}>
            {language === 'en' ? offer.description_EN : offer.description_HE}
          </p>
          <p className={styles.farmer}>
            Farmer:
            <Link to={`/farmer/${offer.farmerId}`} className={styles.link}>
              {offer.farmerId}
            </Link>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default OffersListItem;
