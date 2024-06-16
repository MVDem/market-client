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

  const { data: _products } = productsAPI.useGetProductsQuery(1);
  const [options, setOptions] = useState<{ label: string; value: string }[]>([
    { value: '123', label: 'alex' },
  ]);

  useEffect(() => {
    const newOptions: { label: string; value: string }[] = [];
    _products &&
      _products.map((product: Product) => {
        newOptions.push({ label: product.name_EN, value: product.id });
      });

    setOptions(newOptions);
  }, [_products]);

  const handleClose = (event: any) => {
    if (event.target.getAttribute('aria-hidden')) {
      setOpen(false);
    }
  };

  const handleChange = (value: number) => {
    setProductId(value);
  };

  const HundleSubmit = (data: DataFormType) => {
    data.productId = productId!;
    onSubmit(data);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

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
              getPopupContainer={(trigger) => trigger.parentNode}
              showSearch
              optionFilterProp="children"
              filterOption={filterOption}
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
