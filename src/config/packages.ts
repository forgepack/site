import type { Translations } from '../i18n/translations';

export interface PackageConfig {
  id: string;
  name: string;
  path: string;
  description: string;
  icon: string;
  version: string;
  registry: 'npm' | 'maven';
  registryUrl: string;
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
    registry: 'npm',
    registryUrl: 'https://www.npmjs.com/package/@forgepack/request',
    githubUrl: 'https://github.com/forgepack/request',
  },
  {
    id: 'leaflet',
    name: '@forgepack/leaflet',
    path: '/docs/leaflet',
    description: 'Interactive maps and geospatial data',
    icon: '🗺️',
    version: 'v1.0.0',
    registry: 'npm',
    registryUrl: 'https://www.npmjs.com/package/@forgepack/leaflet',
    githubUrl: 'https://github.com/forgepack/leaflet',
  },
  {
    id: 'utils',
    name: 'forgepack-utils',
    path: '/docs/utils',
    description: 'Email, QR code, and AES encryption utilities for Spring Boot',
    icon: '🛠️',
    version: 'v0.0.12',
    registry: 'maven',
    registryUrl: 'https://central.sonatype.com/artifact/dev.forgepack/forgepack-utils/0.0.12',
    githubUrl: 'https://github.com/forgepack/forgepack-utils',
  },
  {
    id: 'validation',
    name: 'forgepack-validation',
    path: '/docs/validation',
    description: 'Portable custom Bean Validation constraints for Spring Boot',
    icon: '✅',
    version: 'v0.0.9',
    registry: 'maven',
    registryUrl: 'https://central.sonatype.com/artifact/dev.forgepack/forgepack-validation/0.0.9',
    githubUrl: 'https://github.com/forgepack/forgepack-validation',
  },
  {
    id: 'core',
    name: 'forgepack-core',
    path: '/docs/core',
    description: 'Reusable CRUD, REST, audit, HATEOAS, and OpenAPI foundations',
    icon: '⚙️',
    version: 'v0.0.26',
    registry: 'maven',
    registryUrl: 'https://central.sonatype.com/artifact/dev.forgepack/forgepack-core/0.0.26',
    githubUrl: 'https://github.com/forgepack/forgepack-core',
  },
  {
    id: 'authorization',
    name: 'forgepack-authorization',
    path: '/docs/authorization',
    description: 'RBAC model with users, roles, privileges, and REST endpoints',
    icon: '🛡️',
    version: 'v0.0.18',
    registry: 'maven',
    registryUrl: 'https://central.sonatype.com/artifact/dev.forgepack/forgepack-authorization/0.0.18',
    githubUrl: 'https://github.com/forgepack/forgepack-authorization',
  },
  {
    id: 'authentication',
    name: 'forgepack-authentication',
    path: '/docs/authentication',
    description: 'Authentication flows with JWT, refresh tokens, and TOTP/2FA',
    icon: '🔑',
    version: 'v0.0.20',
    registry: 'maven',
    registryUrl: 'https://central.sonatype.com/artifact/dev.forgepack/forgepack-authentication/0.0.20',
    githubUrl: 'https://github.com/forgepack/forgepack-authentication',
  },
];

// Navigation configuration - separated from package config for maintainability
export const getPackageNavigation = (packageId: string, t: Translations): NavigationSection[] => {
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

    case 'utils':
    case 'validation':
    case 'core':
    case 'authorization':
    case 'authentication':
      return [
        {
          title: t.sidebar.overview,
          items: [
            { label: t.sidebar.overview, path: `/docs/${packageId}` },
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