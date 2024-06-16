import { Descriptions, DescriptionsProps } from 'antd';
import { Offer } from '../../types/Offers';
import { FiEdit2 } from 'react-icons/fi';
import { useState } from 'react';
import { offersAPI } from '../../store/services/offers.service';
import BackdropForm from '../BackdropForm/BackdropForm';
import { CircularProgress } from '@mui/material';

type TableOffersItemProps = {
  offer: Offer;
  refetch: () => void;
};
type DataFormTypeCustom = {
  name_EN: string;
  name_HE: string;
  price: number;
  description_EN: string;
  description_HE: string;
  unit: string;
  imageURL?: {
    file: {
      originFileObj: File;
    };
  };
  [key: string]: any;
};

function TableListItem({ offer, refetch }: TableOffersItemProps) {
  const [open, setOpen] = useState(false);
  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();

  const handleSubmit = async (data: DataFormTypeCustom) => {
    console.log('data=>>>>', data);

    const formData = new FormData();
    for (let key in data) {
      if (key.includes('imageURL')) {
        formData.append('file', data[key].file.originFileObj);
        continue;
      }
      formData.append(key, String(data[key]));
    }
    await changeOffer({ body: formData, id: offer.id });
    setOpen(false);
    await refetch();
  };
  console.log('offer', offer);

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'English name',
      children: offer.name_EN,
    },
    {
      key: '2',
      label: 'Hebrew name',
      children: offer.name_HE,
    },
    {
      key: '3',
      label: 'Price',
      children: offer.price,
    },
    {
      key: '4',
      label: 'English description',
      children: offer.description_EN,
    },
    {
      key: '5',
      label: 'Hebrew description',
      children: offer.description_HE,
    },
    {
      key: '6',
      label: 'Unit',
      children: offer.unit,
    },
  ];
  const inputs = [
    {
      name: 'name_EN',
      label: 'English name',
      type: 'text',
      placeholder: 'Enter English name',
      required: true,
      defaultValue: offer.name_EN,
    },
    {
      name: 'name_HE',
      label: 'Hebrew name',
      type: 'text',
      placeholder: 'Enter Hebrew name',
      required: true,
      defaultValue: offer.name_HE,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      placeholder: 'Enter price',
      required: true,
      defaultValue: offer.price,
    },
    {
      name: 'description_EN',
      label: 'English description',
      type: 'text',
      placeholder: 'Enter English description',
      required: true,
      defaultValue: offer.description_EN,
    },
    {
      name: 'description_HE',
      label: 'Hebrew description',
      type: 'text',
      placeholder: 'Enter Hebrew description',
      required: true,
      defaultValue: offer.description_HE,
    },
    {
      name: 'unit',
      label: 'Unit',
      type: 'text',
      placeholder: 'Enter unit',
      required: true,
      defaultValue: offer.unit,
    },
    {
      name: 'imageURL',
      label: 'Image',
      type: 'upload',
      placeholder: 'Enter unit',
      required: true,
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ width: '20%', borderRadius: '1rem', overflow: 'hidden' }}>
        <img
          src={offer.imageURL ? offer.imageURL : offer.product.imageURL}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div style={{ flexGrow: '1' }}>
          <Descriptions
            title="Offer details"
            extra={
              <FiEdit2
                size={20}
                style={{ color: 'black', cursor: 'pointer' }}
                onClick={() => setOpen(true)}
              />
            }
            items={items}
          />
        </div>
      )}
      <BackdropForm
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit}
        inputs={inputs}
        isLoading={isLoading}
      />
    </div>
  );
}
export default TableListItem;
