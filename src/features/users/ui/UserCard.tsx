import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { User } from '@shared/user';
import CardActionArea from '@mui/material/CardActionArea';
import AvatarWithBgImage from './AvatarWithBgImage';
import FollowButton from './FollowButton';
import { CardContentLayout, UserCardLayout } from './UserCardLayout';
import {
  AvatarWithBgImageProps,
  CardContentLayoutProps,
  FakeUser,
  FollowButtonProps,
  UserCardClickHandler,
} from '../model/types';

interface UserCardProps
  extends AvatarWithBgImageProps,
    CardContentLayoutProps,
    Omit<FollowButtonProps, 'userId'> {
  userId: User['id'] | FakeUser['id'];
  onUserCardClick: UserCardClickHandler;
}

const UserCard = ({
  isLoading,
  userId,
  userName,
  jobTitle,
  country,
  isFollowed,
  avatarSrc,
  bgImageSrc,
  avatarSize,
  bgImageHeight,
  onUserCardClick,
}: UserCardProps) => {
  const { palette } = useTheme();

  return (
    <UserCardLayout
      isLoading={isLoading}
      content={
        <CardActionArea
          aria-label={
            isLoading ? 'Loading profile' : `Visit ${userName} profile`
          }
          onClick={() => onUserCardClick(userId as User['id'])}
        >
          <AvatarWithBgImage
            userName={userName}
            avatarSrc={avatarSrc}
            bgImageSrc={bgImageSrc}
            avatarSize={avatarSize}
            bgImageHeight={bgImageHeight}
            avatarBorderColor={palette.customBackground.userCard}
            avatarBorderWidth="3px"
            sx={{ mb: avatarSize / 16 }}
          />
          <CardContentLayout
            isLoading={isLoading}
            userName={userName}
            jobTitle={jobTitle}
            country={country}
          />
        </CardActionArea>
      }
      button={
        <FollowButton
          userId={userId as User['id']}
          isFollowed={isFollowed}
          isLoading={isLoading}
          sx={{ width: '100%', maxWidth: 180, height: 36 }}
        />
      }
    />
  );
};

export default memo(UserCard);
