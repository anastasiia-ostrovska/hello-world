import { Photos, UserId, UserName } from '@/modules/users/types';

export interface ProfileDataResponse {
  userId: UserId;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: Record<string, string>;
  fullName: UserName;
  photos: Photos;
}
