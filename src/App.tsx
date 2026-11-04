import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { DocsPageLayout } from './layouts/DocsPageLayout';
import { DocsLayout } from './pages/Docs/DocsLayout';
import './index.css';

const Home = lazy(() => import('./pages/Home/Home').then((module) => ({ default: module.Home })));
const NotFound = lazy(() => import('./pages/NotFound'));

const RequestOverview = lazy(() => import('./pages/Docs/Request/Overview').then((module) => ({ default: module.RequestOverview })));
const RequestGettingStarted = lazy(() => import('./pages/Docs/Request/GettingStarted').then((module) => ({ default: module.GettingStarted })));
const RequestQuickStart = lazy(() => import('./pages/Docs/Request/QuickStart').then((module) => ({ default: module.QuickStart })));
const Authentication = lazy(() => import('./pages/Docs/Request/Authentication').then((module) => ({ default: module.Authentication })));
const RouteProtection = lazy(() => import('./pages/Docs/Request/RouteProtection').then((module) => ({ default: module.RouteProtection })));
const Requests = lazy(() => import('./pages/Docs/Request/Requests').then((module) => ({ default: module.Requests })));
const CrudOperations = lazy(() => import('./pages/Docs/Request/CrudOperations').then((module) => ({ default: module.CrudOperations })));
const TokenManagement = lazy(() => import('./pages/Docs/Request/TokenManagement').then((module) => ({ default: module.TokenManagement })));
const RequestComponentsReference = lazy(() => import('./pages/Docs/Request/Reference/ComponentsReference').then((module) => ({ default: module.ApiComponents })));
const RequestHooksReference = lazy(() => import('./pages/Docs/Request/Reference/HooksReference').then((module) => ({ default: module.ApiHooks })));
const RequestServicesReference = lazy(() => import('./pages/Docs/Request/Reference/ServicesReference').then((module) => ({ default: module.ApiServices })));
const RequestTypesReference = lazy(() => import('./pages/Docs/Request/Reference/TypesReference').then((module) => ({ default: module.ApiTypes })));
const RequestUtilitiesReference = lazy(() => import('./pages/Docs/Request/Reference/UtilitiesReference').then((module) => ({ default: module.ApiUtilities })));
const LoginForm = lazy(() => import('./pages/Docs/Request/Examples/LoginForm').then((module) => ({ default: module.ExampleLoginForm })));
const Dashboard = lazy(() => import('./pages/Docs/Request/Examples/Dashboard').then((module) => ({ default: module.ExampleDashboard })));
const UsersList = lazy(() => import('./pages/Docs/Request/Examples/UsersList').then((module) => ({ default: module.ExampleUsersList })));

const LeafletOverview = lazy(() => import('./pages/Docs/Leaflet/Overview').then((module) => ({ default: module.LeafletOverview })));
const LeafletGettingStarted = lazy(() => import('./pages/Docs/Leaflet/GettingStarted').then((module) => ({ default: module.GettingStarted })));
const BasicMapExample = lazy(() => import('./pages/Docs/Leaflet/Examples/BasicMapExample').then((module) => ({ default: module.BasicMapExample })));
const MarkersExample = lazy(() => import('./pages/Docs/Leaflet/Examples/MarkersExample').then((module) => ({ default: module.MarkersExample })));
const RoutePlanningExample = lazy(() => import('./pages/Docs/Leaflet/Examples/RoutePlanningExample').then((module) => ({ default: module.RoutePlanningExample })));
const ImageOverlaysExample = lazy(() => import('./pages/Docs/Leaflet/Examples/ImageOverlaysExample').then((module) => ({ default: module.ImageOverlaysExample })));
const LeafletComponentsReference = lazy(() => import('./pages/Docs/Leaflet/Reference/ComponentsReference').then((module) => ({ default: module.ComponentsReference })));
const LeafletHooksReference = lazy(() => import('./pages/Docs/Leaflet/Reference/HooksReference').then((module) => ({ default: module.HooksReference })));
const LeafletServicesReference = lazy(() => import('./pages/Docs/Leaflet/Reference/ServicesReference').then((module) => ({ default: module.ServicesReference })));
const LeafletTypesReference = lazy(() => import('./pages/Docs/Leaflet/Reference/TypesReference').then((module) => ({ default: module.TypesReference })));
const LeafletUtilitiesReference = lazy(() => import('./pages/Docs/Leaflet/Reference/UtilitiesReference').then((module) => ({ default: module.UtilitiesReference })));

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route element={<DocsPageLayout />}>
              <Route path="/docs/request" element={<DocsLayout />}>
                <Route index element={<RequestOverview />} />
                <Route path="getting-started" element={<RequestGettingStarted />} />
                <Route path="quick-start" element={<RequestQuickStart />} />
                <Route path="authentication" element={<Authentication />} />
                <Route path="route-protection" element={<RouteProtection />} />
                <Route path="requests" element={<Requests />} />
                <Route path="crud-operations" element={<CrudOperations />} />
                <Route path="token-management" element={<TokenManagement />} />
                <Route path="reference/components" element={<RequestComponentsReference />} />
                <Route path="reference/hooks" element={<RequestHooksReference />} />
                <Route path="reference/services" element={<RequestServicesReference />} />
                <Route path="reference/types" element={<RequestTypesReference />} />
                <Route path="reference/utilities" element={<RequestUtilitiesReference />} />
                <Route path="examples/login-form" element={<LoginForm />} />
                <Route path="examples/dashboard" element={<Dashboard />} />
                <Route path="examples/users-list" element={<UsersList />} />
              </Route>

              <Route path="/docs/leaflet" element={<DocsLayout />}>
                <Route index element={<LeafletOverview />} />
                <Route path="getting-started" element={<LeafletGettingStarted />} />
                <Route path="examples/basic-map" element={<BasicMapExample />} />
                <Route path="examples/markers" element={<MarkersExample />} />
                <Route path="examples/route-planning" element={<RoutePlanningExample />} />
                <Route path="examples/image-overlays" element={<ImageOverlaysExample />} />
                <Route path="reference/components" element={<LeafletComponentsReference />} />
                <Route path="reference/hooks" element={<LeafletHooksReference />} />
                <Route path="reference/services" element={<LeafletServicesReference />} />
                <Route path="reference/types" element={<LeafletTypesReference />} />
                <Route path="reference/utilities" element={<LeafletUtilitiesReference />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
