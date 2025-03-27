export type Photo = string | null;

interface Photos {
  small: Photo;
  large: Photo;
}

export interface User {
  id: number;
  name: string;
  job: string;
  country: string;
  photos: Photos;
  followed: boolean;
}
