import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { useCurrentPackage } from '../../hooks/usePackages';
import { getPackageNavigation } from '../../config/packages';
import './DocsSidebar.css';

interface DocsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocsSidebar({ isOpen, onClose }: DocsSidebarProps) {
  const { t } = useLanguage();
  const currentPackage = useCurrentPackage();
  
  const packageNavigation = currentPackage ? 
    getPackageNavigation(currentPackage.id, t) : 
    null;

  if (!currentPackage || !packageNavigation) {
    return null;
  }

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} onClick={onClose} />
      <aside className={`docs-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-package-name">{currentPackage.name}</span>
          <span className="sidebar-version">{currentPackage.version}</span>
        </div>

        <nav className="sidebar-nav">
          {packageNavigation.map((section) => (
            <div key={section.title} className="sidebar-section">
              <h3 className="sidebar-section-title">{section.title}</h3>
              <ul className="sidebar-list">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className="sidebar-link"
                      onClick={onClose}
                      end={item.path === `/docs/${currentPackage.id}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
