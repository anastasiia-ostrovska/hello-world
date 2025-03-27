export type Photo = string | null;

interface Photos {
  avatar: Photo;
  background: Photo;
}

export interface User {
  id: number;
  name: string;
  job: string;
  country: string;
  photos: Photos;
  followed: boolean;
}
