import styles from './sideBar.module.scss';
import { NavLink } from 'react-router-dom';
import { FaHouse, FaIdBadge } from 'react-icons/fa6';

function SideBar() {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.linkActive : styles.link;

  return (
    <section className={styles.sideBar}>
      <div className={styles.topContainer}>
        <NavLink to={'/farmer/offers'} className={setActive}>
          <FaHouse />
          <p>Offers</p>
        </NavLink>
        <NavLink to={'/farmer/profile'} className={setActive}>
          <FaIdBadge />
          <p>Profile</p>
        </NavLink>
      </div>
    </section>
  );
}
export default SideBar;
