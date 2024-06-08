import React from 'react';
import styles from './OffersList.module.scss';
import OffersListItem from './OffersListItem';
import { offersAPI } from '../../store/services/offers.service';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

interface OffersListProps {}

const OffersList: React.FC<OffersListProps> = () => {
  const { data: _data } = offersAPI.useGetPaginatedSortedOffersQuery({});
  console.log(_data?.offers);
  return (
    <div className={styles.offersList}>
      {_data?.offers.map(
        (offer) =>
          offer.isActive && (
            <Card
              key={offer.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Image" src={offer.image} />}
            >
              <OffersListItem key={offer.id} offer={offer} />
              {/* <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              /> */}
            </Card>
          ),
      )}
    </div>
  );
};

export default OffersList;
