import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { SkeletonLoaderWrapper } from '@/modules/loaders';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';
import UserCardContent from '@/modules/users/ui/components/UserCardContent';
import FollowButton from '@/modules/users/ui/components/FollowButton';

const UserCard = ({
  isLoading,
  userId,
  userName,
  jobTitle,
  country,
  isFollowed,
  avatarSrc,
  backgroundSrc,
  avatarSize,
  backgroundImageSize,
  onUserCardClick,
}) => {
  const { palette } = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        backgroundColor: 'background.userCard',
        pointerEvents: isLoading ? 'none' : 'auto',
      }}
    >
      <CardActionArea
        aria-label={isLoading ? 'Loading profile' : `Visit ${userName} profile`}
        onClick={() => onUserCardClick(userId)}
      >
        <UserAvatarWithBackground
          name={userName}
          avatarSrc={avatarSrc}
          backgroundSrc={backgroundSrc}
          avatarSize={avatarSize}
          backgroundImageSize={backgroundImageSize}
          avatarBorderColor={palette.background.userCard}
          avatarBorderWidth="3px"
          sx={{ mb: avatarSize / 16 }}
        />
        <UserCardContent
          isLoading={isLoading}
          userName={userName}
          jobTitle={jobTitle}
          country={country}
        />
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <SkeletonLoaderWrapper
          isLoading={isLoading}
          element={
            <FollowButton
              userId={userId}
              isFollowed={isFollowed}
              sx={{ width: '100%', maxWidth: 180, height: 36 }}
            />
          }
          sx={{ borderRadius: '2rem', width: '100%', maxWidth: 180 }}
        />
      </CardActions>
    </Card>
  );
};

export default memo(UserCard);
