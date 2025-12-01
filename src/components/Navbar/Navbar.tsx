/**
 * Navbar Component (Static version - no auth)
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Careers', path: '/careers' },
    { label: 'Training', path: '/training' },
    { label: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link
            to="/"
            className={styles.logoLink}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className={styles.logoContainer}>
              <img src={logo} alt="IMTDA" className={styles.logoImage} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>IMTDA</span>
              <span className={styles.logoSubtitle}>INFOTECH</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <div className={styles.desktopMenuContent}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.navLink} ${
                    isActive(item.path) ? styles.navLinkActive : styles.navLinkInactive
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuToggleButton}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileNavItems}>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${styles.mobileNavLink} ${
                      isActive(item.path)
                        ? styles.mobileNavLinkActive
                        : styles.mobileNavLinkInactive
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

