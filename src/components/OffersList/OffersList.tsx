import React from 'react';
import styles from './OffersList.module.scss';
import OffersListItem from './OffersListItem';
import { offersAPI } from '../../store/services/offers.service';
import { OfferCard } from '../../types/Offers';

interface OffersListProps {
  offersList: OfferCard[];
}

const OffersList: React.FC<OffersListProps> = ({
  offersList,
}: OffersListProps) => {
  return (
    <div className={styles.offersList}>
      {offersList?.map((offer, i) => (
        <div key={i} className={styles.card}>
          <OffersListItem offer={offer} />
        </div>
      ))}
    </div>
  );
};

export default OffersList;
