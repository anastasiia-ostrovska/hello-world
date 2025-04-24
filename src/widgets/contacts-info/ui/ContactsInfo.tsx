import { useContacts } from '@widgets/contacts-info/model/useContacts';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContactsList from './ContactsList';

const ContactsInfo = ({ userId }: { userId: string }) => {
  const { contacts, isLoading, isError } = useContacts({ userId });

  return contacts.length ? (
    <Stack spacing={2} sx={{ minWidth: 300 }}>
      <ContactsList contacts={contacts} isLoading={isLoading || isError} />
    </Stack>
  ) : (
    <Typography>
      Looks like this user hasn’t added any contact details.
    </Typography>
  );
};

export default ContactsInfo;
