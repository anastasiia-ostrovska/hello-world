import { User } from '@/shared/user';

export interface ProfileDataResponse {
  userId: User['id'];
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: Record<string, string>;
  fullName: User['name'];
  photos: User['photos'];
}
