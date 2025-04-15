import { Routing } from '@app/routing';
import { PopupNotificationWithControls } from '@widgets/notification';
import useInitializeApp from '../model/useInitializeApp';
import AppLoader from './AppLoader';

const App = () => {
  const { userId, isInitialized } = useInitializeApp();

  return isInitialized ? (
    <>
      <Routing userId={userId} />
      <PopupNotificationWithControls />
    </>
  ) : (
    <AppLoader />
  );
};

export default App;
