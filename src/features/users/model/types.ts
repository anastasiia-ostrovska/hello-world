import { Styles } from '@/shared/mui';
import { Photo, User } from '@/shared/user';

export interface FakeUser extends Omit<User, 'id'> {
  id: string;
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

// props interfaces:

export interface AvatarWithBgImageProps {
  userName: User['name'];
  avatarSrc: Photo;
  bgImageSrc: Photo;
  avatarSize: number;
  bgImageHeight: number | `${number}px` | `${number}rem`;
  avatarBorderColor?: string;
  avatarBorderWidth?: `${number}px`;
  avatarPosition?: 'center' | 'left';
  sx?: Styles;
}

export interface CardContentLayoutProps {
  isLoading: boolean;
  userName: User['name'];
  jobTitle: string;
  country: string;
}

export interface FollowButtonProps {
  userId: User['id'];
  isFollowed: boolean;
  sx?: Styles;
}

// handler types:

export type UserCardClickHandler = (userId: User['id']) => void;
