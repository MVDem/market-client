import Header from '../../components/header/Header';
import OffersList from '../../components/offerslist/OffersList';

export default function Home() {
  return (
    <>
      <Header />
      <h1>Home - Farmer Market</h1>
    </>
  );
}
export default function Home() {
  const offers = [ // just for demo
    {
      id: '1',
      unit: 'kg',
      price: 10,
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
      description: 'Fresh apples',
      farmer: 'John Doe',
      farmerId: 12345,
    },
    {
      id: '2',
      unit: 'kg',
      price: 15,
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
      description: 'Organic oranges',
      farmer: 'Jane Doe',
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
