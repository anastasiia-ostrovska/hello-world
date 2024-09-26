import { useSelector } from 'react-redux';
import { selectDialogs } from '@reducers/dialogsReducer';
import DialogsList from './DialogsList/DialogsList';

const DialogsSection = () => {
  const dialogs = useSelector(selectDialogs);

  return (
    <div>
      <DialogsList dialogs={dialogs} />
    </div>
  );
};

export default DialogsSection;
