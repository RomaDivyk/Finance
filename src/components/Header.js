import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeclassname={styles.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname={styles.active} to="/login">
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname={styles.active} to="/registration">
            Registration
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
