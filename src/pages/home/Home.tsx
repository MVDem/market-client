import Header from '../../components/header/Header';
import OffersList from '../../components/offerslist/OffersList';
import { OfferCard } from '../../types/Offers';
import styles from './Home.module.scss';

export default function Home() {
  const offers: OfferCard[] = [
    {
      id: '1',
      unit: '3 kg',
      price: '10',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
      isActive: true,
      description_EN: 'Fresh apples',
      description_HE: 'תפוחים חדשים',
      farmerId: 12345,
    },
    {
      id: '2',
      unit: '1 kg',
      price: '15',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
      isActive: true,
      description_EN: 'Organic oranges',
      description_HE: 'תפוזים חדשים',
      farmerId: 67890,
    },
    {
      id: '3',
      unit: '3 kg',
      price: '15',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
      isActive: false,
      description_EN: 'Inactive',
      description_HE: 'Inactive HE',
      farmerId: 67890,
    },
    {
      id: '4',
      unit: '100 g',
      price: '50',
      image: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055',
      isActive: true,
      description_EN: 'Field strawberries',
      description_HE: 'תותי שדה',
      farmerId: 67890,
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Home - Farmer Market</h1>
        <OffersList offers={offers} />
      </div>
    </>
  );
}
