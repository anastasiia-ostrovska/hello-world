// User
export type Photo = string | null;

export interface UserPhotos {
  avatar: Photo;
  background: Photo;
}

export interface UserContacts {
  linkedIn: string;
  github: string;
  facebook: string;
  instagram: string;
}

export interface User {
  id: string;
  name: string;
  photos: UserPhotos;
}

interface UserInfo {
  email: string;
  phone: string;
  country: string;
  job: string;
  aboutMe: string;
}

export interface UserWithInfo extends User, UserInfo {
  contacts: UserContacts;
  isFollowedByMe: boolean;
  followedBy: User[];
  following: User[];
}

interface EditableUserData extends UserContacts, UserPhotos, UserInfo {
  name: string;
}

export type EditedUserData = Partial<EditableUserData>;

// Users
export interface UsersData {
  users: UserWithInfo[];
  usersTotal: number;
  totalPages: number;
  perPage: number;
  currentPage: number;
}

export interface UsersQueryParams {
  usersPerPage: number;
  currentPage: number;
  searchedUser: string;
  isFollowedByMe: boolean;
}

// Props
export enum AvatarPosition {
  Center = 'center',
  Left = 'left',
}
