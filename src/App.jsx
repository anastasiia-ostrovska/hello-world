import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import ROUTES_CONFIG from '@/routing/routes-config';
import ProfileContainer from '@/_old-version/components/Profile/ProfileContainer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProfileContainer />} />
        {ROUTES_CONFIG.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
