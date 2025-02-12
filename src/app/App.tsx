import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/layout';
import { ROUTES, ROUTES_CONFIG } from '@/routing';
import LogIn from '@/pages/LogIn';
import Home from '@/pages/Home';
import ProtectedRoute from '@/shared/components/ProtectedRoute';

const Components = lazy(
  () => import('@/_old-version/components-presentation/Components')
);

interface AppProps {
  isAuth: boolean;
}

const App = ({ isAuth }: AppProps) => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {ROUTES_CONFIG.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>
      <Route path="/components" element={<Components />} />;
    </Routes>
  );
};

export default App;
