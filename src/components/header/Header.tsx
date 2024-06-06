import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLogout } from '../../store/thunks/auth.thunk';
import { FiLogOut } from 'react-icons/fi';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';

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
      <div className={styles.leftgroup}>
        <div className={styles.logo}>Farmers Market</div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <NavLink to='/' className={setActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={setActive}>
                About
              </NavLink>
            </li>
            {user?.farmer && (
              <li>
                <NavLink to='/farmer' className={setActive}>
                  My dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className={styles.rightPanel}>
        {user ? (
          <div className={styles.userInfo}>
            <span>{user.email}</span>
            <button onClick={handleLogout}>
              <FiLogOut />
            </button>
            <AvatarUI src={user?.farmer?.imageURL ?? ''} />
          </div>
        ) : (
          <>
            <NavLink to='/login' className={setActive}>
              Login
            </NavLink>
            <AvatarUI src='' />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
