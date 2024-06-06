import FormUICustom from '../../../UI/FormUICustom/FormUICustom';
import { z } from 'zod';
import { OfferCard } from '../../../types/Offers';

function EditOfferPage() {
  return (
    <div>
      <h1>Edit Offer</h1>
      <FormUICustom buttonLabel="Edit" inputs={inputs} />
    </div>
  );
}
export default EditOfferPage;

const _offer: OfferCard = {
  id: '1',
  name: 'Apples',
  unit: '3 kg',
  price: '10',
  image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
  isActive: true,
  description_EN: 'Fresh apples',
  description_HE: 'תפוחים חדשים',
  farmerId: 12345,
};

const inputs = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
    required: true,
    validationSchema: z.string().min(3),
    value: _offer.name,
  },
  {
    name: 'price',
    label: 'Price',
    type: 'number',
    placeholder: 'Price',
    required: true,
    validationSchema: z.string().min(1),
    value: _offer.price,
  },
  {
    name: 'unit',
    label: 'Unit',
    type: 'text',
    placeholder: 'Unit',
    required: true,
    validationSchema: z.string().min(1),
    value: _offer.unit,
  },
  {
    name: 'description_EN',
    label: 'Description EN',
    type: 'text',
    placeholder: 'Description EN',
    required: true,
    validationSchema: z.string().min(3),
    value: _offer.description_EN,
  },
  {
    name: 'description_HE',
    label: 'Description HE',
    type: 'text',
    placeholder: 'Description HE',
    required: true,
    validationSchema: z.string().min(3),
    value: _offer.description_HE,
  },
];

// export type Offer = {
//   id: string;
//   productId?: string;
//   name: string;
//   unit: string;
//   price: string;
//   image: string;
//   isActive: boolean;
//   description_EN: string;
//   description_HE: string;
//   farmerId: number;
//   createdAt: string;
//   updatedAt: string;
// };

// const _tableNames: Array<keyof OfferCard> = [
//   'name',
//   'price',
//   'unit',
//   'description_EN',
//   'description_HE',
// ];
