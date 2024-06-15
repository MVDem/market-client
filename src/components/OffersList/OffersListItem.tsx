import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OffersListItem.module.scss';
import { Offer } from '../../types/Offers';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';

interface OffersListItemProps {
  offer: Offer;
}

const OffersListItem: React.FC<OffersListItemProps> = ({ offer }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/offer/ditails/${offer.id}`);
  };
  // console.log(offer);

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.image}>
        <img
          src={offer.imageURL ? offer.imageURL : offer.product.imageURL}
          alt="image"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.unit}>{offer.name_EN}</h3>
        <p className={styles.price}>{offer.unit}</p>
        <p className={styles.price}>₪{offer.price}</p>
      </div>
      <div className={styles.farmer}>
        <AvatarUI src={offer.farmer?.logoURL} size={50} />
        <h5>{offer.farmer?.name}</h5>
      </div>
    </div>
  );
};

export default OffersListItem;
