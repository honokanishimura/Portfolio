import { Icon } from '~/components/icon';
import { Monogram } from '~/components/monogram';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useScrollToHash, useWindowSize } from '~/hooks';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';
import { cssProps, media, msToNum, numToMs } from '~/utils/style';
import { NavToggle } from './nav-toggle';
import { ThemeToggle } from './theme-toggle';
import { navLinks, socialLinks } from './nav-data';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [current, setCurrent] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);

  useEffect(() => {
    if (!target || location.pathname !== '/') return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);

  useEffect(() => {
    
    
  }, [theme, windowSize, location.key]);

  const getCurrent = (url = '') => {
    const nonTrailing = current?.endsWith('/') ? current?.slice(0, -1) : current;
    return url === nonTrailing ? 'page' : '';
  };

  const handleNavItemClick = event => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);
    if (hash && location.pathname === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = event => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className={styles.navbar} ref={headerRef}>
      <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />

      <nav className={styles.nav}>
        <div className={styles.navList}>
          {navLinks.map(({ label, pathname }) => (
            <RouterLink
              unstable_viewTransition
              prefetch="intent"
              to={pathname}
              key={label}
              data-navbar-item
              className={styles.navLink}
              aria-current={getCurrent(pathname)}
              onClick={handleNavItemClick}
            >
              {label}
            </RouterLink>
          ))}
        </div>

        <ThemeToggle />

        <div className={styles.navFooter}>
          <NavbarIcons desktop />
        </div>
      </nav>

      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }) => (
          <nav className={styles.mobileNav} data-visible={visible} ref={nodeRef}>
            {/* 📄 メニューリンク */}
            {navLinks.map(({ label, pathname }, index) => (
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={pathname}
                key={label}
                className={styles.mobileNavLink}
                data-visible={visible}
                aria-current={getCurrent(pathname)}
                onClick={handleMobileNavClick}
                style={cssProps({
                  transitionDelay: numToMs(
                    Number(msToNum(tokens.base.durationS)) + index * 50
                  ),
                })}
              >
                {label}
              </RouterLink>
            ))}

            {/* 🌙 テーマ切替 */}
            <div className={styles.mobileNavToggleWrapper}>
              <ThemeToggle />
            </div>

            {/* 🔗 SNSリンク */}
            <div className={styles.mobileNavIcons}>
              {socialLinks.map(({ label, url, icon }) => (
                <a
                  key={label}
                  className={styles.navIconLink}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className={styles.navIcon} icon={icon} />
                </a>
              ))}
            </div>
          </nav>
        )}
      </Transition>
    </header>
  );
};

const NavbarIcons = ({ desktop }) => (
  <div className={styles.navIcons}>
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        data-navbar-item={desktop || undefined}
        className={styles.navIconLink}
        aria-label={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={styles.navIcon} icon={icon} />
      </a>
    ))}
  </div>
);
