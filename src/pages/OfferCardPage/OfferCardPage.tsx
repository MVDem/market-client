import React from 'react';
import { OfferCard } from '../../types/Offers';
import { useParams } from 'react-router-dom';
import OfferShortDetails from '../../components/OfferShortDetails/OfferShortDetails';
import styles from './OfferCardPage.module.scss';

const offers: OfferCard[] = [
  {
    id: '1',
    name: 'Apples',
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
    name: 'Oranges',
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
    name: 'Inactive Product',
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
    name: 'Strawberries',
    unit: '100 g',
    price: '50',
    image: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055',
    isActive: true,
    description_EN:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptatibus aliquid impedit facere beatae autem, sequi soluta nesciunt recusandae tempore quo, aliquam natus odio. Minus adipisci praesentium necessitatibus tempore cumque nam impedit optio porro saepe sunt autem, sapiente voluptate aut facilis ipsum animi sed consectetur. Quisquam vel ratione delectus earum culpa quam temporibus soluta expedita! Aliquid, unde doloribus deleniti officiis error nisi velit, soluta quidem distinctio dolore officia doloremque provident accusamus mollitia iure. Sit sapiente optio esse corporis architecto adipisci, dicta mollitia quasi voluptates dolores ad est quos consequatur praesentium dolore illo enim necessitatibus ea, ratione in? Inventore, ex hic?',
    description_HE: 'תותי שדה',
    farmerId: 67890,
  },
];

const OfferCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((offer) => offer.id === id);

  if (!offer) {
    return <p>Offer not found</p>;
  }
  return (
    <div className={styles.container}>
      <OfferShortDetails offer={offer} />
    </div>
  );
};

export default OfferCardPage;
