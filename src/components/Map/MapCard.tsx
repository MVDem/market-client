import { useNavigate } from 'react-router-dom';
import { Offer } from '../../types/Offers';
import OffersListItem from '../OffersList/OffersListItem';
import styles from './mapCard.module.scss';

type MapCardProps = {
  offer: Offer;
};

function MapCard({ offer }: MapCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/offer/ditails/${offer.id}`);
  };
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
    </div>
  );
}
export default MapCard;
