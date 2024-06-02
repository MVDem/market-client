import styles from './Login.module.scss';
import Header from '../../components/header/Header';
import FormUICustom from '../../UI/FormUICustom';
import {
  firstNameInput,
  lastNameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
} from '../../utils/formUICustomFields';

export default function Login() {
  return (
    <>
      <Header />
      <h1>Login Page - Farmer Market</h1>
      <div className={styles.container}>
        <FormUICustom
          inputs={[
            firstNameInput,
            lastNameInput,
            emailInput,
            passwordInput,
            confirmPasswordInput,
          ]}
          buttonLabel='Register'
        />
      </div>
    </>
  );
}
