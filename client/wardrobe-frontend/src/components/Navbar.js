import { NavLink } from 'react-router-dom'
import styles from '../css/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.linkContainer}>
        <NavLink to="/">Wardrobe</NavLink>
        <NavLink to="/add">Add item</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;