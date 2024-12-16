import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { SkeletonLoaderWrapper } from '@/modules/loaders';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UserAvatarWithBackground from '@/modules/users/ui/components/UserAvatarWithBackground';
import FollowButton from '@/modules/users/ui/components/FollowButton';

const UserCard = ({
  isLoading,
  userId,
  userName,
  isFollowed,
  avatarSrc,
  backgroundSrc,
  avatarSize,
  backgroundImageSize,
  onUserCardClick,
}) => {
  const theme = useTheme();

  // temporarily mocked
  const jobTitle = 'Mocked job title';
  const country = 'Mocked country';

  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        backgroundColor: 'background.userCard',
      }}
    >
      <CardActionArea
        aria-label={`Visit ${userName} profile`}
        onClick={() => onUserCardClick(userId)}
      >
        <UserAvatarWithBackground
          name={userName}
          avatarSrc={avatarSrc}
          backgroundSrc={backgroundSrc}
          avatarSize={avatarSize}
          backgroundImageSize={backgroundImageSize}
          avatarBorderColor={theme.palette.background.userCard}
          avatarBorderWidth="3px"
          sx={{ mb: avatarSize / 16 }}
        />
        <CardContent align="center">
          <Typography gutterBottom noWrap variant="h6" component="h5">
            {isLoading ? <Skeleton /> : userName}
          </Typography>
          <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
            {isLoading ? <Skeleton /> : jobTitle}
          </Typography>
          <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
            {isLoading ? <Skeleton /> : country}
          </Typography>
        </CardContent>
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
