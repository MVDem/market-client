import { NavLink } from 'react-router-dom';
import styles from './dropDown.module.scss';
import { useEffect, useState } from 'react';
import AvatarUI from '../../UI/AvatarUI/AvatarUI';
import { User } from '../../types/User';
import { fetchLogout } from '../../store/thunks/auth.thunk';
import { useAppDispatch } from '../../store/hooks';

type DropDownProps = {
  user: User | null;
  setIsOpen: (isOpen: boolean) => void;
};

function DropDown({ user, setIsOpen }: DropDownProps) {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(fetchLogout());
    setIsOpen(false);
  };

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={active ? styles.dropDown : styles.dropDownNonActive}>
      <div className={styles.dropDownContent}>
        {user && (
          <div className={[styles.userInfo, styles.mobileOnly].join(' ')}>
            <AvatarUI src={user?.farmer?.logoURL!} size={112} />
            <h5>{user?.email}</h5>
            <span />
          </div>
        )}
        <div className={styles.mainGroup}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                isActive ? styles.linkActive : styles.link,
                styles.mobileOnly,
              ].join(' ')
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          {!user && (
            <NavLink
              to="/sign"
              className={[styles.link, styles.mobileOnly].join(' ')}
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          )}
          {user && (
            <>
              <NavLink
                to={`/profile/${user?.farmer?.id}`}
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </NavLink>
              <NavLink to="#" className={styles.link} onClick={handleLogout}>
                Logout
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default DropDown;
