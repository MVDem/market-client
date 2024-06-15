import { Backdrop, CircularProgress } from '@mui/material';
import FormUICustom, { DataFormType } from '../../UI/FormUICustom/FormUICustom';
import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Product } from '../../types/Products';
import { productsAPI } from '../../store/services/products.service';
import styles from './backDropForm.module.scss';

type BackdropCreateOfferFormProps = {
  open: boolean;
  isLoading: boolean;
  inputs: any;
  setOpen: (value: boolean) => void;
  onSubmit: (data: DataFormType) => void;
};

function BackdropCreateOfferForm({
  open,
  isLoading,
  inputs,
  setOpen,
  onSubmit,
}: BackdropCreateOfferFormProps) {
  const [productId, setProductId] = useState<number>();
  const [options, setOptions] = useState<{ label: string; value: number }[]>(
    [],
  );
  const { data: _products } = productsAPI.useGetProductsQuery(1); // check this

  useEffect(() => {
    const newOptions: { label: string; value: number }[] = [];
    _products &&
      _products.map((product: Product) => {
        newOptions.push({ label: product.name_EN, value: product.id });
      });
    console.log('options', newOptions);
    console.log('products', _products);
    setOptions(newOptions);
  }, [_products]);

  const handleClose = (event: any) => {
    if (event.target.getAttribute('aria-hidden')) {
      setOpen(false);
    }
  };

  const handleChange = (value: any) => {
    setProductId(value);
    console.log('value=>>', value);
  };

  const HundleSubmit = (data) => {
    data.productId = productId[0];
    onSubmit(data);
  };
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div
          data-id="backdrop"
          style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '1rem',
            gap: '1rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label className={styles.label}>
            Select a product
            <Select
              mode="tags"
              style={{
                width: '100%',
                height: '3rem',
                marginTop: '1rem',
              }}
              placeholder="Tags Mode"
              onChange={handleChange}
              options={options}
            />
          </label>
          <FormUICustom
            inputs={inputs}
            buttonLabel="Edit"
            onSubmit={HundleSubmit}
            colspan={12}
          />
        </div>
      )}
    </Backdrop>
  );
}
export default BackdropCreateOfferForm;
