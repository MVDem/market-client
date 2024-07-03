import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './offerCard.module.scss';
import { Offer } from '../../types/Offers';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';
import { FaRegImage } from 'react-icons/fa6';
import useCloudinary from '../../hooks/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';

interface OffersListItemProps {
  offer: Offer;
}

const OfferCard: React.FC<OffersListItemProps> = ({ offer }) => {
  const navigate = useNavigate();
  const cld = useCloudinary();
  const image = cld
    ?.image(offer.imageURL ? offer.imageURL : offer.product.imageURL)
    .resize(fill().width(320).height(350));

  const handleClick = () => {
    navigate(`/offer/ditails/${offer.id}`);
  };

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

export default React.memo(OfferCard);
