import styles from "./Navbar.module.css";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/movies">Movies</NavbarLink>
        <NavbarLink to="/shows">Shows</NavbarLink>
      </nav>
    </div>
  );
}
export default Navbar;
