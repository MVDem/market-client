import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

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
          </div>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
