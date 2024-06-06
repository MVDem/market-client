import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';

const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true); // Manually set the user state for now

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftgroup}>
        <div className={styles.logo}>Farmers Market</div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightPanel}>
        {loggedIn ? (
          <div className={styles.userInfo}>
            <span>Farmer_John</span>
            <button onClick={handleLogout}>Logout</button>
            <AvatarUI src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' />
          </div>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <AvatarUI src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
