import { useEffect, useState } from 'react';
import TableList from '../../components/TableList/TableList';
import { useAppSelector } from '../../store/hooks';
import { OfferCard } from '../../types/Offers';
import { Farmer } from '../../types/User';
import styles from './profilePage.module.scss';
import { useNavigate } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';

function ProfilePage() {
  const { user } = useAppSelector((state) => state.authReducer);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.farmer?.id !== farmer.id) {
      setEditMode(true);
    }
  }, []);

  const handleClick = (id: number) => {
    console.log('handleClick', id);
  };

  const handleNavigate = () => {
    navigate(`/farmer/profile/edit`, { state: { farmer } });
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.topContainer}>
          <div className={styles.cover}>
            <img src="/img/1.jpg" alt="avatar" />
          </div>
          <div className={styles.avatar}>
            <img
              src={
                farmer?.imageURL ? farmer?.imageURL : '/public/img/default.jpg'
              }
              alt="avatar"
            />
          </div>
        </section>
        <section className={styles.title}>
          {editMode && (
            <button className={styles.edit} onClick={handleNavigate}>
              <FiEdit2 />
            </button>
          )}
          <div className={styles.mainInfo}>
            <h1>{farmer.name}</h1>
          </div>
          <div className={styles.contacts}>
            <p>Phone: {farmer?.phone}</p>
            <p>Email: {farmer?.email}</p>
          </div>
        </section>
        <section className={styles.extra}>
          <h2>About</h2>
          <p>{farmer?.description}</p>
        </section>
        <span className={styles.line}></span>
        <section className={styles.offers}>
          <h2>Offers:</h2>
          <TableList
            tableNames={_tableNames}
            items={_offers}
            handleItemClick={handleClick}
          />
        </section>
      </div>
    </>
  );
}
export default ProfilePage;

const farmer: Farmer = {
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
  imageURL: '/img/logo2.png',
  createdAt: '2024-06-05T10:34:44.158Z',
  updatedAt: '2024-06-05T10:34:44.158Z',
};

const _tableNames: Array<{ value: keyof OfferCard; label: string }> = [
  { value: 'image', label: 'Image' },
  { value: 'name', label: 'Name' },
  { value: 'price', label: 'Price' },
  { value: 'unit', label: 'Unit' },
  { value: 'isActive', label: 'Active' },
];

const _offers: OfferCard[] = [
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
    name: 'Inactive',
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
