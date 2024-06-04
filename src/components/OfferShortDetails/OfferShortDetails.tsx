import { OfferCard } from '../../types/Offers';
import styles from './offerShortDetails.module.scss';

type OfferShortDetailsProps = {
  offer: OfferCard;
};

function OfferShortDetails({ offer }: OfferShortDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <h2>{offer.name}</h2>, <p>{offer.unit}</p>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.imageContainer}>
          <img src={offer.image} alt="image" />
        </div>
        <div>
          <div className={styles.purchases}>
            <div className="offer-short-details__price">Offer price</div>
            <button disabled>Buy now</button>
          </div>
          <div className={styles.description}>
            <h3>About:</h3>
            <article>{offer.description_EN}</article>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OfferShortDetails;
