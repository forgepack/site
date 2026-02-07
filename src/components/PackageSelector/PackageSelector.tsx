import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PackageSelector.css';

interface Package {
  name: string;
  path: string;
  description: string;
  icon: string;
}

export function PackageSelector() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const packages: Package[] = [
    {
      name: '@forgepack/request',
      path: '/docs/request',
      description: 'HTTP client with JWT authentication',
      icon: '🔐',
    },
    {
      name: '@forgepack/leaflet',
      path: '/docs/leaflet', 
      description: 'Interactive maps and geospatial data',
      icon: '🗺️',
    },
  ];

  const currentPackage = packages.find(pkg => 
    location.pathname.startsWith(pkg.path)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={`package-selector ${isOpen ? 'open' : ''}`} 
      ref={dropdownRef}
    >
      <div 
        className="current-package" 
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle(e as any);
          }
        }}
      >
        <div className="current-package-info">
          <span className="package-icon">{currentPackage?.icon}</span>
          <span className="package-name">{currentPackage?.name}</span>
        </div>
        <span className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}>▼</span>
      </div>
      
      <div className={`package-dropdown ${isOpen ? 'visible' : ''}`}>
        {packages.map((pkg) => (
          <Link
            key={pkg.name}
            to={pkg.path}
            className={`package-option ${
              location.pathname.startsWith(pkg.path) ? 'active' : ''
            }`}
            onClick={handleOptionClick}
          >
            <div className="package-option-main">
              <span className="package-icon">{pkg.icon}</span>
              <div className="package-details">
                <span className="package-name">{pkg.name}</span>
                <span className="package-description">{pkg.description}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}