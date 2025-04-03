import { Routing } from '@app/routing';
import { PopupNotificationWithControls } from '@widgets/notification';
import useInitializeApp from '../model/useInitializeApp';
import AppLoader from './AppLoader';

const App = () => {
  const { isAuth, isInitialized } = useInitializeApp();

  return isInitialized ? (
    <>
      <Routing isAuth={isAuth} />
      <PopupNotificationWithControls />
    </>
  ) : (
    <AppLoader />
  );
};

export default App;
