import FormUICustom from '../../../UI/FormUICustom/FormUICustom';
import { z } from 'zod';
import { OfferCard } from '../../../types/Offers';

function EditOfferPage() {
  const handleEdit = (values: any) => {
    console.log('Edit offer', values);
  };

  return (
    <div>
      <h1>Edit Offer</h1>
      <FormUICustom buttonLabel="Edit" inputs={inputs} onSubmit={handleEdit} />
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
