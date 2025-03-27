import { Routing } from '@app/routing';
import { ToastNotification } from '@features/notification';
import useInitializeApp from '../model/useInitializeApp';
import AppLoader from './AppLoader';

const App = () => {
  const { isAuth, isInitialized } = useInitializeApp();

  return isInitialized ? (
    <>
      <Routing isAuth={isAuth} />
      <ToastNotification />
    </>
  ) : (
    <AppLoader />
  );
};

export default App;
