import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './OffersListItem.module.scss';
import { OfferCard } from '../../types/Offers';
import { truncate } from '../../utils/truncate';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';

interface OffersListItemProps {
  offer: OfferCard;
}

const language = 'en';
const maxDescLength = 100;

const OffersListItem: React.FC<OffersListItemProps> = ({ offer }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const url = `/offer/${offer.id}`;
    console.log(url);
    navigate(url);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.details}>
        <div className={styles.unitPrice}>
          <h3 className={styles.unit}>{offer.unit}</h3>
          <p className={styles.price}>₪{offer.price}</p>
        </div>
        <div className={styles.text}>
          <Avatar size={64} icon={<img src={offer.farmerId.} />} />
        </div>
      </div>
    </div>
  );
};

export default OffersListItem;
