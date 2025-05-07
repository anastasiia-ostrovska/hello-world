import { ContactLabel, UserWithInfo } from '@entities/user';
import {
  PhoneLabel,
  ProfileInfoEditorInputs,
  UserInfoItemLabel,
} from '../model/types';

export const getDefaultInputsValues = (
  user: UserWithInfo
): ProfileInfoEditorInputs => {
  return {
    [UserInfoItemLabel.Name]: user.name || '',
    [UserInfoItemLabel.Country]: user.country || '',
    [UserInfoItemLabel.Job]: user.job || '',
    [ContactLabel.Github]: user.contacts?.github || '',
    [ContactLabel.LinkedIn]: user.contacts?.linkedIn || '',
    [ContactLabel.Facebook]: user.contacts?.facebook || '',
    [ContactLabel.Instagram]: user.contacts?.instagram || '',
    [PhoneLabel.Phone]: user.phone || '',
  };
};
