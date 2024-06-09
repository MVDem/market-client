import React from 'react';
import styles from './OffersList.module.scss';
import OffersListItem from './OffersListItem';
import { offersAPI } from '../../store/services/offers.service';

interface OffersListProps {}

const OffersList: React.FC<OffersListProps> = () => {
  const { data: _data } = offersAPI.useGetPaginatedSortedOffersQuery({});
  console.log(_data?.offers);

  return (
    <div className={styles.offersList}>
      {_data?.offers.map((offer, i) => (
        <div key={i} className={styles.card}>
          <OffersListItem offer={offer} />
        </div>
      ))}
    </div>
  );
};

export default OffersList;
