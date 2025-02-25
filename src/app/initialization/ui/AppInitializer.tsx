import AppLoader from '@app/initialization/ui/AppLoader';
import App from '@app/initialization/ui/App';
import useInitializeApp from '../model/useInitializeApp';

const AppInitializer = () => {
  const { isAuth, isInitialized } = useInitializeApp();

  return isInitialized ? <App isAuth={isAuth} /> : <AppLoader />;
};

export default AppInitializer;
