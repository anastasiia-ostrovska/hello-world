import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/layout';
import LogIn from '@/pages/LogIn';
import ProtectedRoute from '@/routing/components/ProtectedRoute';
import Home from '@/pages/Home';
import Components from '@/_old-version/components-presentation/Components';
import AUTH_PAGES from '@/routing/config';
import * as ROUTES from '../constants';

interface RoutingProps {
  isAuth: boolean;
}

const Routing = ({ isAuth }: RoutingProps) => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/" element={<Layout />}>
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
