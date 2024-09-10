import DialogsList from './DialogsList/DialogsList';

const DialogsSection = ({ dialogs }) => {
  return (
    <div>
      <p>Mb search bar</p>
      <DialogsList dialogs={dialogs} />
    </div>
  );
};

export default DialogsSection;
