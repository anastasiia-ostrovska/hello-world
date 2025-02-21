import { Route, Routes, useLocation } from 'react-router-dom';
import { AppLayout } from '@/widgets/layout';
import LogIn from '@/pages/LogIn';
import Home from '@/pages/Home';
import Components from '@/_old-version/components-presentation/Components';
import ProtectedRoute from '@/app/routing/ui/ProtectedRoute';
import * as ROUTES from '@/shared/router';
import AUTH_PAGES from '../config';

interface RoutingProps {
  isAuth: boolean;
}

const Routing = ({ isAuth }: RoutingProps) => {
  const location = useLocation();

  return (
    <Routes>
      {/* Private Route Login - Accessible only if user is not authorised */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <ProtectedRoute
            isAllowed={!isAuth}
            redirectPath={location.state?.from?.pathname || ROUTES.HOME}
          >
            <LogIn />
          </ProtectedRoute>
        }
      />
      {/* Private Routes - Requires Authentication */}
      <Route
        element={
          <ProtectedRoute isAllowed={isAuth} redirectPath={ROUTES.LOGIN} />
        }
      >
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
