import Header from '../../components/header/Header';
import OffersList from '../../components/offerslist/OffersList';
import { OfferCard } from '../../types/Offers';

export default function Home() {
  const offers:OfferCard[] = [
    {
      id: '1',
      unit: 'kg',
      price: '10',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
      isActive: true,
      description_EN: 'Fresh apples',
      description_HE: 'Fresh apples HE',
      farmerId: 12345,
    },
    {
      id: '2',
      unit: 'kg',
      price: '15',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
      isActive: true,
      description_EN: 'Organic oranges',
      description_HE: 'Organic oranges HE',
      farmerId: 67890,
    },
    {
      id: '3',
      unit: 'kg',
      price: '15',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
      isActive: false,
      description_EN: 'Inactive',
      description_HE: 'Inactive HE',
      farmerId: 67890,
    },
  ];

  return (
    <>
      <Header />
      <h1>Home - Farmer Market</h1>
      <OffersList offers={offers} />
    </>
  );
}