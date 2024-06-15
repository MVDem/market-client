import { Offer } from '../../types/Offers';
import OffersListItem from '../OffersList/OffersListItem';
import styles from './mapCard.module.scss';

type MapCardProps = {
  offer: Offer;
};

function MapCard({ offer }: MapCardProps) {
  return (
    <div className={styles.container}>
      <OffersListItem offer={offer} />
    </div>
  );
}
export default MapCard;
