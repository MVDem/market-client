import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './layout.module.scss';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
    </>
  );
}
