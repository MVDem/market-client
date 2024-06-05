import styles from './Login.module.scss';
import Header from '../../components/header/Header';
import FormUICustom from '../../UI/FormUICustom';
import {
  emailInput,
  passwordInput,
  confirmPasswordInput,
} from '../../utils/formUICustomFields';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLogin, fetchRegister } from '../../store/thunks/auth.thunk';
import { DataFormType } from '../../UI/FormUICustom';
import { User } from '../../types/User';

const INITIAL_ROLE = 'FARMER';

export default function Login() {
  const [page, setPage] = useState('signUp');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    console.log(authState);
    if (page === 'signUp' && authState.loading === 'succeeded') {
      setPage('signIn');
    }
    if (page === 'signIn' && authState.loading === 'succeeded') {
      navigate('/');
    }
  }, [authState]);

  const inputs =
    page === 'signUp'
      ? [emailInput, passwordInput, confirmPasswordInput]
      : [emailInput, passwordInput];

  const handleSubmit = (data: DataFormType) => {
    const { email, password } = data as Pick<User, 'email' | 'password'>;
    if (page === 'signUp') {
      dispatch(fetchRegister({ email, password, role: INITIAL_ROLE }));
    }
    if (page === 'signIn') {
      dispatch(fetchLogin({ email, password }));
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        {page === 'signIn' ? (
          <button onClick={() => setPage('signUp')}>Sign up</button>
        ) : (
          <button onClick={() => setPage('signIn')}>Sign in</button>
        )}
        {authState.error && (
          <div className={styles.error}>{authState.error}</div>
        )}
        {authState.loading === 'pending' && (
          <div className={styles.loading}>Loading...</div>
        )}
        <FormUICustom
          inputs={inputs}
          buttonLabel={page === 'signUp' ? 'Sign up' : 'Sign in'}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}