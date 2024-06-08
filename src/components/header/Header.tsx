import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLogout } from '../../store/thunks/auth.thunk';
import { FiLogOut } from 'react-icons/fi';
import { FaBasketShopping } from 'react-icons/fa6';
import { RiSearch2Line } from 'react-icons/ri';
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
<<<<<<< 31-create-searchbar-component
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
=======
      <div className={styles.leftgroup}>
        <div className={styles.logo}>Farmers Market</div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <NavLink to="/" className={setActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={setActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/farmer/profile/:id" className={setActive}>
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/offer/ditails/1" className={setActive}>
                An offer
              </NavLink>
            </li>
            {user?.farmer && (
>>>>>>> develop
              <li>
                <NavLink
                  to="/"
                  // className={menu === "home" ? styles.linkActive : styles.link}
                  className={setActive}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  // className={menu === "about" ? styles.linkActive : styles.link}
                  className={setActive}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  // className={
                  //   menu === "contact" ? styles.linkActive : styles.link
                  // }
                  className={setActive}
                >
                  Contact us
                </NavLink>
              </li>
              {user?.farmer && (
                <li>
                  <NavLink to="/farmer" className={setActive}>
                    My dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <div className={styles.burger}>
            <IoMenu />
          </div>
<<<<<<< 31-create-searchbar-component
        </div>
        <div className={styles.rightPanel}>
          <RiSearch2Line />
          <FaBasketShopping />
          {user ? (
            <div className={styles.userInfo}>
              <span>{user.email}</span>
              <button onClick={handleLogout}>
                <FiLogOut />
              </button>
            </div>
          ) : (
            <NavLink
              onClick={() => setMenu('login')}
              to="/login"
              // className={menu === "login" ? styles.linkActive : styles.link}
              className={setActive}
            >
              Login
            </NavLink>
          )}
        </div>
=======
        ) : (
          <NavLink to="/sign" className={setActive}>
            Login
          </NavLink>
        )}
>>>>>>> develop
      </div>
    </div>
  );
};

export default Header;
