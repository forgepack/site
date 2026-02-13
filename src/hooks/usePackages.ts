import { useLocation } from 'react-router-dom';
import { PACKAGES, type PackageConfig } from '../config/packages';

export function useCurrentPackage(): PackageConfig | null {
  const location = useLocation();

  // Extract package ID from URL path: /docs/[packageId]/...
  const pathSegments = location.pathname.split('/');
  const packageId = pathSegments[2]; // /docs/[package]/...

  if (!packageId) return null;

  return PACKAGES.find(pkg => pkg.id === packageId) || null;
}

export function usePackages() {
  return {
    packages: PACKAGES,
    getPackageById: (id: string): PackageConfig | undefined => 
      PACKAGES.find(pkg => pkg.id === id),
    getPackageByPath: (path: string): PackageConfig | undefined => 
      PACKAGES.find(pkg => path.startsWith(pkg.path)),
  };
}