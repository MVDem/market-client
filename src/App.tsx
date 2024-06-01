import { firstNameInput, emailInput } from './utils/formUICustomFields';
import FormUICustom from './UI/FormUICustom';

function App() {
  const inputs = [firstNameInput, emailInput];

  return (
    <>
      <div>Hello World! </div>
        <FormUICustom inputs={inputs} buttonLabel="Submit"/>
    </>
  );
};

export default App;
