import { useNavigate } from 'react-router-dom';
import { Offer } from '../../types/Offers';
import styles from './mapCard.module.scss';
import useCloudinary from '../../hooks/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';
import { FaRegImage } from 'react-icons/fa6';

type MapCardProps = {
  offer: Offer;
};

function MapCard({ offer }: MapCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/offer/ditails/${offer.id}`);
  };

  const cld = useCloudinary();
  const image = cld
    ?.image(offer.imageURL ? offer.imageURL : offer.product.imageURL)
    .resize(fill().width(400).height(400));

  return (
    <div className={styles.card} onClick={handleClick}>
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
        {/* <img
          src={offer.imageURL ? offer.imageURL : offer.product.imageURL}
          alt="image"
        /> */}
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
