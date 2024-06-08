import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLogout } from '../../store/thunks/auth.thunk';
import { FiLogOut } from 'react-icons/fi';
// import { FaBasketShopping } from 'react-icons/fa6';
// import { RiSearch2Line } from 'react-icons/ri';
import { IoMenu } from 'react-icons/io5';

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.linkActive : styles.link;

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftgroup}>
          <div className={styles.logo}>
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/external-others-pike-picture/50/external-Village-tourism-others-pike-picture.png"
              alt="external-Village-tourism-others-pike-picture"
            />
            <div>Farmers Market</div>
          </div>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <NavLink to="/" className={setActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={setActive}>
                  Farmers
                </NavLink>
              </li>
              <li>
                <NavLink to="/farmer/profile/1" className={setActive}>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/offer/ditails/1" className={setActive}>
                  An offer
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.burger}>
            <IoMenu />
          </div>
        </div>
        <div className={styles.rightPanel}>
          {/* <RiSearch2Line />
          <FaBasketShopping /> */}
          {user ? (
            <div className={styles.userInfo}>
              <span>{user.email}</span>
              <button onClick={handleLogout}>
                <FiLogOut />
              </button>
            </div>
          ) : (
            <NavLink to="/login" className={setActive}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
