import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OffersListItem.module.scss';

export interface Offer {
  id: string;
  unit: string;
  price: number;
  image: string;
  description: string;
  farmer: string;
  farmerId: number;
}

interface OffersListItemProps {
  offer: Offer;
}

const OffersListItem: React.FC<OffersListItemProps> = ({ offer }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${offer.id}`} className={styles.link}>
        <img src={offer.image} alt={offer.description} className={styles.image} />
        <div className={styles.details}>
          <h3 className={styles.unit}>{offer.unit}</h3>
          <p className={styles.price}>${offer.price}</p>
          <p className={styles.description}>{offer.description}</p>
          <p className={styles.farmer}>Farmer: <a href={`/farmer/${offer.farmerId}`}>{offer.farmer}</a></p>
        </div>
      </Link>
    </div>
  );
};

export default OffersListItem;