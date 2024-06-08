import React from 'react';
import { OfferCard } from '../../types/Offers';
import { useParams } from 'react-router-dom';
import OfferShortDetails from '../../components/OfferShortDetails/OfferShortDetails';
import styles from './OfferPage.module.scss';

const OfferCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const offer = _offers.find((offer) => offer.id === id);

  if (!offer) {
    return <p>Offer not found</p>;
  }
  return (
    <div className={styles.container}>
      <OfferShortDetails offer={offer} />
      <span className={styles.line}></span>
      <div className={styles.farmerInfo}>
        <div className={styles.logo}>
          <img src={_farmer.imageURL} alt="Logo" />
        </div>
        <div className={styles.info}>
          <h3>{_farmer.name}</h3>
          <p>
            {_farmer.city}, {_farmer.address}
          </p>
          <p>{_farmer.email}</p>
        </div>
      </div>
      <span className={styles.line}></span>
    </div>
  );
};

export default OfferCardPage;

const _offers: OfferCard[] = [
  {
    id: '1',
    name: 'Apples',
    unit: '3 kg',
    price: '10',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    isActive: true,
    description_EN:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptatibus aliquid impedit facere beatae autem, sequi soluta nesciunt recusandae tempore quo, aliquam natus odio. Minus adipisci praesentium necessitatibus tempore cumque nam impedit optio porro saepe sunt autem, sapiente voluptate aut facilis ipsum animi sed consectetur. Quisquam ',
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

const _farmer = {
  id: 4,
  name: "Bob's Farm",
  description:
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
  city: 'New York',
  address: '1234 Main St',
  email: 'farmer@gmail.com',
  phone: '123-456-7890',
  coordinateLat: null,
  coordinateLong: null,
  userId: 5,
  imageURL: 'farmers/default.jpg',
  createdAt: '2024-06-05T10:34:44.158Z',
  updatedAt: '2024-06-05T10:34:44.158Z',
};
