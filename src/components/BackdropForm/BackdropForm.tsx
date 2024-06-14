import { Backdrop, CircularProgress } from '@mui/material';
import FormUICustom, { DataFormType } from '../../UI/FormUICustom/FormUICustom';

type BackdropFormProps = {
  open: boolean;
  isLoading: boolean;
  inputs: any;
  setOpen: (value: boolean) => void;
  onSubmit: (data: DataFormType) => void;
};

function BackdropForm({
  open,
  isLoading,
  inputs,
  setOpen,
  onSubmit,
}: BackdropFormProps) {
  const handleClose = (event: any) => {
    if (event.target.getAttribute('aria-hidden')) {
      setOpen(false);
    }
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
          }}
        >
          <FormUICustom
            inputs={inputs}
            buttonLabel="Edit"
            onSubmit={onSubmit}
            colspan={12}
          />
        </div>
      )}
    </Backdrop>
  );
}
export default BackdropForm;
