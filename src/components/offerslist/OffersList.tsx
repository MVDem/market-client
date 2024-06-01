import React from 'react';
import styles from './OffersList.module.scss';
import OffersListItem, { Offer } from './OffersListItem';

interface OffersListProps {
  offers: Offer[];
}

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <div className={styles.offersList}>
      {offers.map((offer) => (
        <OffersListItem key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OffersList;
