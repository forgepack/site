import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getPackageNavigation } from '../../config/packages';
import { useLanguage } from '../../i18n/LanguageContext';

interface NavigationItem {
  path: string;
  label: string;
  title: string;
}

export function useDocsNavigation() {
  const location = useLocation();
  const { t, language } = useLanguage();

  return useMemo(() => {
    // Extract package from current path
    const pathSegments = location.pathname.split('/');
    const packageId = pathSegments[2]; // request or leaflet
    
    if (!packageId) return { previousPage: null, nextPage: null };

    const packageNavigation = getPackageNavigation(packageId, t);
    
    // Flatten all navigation items into a single array
    const allItems: { path: string; label: string }[] = [];
    packageNavigation.forEach(section => {
      section.items.forEach(item => {
        allItems.push({
          path: item.path,
          label: item.label
        });
      });
    });

    // Find current page index
    const currentIndex = allItems.findIndex(item => item.path === location.pathname);
    if (currentIndex === -1) return { previousPage: null, nextPage: null };

    // Get previous and next pages
    const previousPage: NavigationItem | null = currentIndex > 0 ? {
      path: allItems[currentIndex - 1].path,
      label: allItems[currentIndex - 1].label,
      title: allItems[currentIndex - 1].label
    } : null;

    const nextPage: NavigationItem | null = currentIndex < allItems.length - 1 ? {
      path: allItems[currentIndex + 1].path,
      label: allItems[currentIndex + 1].label,
      title: allItems[currentIndex + 1].label
    } : null;

    return { previousPage, nextPage };
  }, [location.pathname, t, language]);
}