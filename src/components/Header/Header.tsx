import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchLogout } from '../../store/thunks/auth.thunk';
import { IoMenu } from 'react-icons/io5';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';
import { Dropdown, MenuProps, Space } from 'antd';

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  const handleClick = () => {
    navigate(`/profile/${user?.farmer?.id}`);
  };

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.linkActive : styles.link;

  const items: MenuProps['items'] = [
    {
      label: (
        <button onClick={handleClick} className={styles.btn}>
          My Profile
        </button>
      ),
      key: '0',
    },
    {
      label: (
        <button onClick={handleLogout} className={styles.btn}>
          Logout
        </button>
      ),
      key: '1',
    },
  ];

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
              {/* <li>
                <NavLink to="/about" className={setActive}>
                  Farmers
                </NavLink>
              </li> */}
              {/* {user?.farmer && (
                <li>
                  <NavLink to="/profile/1" className={setActive}>
                    My Profile
                  </NavLink>
                </li>
              )} */}
            </ul>
          </nav>
          <div className={styles.burger}>
            <IoMenu />
          </div>
        </div>
        <div className={styles.rightPanel}>
          {user ? (
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className={styles.userInfo}>
                    <h5>{user.email}</h5>
                    <AvatarUI src={user.farmer?.logoURL!} size={40} />
                  </div>
                </Space>
              </a>
            </Dropdown>
          ) : (
            <NavLink to="/sign" className={setActive}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
