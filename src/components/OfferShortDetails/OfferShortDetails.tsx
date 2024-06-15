import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { offersAPI } from '../../store/services/offers.service';
import styles from './offerShortDetails.module.scss';

type OfferShortDetailsProps = {
  offerId: string;
};

function OfferShortDetails({ offerId }: OfferShortDetailsProps) {
  const { data: offer, isLoading } = offersAPI.useGetByIdQuery({
    offerId: +offerId!,
  });

  console.log(offer, isLoading);

  return (
    <>
      {isLoading && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      {!isLoading && offer && (
        <div className={styles.wrapper}>
          <div className={styles.topContainer}>
            <p>/Shop/Category</p>
            <div
              className={styles.category}
              style={{
                backgroundImage: `url(${offer.product.category.imageURL})`,
              }}
            >
              {offer.product.category.name_EN}
            </div>
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.image}>
              <img
                src={offer.imageURL ? offer.imageURL : offer.product.imageURL}
                alt="image"
              />
            </div>
            <div className={styles.info}>
              <div className={styles.mainInfo}>
                <h2>{offer.name_EN}</h2>
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
      )}
    </>
  );
}
export default OfferShortDetails;
