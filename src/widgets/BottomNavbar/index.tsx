import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// Define the type for the props
interface BottomNavbarProps {
  onSignInClick: () => void;
  isSignInOpen: boolean;
  onNavClick: () => void;
}

export const BottomNavbar: FC<BottomNavbarProps> = ({ onSignInClick, isSignInOpen, onNavClick }) => {
  const { pathname, hash } = useLocation();
  const isAuthenticated = useSelector((state: RootState) => !!state.user.accessToken);

  const navLinks = [
    { path: '/#about', icon: '/vector-icons/Page-1.svg', label: 'о проекте' },
    { path: '/events', icon: '/vector-icons/calendar_icon_1.svg', label: 'события' },
    { path: '/places', icon: '/vector-icons/location_icon_1.svg', label: 'места' },
  ];

  return (
    <nav className={styles.bottomNav}>
      {navLinks.map((item) => {
        const itemPath = item.path.split('#')[0] || '/';
        const itemHash = item.path.includes('#') ? `#${item.path.split('#')[1]}` : '';
        const isActive = pathname === itemPath && (itemHash ? hash === itemHash : true);
        
        return (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={onNavClick}
            >
              <img src={item.icon} alt={item.label} className={styles.navIcon} />
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
        )
      })}

      {isAuthenticated ? (
        <Link to="/profile" className={`${styles.navItem} ${pathname === '/profile' ? styles.active : ''}`} onClick={onNavClick}>
          <img src="/vector-icons/user.svg" alt="личный кабинет" className={styles.navIcon} />
          <span className={styles.navLabel}>личный кабинет</span>
        </Link>
      ) : (
        <button className={`${styles.navItem} ${isSignInOpen ? styles.active : ''}`} onClick={onSignInClick}>
          <img src="/vector-icons/user.svg" alt="войти" className={styles.navIcon} />
          <span className={styles.navLabel}>войти</span>
        </button>
      )}
    </nav>
  );
}; 