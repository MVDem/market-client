import React from 'react';
import styles from './OffersList.module.scss';
import OffersListItem from './OffersListItem';
import { offersAPI } from '../../store/services/offers.service';

interface OffersListProps {}

const OffersList: React.FC<OffersListProps> = () => {
  const { data: _data } = offersAPI.useGetFullOffersQuery(1);
  console.log(_data);

  return (
    <div className={styles.offersList}>
      {_data?.map((offer, i) => (
        <div key={i} className={styles.card}>
          <OffersListItem offer={offer} />
        </div>
      ))}
    </div>
  );
};

export default OffersList;
