import { connect } from 'react-redux';
import DialogsList from './DialogsList/DialogsList';

const DialogsSection = ({ dialogs }) => {
  return (
    <div>
      <DialogsList dialogs={dialogs} />
    </div>
  );
};

const mapState = ({ dialogsPage }) => ({ dialogs: dialogsPage.dialogs });

export default connect(mapState)(DialogsSection);
