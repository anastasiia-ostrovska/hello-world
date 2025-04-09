// User
export type UserId = string;
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

interface UserInfo {
  email: string;
  phone: string;
  country: string;
  job: string;
  aboutMe: string;
}

export interface UserWithInfo extends UserInfo {
  id: UserId;
  name: string;
  photos: UserPhotos;
  contacts: UserContacts;
  followedBy: UserId[];
  following: UserId[];
}

interface EditableUserData extends UserContacts, UserPhotos, UserInfo {
  name: string;
}

export type EditedUserData = Partial<EditableUserData>;

// Users
export interface UsersListData {
  users: UserWithInfo[];
  usersTotal: number;
  totalPages: number;
  perPage: number;
  currentPage: number;
}

export interface UsersQueryParams {
  usersPerPage: number;
  currentPage: number;
  searchedUser: string | undefined;
  isFollowedByMe: boolean | undefined;
}

// Props
export enum AvatarPosition {
  Center = 'center',
  Left = 'left',
}
