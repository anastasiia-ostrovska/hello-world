import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/layout';
import LogIn from '@/pages/LogIn';
import Home from '@/pages/Home';
import Components from '@/_old-version/components-presentation/Components';
import * as ROUTES from '@/shared/constants/routes';
import ProtectedRoute from './ProtectedRoute';
import AUTH_PAGES from '../config';

interface RoutingProps {
  isAuth: boolean;
}

const Routing = ({ isAuth }: RoutingProps) => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          {AUTH_PAGES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>
      <Route path="/components" element={<Components />} />;
    </Routes>
  );
};

export default Routing;
