type Photo = string | null;

export interface ProfileDataResponse {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: Record<string, string>;
  fullName: string;
  photos: { small: Photo; large: Photo };
}
