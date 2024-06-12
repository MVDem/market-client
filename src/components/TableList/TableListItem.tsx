import { Descriptions, DescriptionsProps } from 'antd';
import { OfferCard } from '../../types/Offers';
import { FiEdit2 } from 'react-icons/fi';
import { useState } from 'react';
import { DataFormType } from '../../UI/FormUICustom/FormUICustom';
import { offersAPI } from '../../store/services/offers.service';
import { UploadButton } from '@bytescale/upload-widget-react';
import BackdropForm from '../BackdropForm/BackdropForm';

type TableOffersItemProps = {
  offer: OfferCard;
};

function TableListItem({ offer }: TableOffersItemProps) {
  const [open, setOpen] = useState(false);
  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();
  console.log('offer', offer);

  const handleSubmit = (data: DataFormType) => {
    changeOffer({
      ...offer,
      ...data,
      price: data.price.toString(),
    });
  };

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
  ];

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <UploadButton
        options={options}
        // onComplete={(files) => changeOffer(files[0])}
      >
        {({ onClick }) => (
          <div style={{ height: 'max-content', maxWidth: '25%' }}>
            <img
              style={{
                height: 'auto',
                width: '100%',
                objectFit: 'cover',
                backgroundColor: '#777',
              }}
              src={offer.image ? offer.image : offer.product.imageURL}
              onClick={onClick}
            />
          </div>
        )}
      </UploadButton>
      <div style={{ flexGrow: '1' }}>
        <Descriptions
          title="Offer details"
          extra={
            <button onClick={() => setOpen(true)}>
              <FiEdit2 size={20} />
            </button>
          }
          items={items}
        />
      </div>
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

const options = {
  apiKey: 'free',
  maxFileCount: 1,
};
