import { Routing } from '@app/routing';
import useInitializeApp from '../model/useInitializeApp';
import AppLoader from './AppLoader';

const App = () => {
  const { isAuth, isInitialized } = useInitializeApp();

  return isInitialized ? <Routing isAuth={isAuth} /> : <AppLoader />;
};

export default App;
