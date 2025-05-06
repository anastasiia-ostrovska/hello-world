import { withCapitalLetter } from '@shared/lib';
import { ContactLabel } from '@entities/user';
import {
  ContactItems,
  PhoneLabel,
  UserInfoItemLabel,
  UserInfoItems,
} from '../model/types';

const createItemNameAndLabel = (name: string) => ({
  name,
  label: withCapitalLetter(name),
});

const multilineProps = {
  multiline: true,
  maxRows: 2,
};

export const USER_INFO_ITEMS: UserInfoItems = {
  [UserInfoItemLabel.Name]: {
    ...createItemNameAndLabel(UserInfoItemLabel.Name),
    required: true,
  },
  [UserInfoItemLabel.Country]: {
    ...createItemNameAndLabel(UserInfoItemLabel.Country),
  },
  [UserInfoItemLabel.Job]: {
    ...createItemNameAndLabel(UserInfoItemLabel.Job),
  },
};

export const CONTACT_ITEMS: ContactItems = {
  [ContactLabel.LinkedIn]: {
    ...createItemNameAndLabel(ContactLabel.LinkedIn),
    ...multilineProps,
  },
  [ContactLabel.Github]: {
    ...createItemNameAndLabel(ContactLabel.Github),
    ...multilineProps,
  },
  [ContactLabel.Facebook]: {
    ...createItemNameAndLabel(ContactLabel.Facebook),
    ...multilineProps,
  },
  [ContactLabel.Instagram]: {
    ...createItemNameAndLabel(ContactLabel.Instagram),
    ...multilineProps,
  },
  phone: {
    ...createItemNameAndLabel(PhoneLabel.Phone),
  },
};
