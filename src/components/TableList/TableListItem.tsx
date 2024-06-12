import { Descriptions, DescriptionsProps } from 'antd';
import { OfferCard } from '../../types/Offers';
import { FiEdit2 } from 'react-icons/fi';
import Backdrop from '@mui/material/Backdrop';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import FormUICustom, { DataFormType } from '../../UI/FormUICustom/FormUICustom';
import { offersAPI } from '../../store/services/offers.service';
import { UploadButton } from '@bytescale/upload-widget-react';

type TableOffersItemProps = {
  offer: OfferCard;
};

function TableListItem({ offer }: TableOffersItemProps) {
  const [open, setOpen] = useState(false);
  const [backdrop, setBackdrop] = useState('');
  console.log(backdrop);

  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();

  const handleClose = (event: any) => {
    if (event.target.getAttribute('aria-hidden')) {
      setOpen(false);
    }
  };
  const handleOpen = (backdrop: string) => {
    setBackdrop(backdrop);
    setOpen(true);
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

  const handleSubmit = (data: DataFormType) => {
    changeOffer({
      ...offer,
      ...data,
      price: data.price.toString(),
    });
  };

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <UploadButton
        options={options}
        onComplete={(files) => changeOffer(files[0])}
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
              src={offer.image}
              onClick={onClick}
            />
          </div>
        )}
      </UploadButton>
      <div style={{ flexGrow: '1' }}>
        <Descriptions
          title="Offer details"
          extra={
            <button onClick={() => handleOpen('info')}>
              <FiEdit2 size={20} />
            </button>
          }
          items={items}
        />
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {backdrop === 'info' && (
          <>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <div
                data-id="backdrop"
                style={{
                  backgroundColor: 'white',
                  padding: '3rem',
                  borderRadius: '1rem',
                }}
              >
                <FormUICustom
                  inputs={inputs}
                  buttonLabel="Edit"
                  onSubmit={handleSubmit}
                />
              </div>
            )}
          </>
        )}
      </Backdrop>
    </div>
  );
}
export default TableListItem;

const inputs = [
  {
    name: 'name_EN',
    label: 'English name',
    type: 'text',
    placeholder: 'Enter English name',
    required: true,
  },
  {
    name: 'name_HE',
    label: 'Hebrew name',
    type: 'text',
    placeholder: 'Enter Hebrew name',
    required: true,
  },
  {
    name: 'price',
    label: 'Price',
    type: 'number',
    placeholder: 'Enter price',
    required: true,
  },
  {
    name: 'description_EN',
    label: 'English description',
    type: 'text',
    placeholder: 'Enter English description',
    required: true,
  },
  {
    name: 'description_HE',
    label: 'Hebrew description',
    type: 'text',
    placeholder: 'Enter Hebrew description',
    required: true,
  },
  {
    name: 'unit',
    label: 'Unit',
    type: 'text',
    placeholder: 'Enter unit',
    required: true,
  },
];

const options = {
  apiKey: 'free',
  maxFileCount: 1,
};
