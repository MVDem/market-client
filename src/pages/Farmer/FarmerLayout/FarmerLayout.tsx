import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Header from '../../../components/Header/Header';
import SideBar from '../../../components/SideBar/SideBar';

function FarmerLayout() {
  return (
    <>
      <div className={styles.layoutContainer}>
        <div className={styles.header}>
          <Header />
        </div>
        {/* <SideBar /> */}
        <main>
          <div className={styles.mainConteiner}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
export default FarmerLayout;
