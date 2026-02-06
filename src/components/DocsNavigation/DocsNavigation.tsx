import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { useDocsNavigation } from './useDocsNavigation';

export function DocsNavigation() {
  const { t, language } = useLanguage();
  const { previousPage, nextPage } = useDocsNavigation(language);

  if (!previousPage && !nextPage) {
    return null;
  }

  return (
    <nav className="docs-nav">
      {previousPage && (
        <Link to={previousPage.path} className="docs-nav-link">
          <span className="docs-nav-label">{t.docs.prevPage}</span>
          <span className="docs-nav-title">{previousPage.title}</span>
        </Link>
      )}
      {nextPage && (
        <Link to={nextPage.path} className="docs-nav-link next">
          <span className="docs-nav-label">{t.docs.nextPage}</span>
          <span className="docs-nav-title">{nextPage.title}</span>
        </Link>
      )}
    </nav>
  );
}