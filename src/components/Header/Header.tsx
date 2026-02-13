import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { useCurrentPackage } from '../../hooks/usePackages';
import { getPackageNavigation } from '../../config/packages';
import './Header.css';

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPackage = useCurrentPackage();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const packageNavigation = currentPackage ? 
    getPackageNavigation(currentPackage.id, t) : 
    null;

  return (
    <header className="header">
      <div className="header-container">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        <Link to="/" className="header-logo">
          <span className="logo-text">@forgepack</span>
        </Link>

        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {/* Desktop navigation */}
          <div className="desktop-nav">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/docs/request"
              className={`nav-link ${isActive('/docs') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.docs}
            </Link>
            <Link
              to="http://github.com/forgepack"
              target='_blank'
              className={`nav-link ${isActive('/github') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.github}
            </Link>
          </div>

          {/* Mobile navigation */}
          <div className="mobile-nav">
            {currentPackage && packageNavigation ? (
              <div className="mobile-docs-section">
                <div className="mobile-package-header">
                  <span className="mobile-package-name">{currentPackage.name}</span>
                  <span className="mobile-package-version">{currentPackage.version}</span>
                </div>
                
                {packageNavigation.map((section) => (
                  <div key={section.title} className="mobile-section">
                    <h3 className="mobile-section-title">{section.title}</h3>
                    <ul className="mobile-section-list">
                      {section.items.map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={item.path}
                            className="mobile-section-link"
                            onClick={() => setMobileMenuOpen(false)}
                            end={item.path === `/docs/${currentPackage.id}`}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <Link
                to="/docs/request"
                className={`nav-link ${isActive('/docs') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.docs}
              </Link>
            )}
          </div>
        </nav>

        <div className="header-actions">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
