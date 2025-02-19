export interface UsersQueryParams {
  usersQueryCount: number;
  currentPage: number;
}

export type Photo = string | null;

export interface Photos {
  small: Photo;
  large: Photo;
}

export interface User {
  id: number | string;
  name: string;
  status: string;
  photos: Photos;
  followed: boolean;
}

export interface UsersResponse {
  items: User[];
  totalCount: number;
  error: string | null;
}
