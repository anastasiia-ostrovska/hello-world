import DialogsSection from './DialogsSection/DialogsSection';
import MessagesSection from './MessagesSection/MessagesSection';

import styles from './Dialogs.module.css';

const Dialogs = ({ dialogs }) => {
  return (
    <div className={styles.dialogs_wrapper}>
      <DialogsSection dialogs={dialogs} />
      <MessagesSection />
    </div>
  );
};

export default Dialogs;
