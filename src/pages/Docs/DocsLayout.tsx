import React from 'react';
import { Outlet } from 'react-router-dom';
import { DocsSidebar } from '../../components/DocsSidebar/DocsSidebar';
import { PackageSelector } from '../../components/PackageSelector/PackageSelector';
import './DocsLayout.css';

export function DocsLayout() {
  return (
    <div className="docs-layout">
      <DocsSidebar isOpen={false} onClose={() => {}} />
      <main className="docs-main">
        <div className="docs-content">
          <div className="docs-header">
            <PackageSelector />
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
