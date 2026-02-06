export interface PageInfo {
  label: string;
  title: string;
}

export interface NavigationItem {
  path: string;
  label: string;
  title: string;
}

export interface PackagePages {
  [pageKey: string]: {
    en: PageInfo;
    pt: PageInfo;
  };
}

export interface PackageNavigation {
  order: string[];
  pages: PackagePages;
}

export interface NavigationConfig {
  [packageName: string]: PackageNavigation;
}

export type Language = 'en' | 'pt';