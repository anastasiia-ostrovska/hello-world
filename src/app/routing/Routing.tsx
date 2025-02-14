import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/app/layout';
import LogIn from '@/pages/LogIn';
import Home from '@/pages/Home';
import Components from '@/_old-version/components-presentation/Components';
import * as ROUTES from '@/shared/constants/routes';
import ProtectedRoute from '@/app/routing/ui/ProtectedRoute';
import AUTH_PAGES from './config';

interface RoutingProps {
  isAuth: boolean;
}

const Routing = ({ isAuth }: RoutingProps) => {
  return (
    <Routes>
      {/* Public Route - Login */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <ProtectedRoute isAllowed={!isAuth} redirectPath={ROUTES.HOME}>
            <LogIn />
          </ProtectedRoute>
        }
      />
      {/* Private Routes - Requires Authentication */}
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path={ROUTES.ROOT} element={<AppLayout />}>
          <Route index element={<Home />} />
          {AUTH_PAGES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>
      {/* Public Route (temporary) - Components Presentation */}
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default Routing;
