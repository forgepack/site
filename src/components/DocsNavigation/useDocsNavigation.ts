import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { navigationConfig } from './navigationConfig';
import { NavigationItem, Language } from './types';

export function useDocsNavigation(language: Language) {
  const location = useLocation();

  return useMemo(() => {
    // Extract package and page from current path
    // Example: /docs/request/authentication -> package: request, page: authentication
    const pathSegments = location.pathname.split('/');
    const package_ = pathSegments[2]; // request or leaflet
    const page = pathSegments.slice(3).join('/') || 'overview'; // authentication, examples/basic-map, etc.

    const config = navigationConfig[package_];
    if (!config) return { previousPage: null, nextPage: null };

    const currentIndex = config.order.indexOf(page);
    if (currentIndex === -1) return { previousPage: null, nextPage: null };

    // Get previous page
    let previousPage: NavigationItem | null = null;
    if (currentIndex > 0) {
      const prevPageKey = config.order[currentIndex - 1];
      const prevPageInfo = config.pages[prevPageKey];
      if (prevPageInfo) {
        const prevPagePath = prevPageKey === 'overview' 
          ? `/docs/${package_}` 
          : `/docs/${package_}/${prevPageKey}`;
        
        previousPage = {
          path: prevPagePath,
          label: prevPageInfo[language].label,
          title: prevPageInfo[language].title
        };
      }
    }

    // Get next page
    let nextPage: NavigationItem | null = null;
    if (currentIndex < config.order.length - 1) {
      const nextPageKey = config.order[currentIndex + 1];
      const nextPageInfo = config.pages[nextPageKey];
      if (nextPageInfo) {
        const nextPagePath = nextPageKey === 'overview' 
          ? `/docs/${package_}` 
          : `/docs/${package_}/${nextPageKey}`;
        
        nextPage = {
          path: nextPagePath,
          label: nextPageInfo[language].label,
          title: nextPageInfo[language].title
        };
      }
    }

    return { previousPage, nextPage };
  }, [location.pathname, language]);
}