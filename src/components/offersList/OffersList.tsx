import React from 'react';
import styles from './OffersList.module.scss';
import { OfferCard } from '../../types/Offers';
import OffersListItem from './OffersListItem';

interface OffersListProps {
  offers: OfferCard[];
}

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <div className={styles.offersList}>
      {offers.map(
        (offer) =>
          offer.isActive && <OffersListItem key={offer.id} offer={offer} />
      )}
    </div>
  );
};

export default OffersList;
