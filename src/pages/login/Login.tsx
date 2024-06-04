import styles from './Login.module.scss';
import Header from '../../components/header/Header';
import FormUICustom from '../../UI/FormUICustom';
import {
  emailInput,
  passwordInput,
  confirmPasswordInput,
} from '../../utils/formUICustomFields';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLogin } from '../../store/thunks/auth.thunk';
import { registerRequest } from '../../store/requests';
import { User } from '../../types/User';

const INITIAL_ROLE = 'FARMER';

export default function Login() {
  const [page, setPage] = useState('signUp');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);

  const signUp = async ({
    email,
    password,
  }: Pick<User, 'email' | 'password'>) => {
    const response = await registerRequest({
      email,
      password,
      role: INITIAL_ROLE,
    });
    // console.log('🚀 ~ Login ~ response:', await response.json())
    if (response.ok) {
      setPage('signIn');
    } else {

      const r: {statusCode: number, message: string}  = await response.json()
      console.log('🚀 ~ Login ~ r:', r)
      
      setErrorMessage(r.message);
    }
  };

  const signIn = ({ email, password }: Pick<User, 'email' | 'password'>) => {
    dispatch(fetchLogin({ email, password }));
    if (!user) {
    }
    navigate('/signIn');
  };
  
  useEffect(
    
    () => {
      console.log(errorMessage)
    }, []
  )
   

  return (
    <>
      <Header />
      <ul className={styles.switch}>
        <li>
          <a onClick={() => setPage('signUp')}>Sign up</a>
        </li>
        <li>
          <a onClick={() => setPage('signIn')}>Sign in</a>
        </li>
      </ul>
      <div className={styles.error}>{errorMessage}</div>
      {page === 'signUp' ? (
        <div className={styles.container}>
          <FormUICustom
            inputs={[emailInput, passwordInput, confirmPasswordInput]}
            buttonLabel='Sign up'
            onSubmit={signUp}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <FormUICustom
            inputs={[emailInput, passwordInput]}
            buttonLabel='Sign in'
            onSubmit={signIn}
          />
        </div>
      )}
    </>
  );
}
