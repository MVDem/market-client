import { OfferCard } from '../../types/Offers';
import styles from './TebleOffersItem.module.scss';

type TableOffersItemProps = {
  offerCard: OfferCard;
};

function TableOffersItem({ offerCard }: TableOffersItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={offerCard.image} alt="offer" />
      </div>
      <div className={styles.info}>
        <p>name :{offerCard.name} </p>
        <p>price :{offerCard.price} </p>
        <p>unit :{offerCard.unit} </p>
        <p>isActive :{offerCard.isActive} </p>
        <p>description :{offerCard.description_EN} </p>
      </div>
    </div>
  );
}
export default TableOffersItem;
