import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import { ROUTES_CONFIG } from '@/routing';
import Home from '@/pages/Home';
import { lazy } from 'react';

const Components = lazy(
  () => import('@/_old-version/components-presentation/Components')
);

const App = () => {
  return (
    <Routes>
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
