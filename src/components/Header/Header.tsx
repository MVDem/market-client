import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppSelector } from '../../store/hooks';
import { IoMenu } from 'react-icons/io5';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';
import DropDown from './DropDown';
import SearchBar from '../SearchBar/SearchBar';
import ThemeButton from '../../UI/ThemeButton/ThemeButton';

type DropDownProps = {
  onCloseMemu?: () => void;
};

const Header: React.FC = ({}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state.authReducer);

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.linkActive : styles.link;

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftgroup}>
          <div className={styles.logo}></div>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <NavLink to="/" className={setActive}>
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          <IoMenu />
        </div>
        <SearchBar />
        <div className={styles.rightPanel}>
          {user ? (
            <div
              className={styles.rightMenu}
              onClick={() => setIsOpen(!isOpen)}
            >
              <h5>{user?.email}</h5>
              <AvatarUI src={user?.farmer?.logoURL!} size={36} />
            </div>
          ) : (
            <>
              <ThemeButton />
              <NavLink to="/sign" className={setActive}>
                Login
              </NavLink>
            </>
          )}
        </div>
        {isOpen && <DropDown user={user} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Header;
