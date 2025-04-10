import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import { ROUTES } from '@shared/router';
import { AvatarWithBgImage, AvatarWithBgImageProps } from '@entities/user';
import { FollowButton } from '@features/user';
import { CardContentLayout, UserCardLayout } from './UserCardLayout';
import { CardContentLayoutProps } from '../model/types';

interface UserCardProps extends AvatarWithBgImageProps, CardContentLayoutProps {
  userId: string;
}

const UserCardVertical = ({
  isLoading,
  userId,
  name,
  jobTitle,
  country,
  avatarSrc,
  bgImageSrc,
  avatarSize,
  bgImageHeight,
}: UserCardProps) => {
  const { palette } = useTheme();

  return (
    <UserCardLayout
      isLoading={isLoading}
      content={
        <RouterLink
          to={`${ROUTES.PROFILE}/${userId}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CardActionArea
            aria-label={isLoading ? 'Loading profile' : `Visit ${name} profile`}
          >
            <AvatarWithBgImage
              name={name}
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
              name={name}
              jobTitle={jobTitle}
              country={country}
            />
          </CardActionArea>
        </RouterLink>
      }
      button={
        <FollowButton
          userId={userId}
          isLoading={isLoading}
          sx={{ width: '100%', height: 36 }}
        />
      }
    />
  );
};

export default memo(UserCardVertical);
