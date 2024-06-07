import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLogout } from "../../store/thunks/auth.thunk";
import { FiLogOut } from "react-icons/fi";
import { FaBasketShopping } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";

const Header: React.FC = () => {
  const [menu, setMenu] = useState("home");
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  // const setActive = ({ isActive }: { isActive: boolean }) =>
  //   isActive ? styles.linkActive : styles.link;

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          width="60"
          height="60"
          src="https://img.icons8.com/external-others-pike-picture/50/external-Village-tourism-others-pike-picture.png"
          alt="external-Village-tourism-others-pike-picture"
        />
        <div>Farmers Market</div>
      </div>
      <div className={styles.leftgroup}>
        <nav className={styles.navbar}>
          <ul>
            <li onClick={() => setMenu("home")}>
              <NavLink
                to="/"
                className={menu === "home" ? styles.linkActive : styles.link}
              >
                Home
              </NavLink>
            </li>
            <li onClick={() => setMenu("about")}>
              <NavLink
                to="/about"
                className={menu === "about" ? styles.linkActive : styles.link}
              >
                About
              </NavLink>
            </li>
            <li onClick={() => setMenu("contact")}>
              <NavLink
                to="/contact"
                className={menu === "contact" ? styles.linkActive : styles.link}
              >
                Contact us
              </NavLink>
            </li>
            {!user?.farmer && (
              <li onClick={() => setMenu("dashboard")}>
                <NavLink
                  to="/farmer"
                  className={
                    menu === "dashboard" ? styles.linkActive : styles.link
                  }
                >
                  My dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className={styles.rightPanel}>
        <RiSearch2Line />
        <FaBasketShopping />
        {/* <div className={styles.dot}></div> */}
        {user ? (
          <div className={styles.userInfo}>
            <span>{user.email}</span>
            <button onClick={handleLogout}>
              <FiLogOut />
            </button>
          </div>
        ) : (
          <NavLink
            onClick={() => setMenu("login")}
            to="/login"
            className={menu === "login" ? styles.linkActive : styles.link}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
