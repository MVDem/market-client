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
import { User } from '../../types/User';

const INITIAL_ROLE = 'FARMER';

export default function Login() {
  const [page, setPage] = useState('signUp');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (page === 'signUp' && authState.loading === 'succeeded') {
      setPage('signIn');
    }
    if (page === 'signIn' && authState.loading === 'succeeded') {
      navigate('/');
    }
  }, [authState]);

  const signUp = ({ email, password }: Pick<User, 'email' | 'password'>) => {
    dispatch(fetchRegister({ email, password, role: INITIAL_ROLE }));
  };

  const signIn = ({ email, password }: Pick<User, 'email' | 'password'>) => {
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <>
      <Header />

      {page === 'signIn' ? (
        <a onClick={() => setPage('signUp')}>Sign up</a>
      ) : (
        <a onClick={() => setPage('signIn')}>Sign in</a>
      )}
      {authState.error && <div className={styles.error}>{authState.error}</div>}
      {authState.loading === 'pending' && (
        <div className={styles.loading}>Loading...</div>
      )}
      {page === 'signUp' ? (
        <div className={styles.container}>
          <FormUICustom
            inputs={[emailInput, passwordInput, confirmPasswordInput]}
            buttonLabel="Sign up"
            onSubmit={signUp}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <FormUICustom
            inputs={[emailInput, passwordInput]}
            buttonLabel="Sign in"
            onSubmit={signIn}
          />
        </div>
      )}
    </>
  );
}
