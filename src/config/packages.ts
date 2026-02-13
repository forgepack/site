export interface PackageConfig {
  id: string;
  name: string;
  path: string;
  description: string;
  icon: string;
  version: string;
  npmUrl: string;
  githubUrl: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface PackageNavigation {
  packageId: string;
  sections: NavigationSection[];
}

export const PACKAGES: PackageConfig[] = [
  {
    id: 'request',
    name: '@forgepack/request',
    path: '/docs/request',
    description: 'HTTP client with JWT authentication',
    icon: '🔐',
    version: 'v1.1.1',
    npmUrl: 'https://www.npmjs.com/package/@forgepack/request',
    githubUrl: 'https://github.com/forgepack/request',
  },
  {
    id: 'leaflet',
    name: '@forgepack/leaflet',
    path: '/docs/leaflet',
    description: 'Interactive maps and geospatial data',
    icon: '🗺️',
    version: 'v1.0.0',
    npmUrl: 'https://www.npmjs.com/package/@forgepack/leaflet',
    githubUrl: 'https://github.com/forgepack/leaflet',
  },
];

// Navigation configuration - separated from package config for maintainability
export const getPackageNavigation = (packageId: string, t: any): NavigationSection[] => {
  switch (packageId) {
    case 'leaflet':
      return [
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
      ];

    case 'request':
    default:
      return [
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
      ];
  }
};