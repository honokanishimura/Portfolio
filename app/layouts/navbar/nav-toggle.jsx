import styles from './nav-toggle.module.css';
import clsx from 'clsx';


export const NavToggle = ({ menuOpen, onClick, className }) => {
  return (
    <button
    className={clsx(styles.navToggle, className)}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className={`${styles.bar} ${menuOpen ? styles.open1 : ''}`}></span>
      <span className={`${styles.bar} ${menuOpen ? styles.open2 : ''}`}></span>
      <span className={`${styles.bar} ${menuOpen ? styles.open3 : ''}`}></span>
    </button>
  );
};
