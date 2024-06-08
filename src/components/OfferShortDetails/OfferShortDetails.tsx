import { OfferCard } from '../../types/Offers';
import styles from './offerShortDetails.module.scss';

type OfferShortDetailsProps = {
  offer: OfferCard;
};

function OfferShortDetails({ offer }: OfferShortDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <p>/Shop/Category</p>
        <div className={styles.category}>Category</div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.image}>
          <img src={offer.image} alt="image" />
        </div>
        <div className={styles.info}>
          <div className={styles.mainInfo}>
            <h2>{offer.name}</h2>
            <p>Unit: {offer.unit}</p>
          </div>
          <div className={styles.description}>
            <h3>About:</h3>
            <article>{offer.description_EN}</article>
          </div>
          <div className={styles.purchases}>
            <div className="offer-short-details__price">₪{offer.price}</div>
            <button disabled>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OfferShortDetails;
