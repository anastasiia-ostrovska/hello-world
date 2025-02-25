export type Photo = string | null;

interface Photos {
  small: Photo;
  large: Photo;
}

export interface User {
  id: number;
  name: string;
  status: string;
  photos: Photos;
  followed: boolean;
}
