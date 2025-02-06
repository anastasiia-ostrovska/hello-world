import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import { ROUTES_CONFIG, ROUTES } from '@/routing';
import Home from '@/pages/Home';

const LogIn = lazy(() => import('@/pages/LogIn'));
const Components = lazy(
  () => import('@/_old-version/components-presentation/Components')
);

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {ROUTES_CONFIG.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default App;
