import React from 'react';
import styles from './OfferCard.module.scss';
import { OfferCard, OfferCard as OfferCardType } from '../../types/Offers';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';

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
    <>
      <Header />
      <div className={styles.card}>
        <img
          src={offer.image}
          alt={offer.description_EN}
          className={styles.image}
        />
        <div className={styles.details}>
          <div className={styles.unitPrice}>
            <h3 className={styles.unit}>{offer.unit}</h3>
            <p className={styles.price}>${offer.price}</p>
          </div>
          <p className={styles.description}>{offer.description_EN}</p>
          <p className={styles.farmer}>Farmer: {offer.farmerId}</p>
        </div>
      </div>
    </>
  );
};

export default OfferCardPage;
