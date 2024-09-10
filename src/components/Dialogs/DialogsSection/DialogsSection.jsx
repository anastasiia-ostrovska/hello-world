import DialogsList from './DialogsList/DialogsList';

const dialogs = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Vlad' },
  { id: 3, name: 'Eugenia' },
  { id: 4, name: 'Oleksandr' },
  { id: 5, name: 'Valeria' },
  { id: 6, name: 'Oleksiy' },
  { id: 7, name: 'Denys' },
];

const DialogsSection = () => {
  return (
    <div>
      <p>Mb search bar</p>
      <DialogsList dialogs={dialogs} />
    </div>
  );
};

export default DialogsSection;
