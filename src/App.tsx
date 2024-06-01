import { FormProvider } from 'react-hook-form';
import FormUICustom from './UI/FormUICustom';

function App() {
  const inputs = [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    // { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    // { name: 'email', label: 'Email', type: 'email', required: true },
  ];

  return (
    <>
      <div>Hello World! </div>
      <FormProvider>
        <FormUICustom inputs={inputs} />
      </FormProvider>
    </>
  );
}

export default App;
