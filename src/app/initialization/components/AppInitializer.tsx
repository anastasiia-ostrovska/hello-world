import useInitializeApp from '../useInitializeApp';
import AppLoader from './ui/AppLoader';
import App from './ui/App';

const AppInitializer = () => {
  const { isAuth, isInitialized } = useInitializeApp();

  return isInitialized ? <App isAuth={isAuth} /> : <AppLoader />;
};

export default AppInitializer;
