import useInitializeApp from '@/app/hooks/useInitializeApp';
import { AppInitLoader } from '../modules/loaders';
import App from './App';

const AppInitializer = () => {
  const { isAuth, isInitialized } = useInitializeApp();

  if (!isInitialized) {
    return <AppInitLoader />;
  }

  return <App isAuth={isAuth} />;
};

export default AppInitializer;
