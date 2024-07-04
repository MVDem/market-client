import styles from './offerShortDetails.module.scss';
import { Offer } from '../../types/Offers';
import { fill } from '@cloudinary/url-gen/actions/resize';
import useCloudinary from '../../hooks/cloudinary';
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';
import { FaRegImage } from 'react-icons/fa6';

type OfferShortDetailsProps = {
  offer: Offer;
};

function OfferShortDetails({ offer }: OfferShortDetailsProps) {
  const cld = useCloudinary();
  const image = cld
    ?.image(offer.imageURL ? offer.imageURL : offer.product.imageURL)
    .resize(fill().width(400).height(400));

  return (
    <>
      {offer && (
        <div className={styles.wrapper}>
          <div className={styles.topContainer}>
            <p></p>
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
              {image && (
                <AdvancedImage
                  cldImg={image}
                  plugins={[
                    lazyload(),
                    responsive({ steps: 100 }),
                    placeholder({ mode: 'blur' }),
                  ]}
                />
              )}
              {!image && <FaRegImage />}
            </div>
            <div className={styles.info}>
              <h2>{offer.name_EN}</h2>
              <div className={styles.description}>
                <h3>About:</h3>
                <article>{offer.description_EN}</article>
              </div>
              <div className={styles.purchases}>
                <p>
                  ₪{offer.price} / <span>{offer.unit}</span>
                </p>
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
