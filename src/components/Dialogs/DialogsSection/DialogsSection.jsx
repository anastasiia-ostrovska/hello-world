import { useSelector } from 'react-redux';
import DialogsList from './DialogsList/DialogsList';

const DialogsSection = () => {
  const { dialogs } = useSelector((state) => state.dialogs);

  return (
    <div>
      <DialogsList dialogs={dialogs} />
    </div>
  );
};

export default DialogsSection;
