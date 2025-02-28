import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@widgets/layout';
import { useRedirect } from '@shared/redirect';
import { ROUTES } from '@shared/router';
import { NotFoundPage } from '@pages/not-found';
import LogIn from '@pages/LogIn';
import Home from '@pages/Home';
import Components from '@/_old-version/components-presentation/Components';
import ProtectedRoute from '@app/routing/ui/ProtectedRoute';
import AUTH_PAGES from '../config/auth-pages';

interface RoutingProps {
  isAuth: boolean;
}

const Routing = ({ isAuth }: RoutingProps) => {
  const { redirectedFrom } = useRedirect({ altRoute: ROUTES.HOME });

  return (
    <Routes>
      {/* Private Route Login - Accessible only if user is not authorised */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <ProtectedRoute isAllowed={!isAuth} redirectPath={redirectedFrom}>
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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
