import { Routing } from '@app/routing';
import { PopupNotificationWithControls } from '@widgets/notification';
import { ModalController } from '@features/modal-controller';
import useInitializeApp from '../model/useInitializeApp';
import AppLoader from './AppLoader';

const App = () => {
  const { userId, isInitialized } = useInitializeApp();

  return isInitialized ? (
    <>
      <Routing userId={userId} />
      <ModalController />
      <PopupNotificationWithControls />
    </>
  ) : (
    <AppLoader />
  );
};

export default App;
