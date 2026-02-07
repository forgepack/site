import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import './Header.css';

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Detect package from URL path for mobile menu
  const pathSegments = location.pathname.split('/');
  const currentPackage = pathSegments[2] || 'request'; // /docs/[package]/...
  
  const getPackageConfig = (pkg: string) => {
    switch (pkg) {
      case 'leaflet':
        return {
          name: '@forgepack/leaflet',
          version: 'v1.0.0',
          sections: [
            {
              title: t.sidebar.overview,
              items: [
                { label: t.sidebar.overview, path: '/docs/leaflet' },
                { label: t.sidebar.gettingStarted, path: '/docs/leaflet/getting-started' },
              ],
            },
            {
              title: t.sidebar.examples,
              items: [
                { label: t.sidebar.basicMap, path: '/docs/leaflet/examples/basic-map' },
                { label: t.sidebar.markers, path: '/docs/leaflet/examples/markers' },
                { label: t.sidebar.routePlanning, path: '/docs/leaflet/examples/route-planning' },
                { label: t.sidebar.imageOverlays, path: '/docs/leaflet/examples/image-overlays' },
              ],
            },
            {
              title: t.sidebar.apiReference,
              items: [
                { label: t.sidebar.components, path: '/docs/leaflet/reference/components' },
                { label: t.sidebar.hooks, path: '/docs/leaflet/reference/hooks' },
                { label: t.sidebar.services, path: '/docs/leaflet/reference/services' },
                { label: t.sidebar.types, path: '/docs/leaflet/reference/types' },
                { label: t.sidebar.utilities, path: '/docs/leaflet/reference/utilities' },
              ],
            },
          ],
        };
      default: // 'request'
        return {
          name: '@forgepack/request',
          version: 'v1.1.1',
          sections: [
            {
              title: t.sidebar.overview,
              items: [
                { label: t.sidebar.overview, path: '/docs/request' },
                { label: t.sidebar.gettingStarted, path: '/docs/request/getting-started' },
                { label: t.sidebar.quickStart, path: '/docs/request/quick-start' },
              ],
            },
            {
              title: t.sidebar.guides,
              items: [
                { label: t.sidebar.authentication, path: '/docs/request/authentication' },
                { label: t.sidebar.routeProtection, path: '/docs/request/route-protection' },
                { label: t.sidebar.requests, path: '/docs/request/requests' },
                { label: t.sidebar.crudOperations, path: '/docs/request/crud-operations' },
                { label: t.sidebar.tokenManagement, path: '/docs/request/token-management' },
              ],
            },
            {
              title: t.sidebar.apiReference,
              items: [
                { label: t.sidebar.hooks, path: '/docs/request/reference/hooks' },
                { label: t.sidebar.components, path: '/docs/request/reference/components' },
                { label: t.sidebar.services, path: '/docs/request/reference/services' },
                { label: t.sidebar.types, path: '/docs/request/reference/types' },
                { label: t.sidebar.utilities, path: '/docs/request/reference/utilities' },
              ],
            },
            {
              title: t.sidebar.examples,
              items: [
                { label: t.sidebar.loginForm, path: '/docs/request/examples/login-form' },
                { label: t.sidebar.dashboard, path: '/docs/request/examples/dashboard' },
                { label: t.sidebar.usersList, path: '/docs/request/examples/users-list' },
              ],
            },
          ],
        };
    }
  };

  const packageConfig = location.pathname.startsWith('/docs') ? getPackageConfig(currentPackage) : null;

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
            {packageConfig ? (
              <div className="mobile-docs-section">
                <div className="mobile-package-header">
                  <span className="mobile-package-name">{packageConfig.name}</span>
                  <span className="mobile-package-version">{packageConfig.version}</span>
                </div>
                
                {packageConfig.sections.map((section) => (
                  <div key={section.title} className="mobile-section">
                    <h3 className="mobile-section-title">{section.title}</h3>
                    <ul className="mobile-section-list">
                      {section.items.map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={item.path}
                            className="mobile-section-link"
                            onClick={() => setMobileMenuOpen(false)}
                            end={item.path === `/docs/${currentPackage}`}
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
