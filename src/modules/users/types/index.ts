export type UserId = number | string;

export type UserName = string;

type Photo = string | null;
export interface Photos {
  small: Photo;
  large: Photo;
}
export interface User {
  id: UserId;
  name: UserName;
  status: string;
  photos: Photos;
  followed: boolean;
}

export interface UsersQueryParams {
  usersQueryCount: number;
  currentPage: number;
}

export interface UsersResponse {
  items: User[];
  totalCount: number;
  error: string | null;
}
