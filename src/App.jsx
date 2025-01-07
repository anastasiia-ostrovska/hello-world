import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import ROUTES_CONFIG from '@/routing/routes-config';
import Home from '@/pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {ROUTES_CONFIG.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
