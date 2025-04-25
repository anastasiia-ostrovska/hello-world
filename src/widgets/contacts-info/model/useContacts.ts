import { skipToken } from '@reduxjs/toolkit/query';
import { generateFakeUsers, useUserByIdQuery } from '@entities/user';
import { ContactsArray } from './types';

interface UseContactsResult {
  contacts: ContactsArray;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

export const useContacts = ({
  userId,
}: {
  userId: string;
}): UseContactsResult => {
  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useUserByIdQuery(userId ?? skipToken);
  const fakeUser = generateFakeUsers(1)[0];
  const { contacts, email, phone } = userData?.data || fakeUser;
  const contactsList = { ...contacts, email, phone };
  const contactsArray = Object.entries(contactsList) as ContactsArray;
  const filteredContacts = contactsArray.filter(([, contact]) => !!contact);

  return { contacts: filteredContacts, isLoading, isError, error };
};
