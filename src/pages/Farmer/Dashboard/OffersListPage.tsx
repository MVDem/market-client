import { useNavigate } from 'react-router-dom';
import TableList from '../../../components/TableList/TableList';
import { OfferCard } from '../../../types/Offers';

function OffersListPage() {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/farmer/offers/one/${id}`);
  };

  return (
    <TableList
      tableNames={_tableNames}
      items={_offers}
      handleItemClick={handleClick}
    />
  );
}
export default OffersListPage;

const _tableNames: Array<keyof OfferCard> = [
  'name',
  'price',
  'unit',
  'description_EN',
  'description_HE',
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
