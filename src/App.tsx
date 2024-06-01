import { FormProvider, useForm } from 'react-hook-form';
import FormUICustom from './UI/FormUICustom';

function App() {
  const methods = useForm();
  const inputs = [
    { name: 'firstName', label: 'First name', type: 'text', required: true },
    { name: 'lastName', label: 'Last name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
  ];

  return (
    <>
      <div>Hello World! </div>
      <FormProvider {...methods}>
        <FormUICustom inputs={inputs} />
      </FormProvider>
    </>
  );
}

export default App;
