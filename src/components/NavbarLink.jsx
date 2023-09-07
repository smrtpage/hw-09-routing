import { NavLink } from "react-router-dom";
import styles from "./NavbarLink.module.css";
import PropTypes from "prop-types";

function NavbarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      {children}
    </NavLink>
  );
}

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavbarLink;
