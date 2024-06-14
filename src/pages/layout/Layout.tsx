import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './layout.module.scss';

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
    </>
  );
}
