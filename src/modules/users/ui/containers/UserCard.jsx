import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '@/modules/users/store/usersApi';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';
import FollowButton from '@/modules/users/ui/components/FollowButton';

const UserCard = ({
  data,
  avatarSize,
  backgroundImageSize,
  onUserCardClick,
}) => {
  const theme = useTheme();

  const {
    id,
    name,
    followed,
    photos: { small: avatarSrc, large: backgroundSrc },
  } = data;

  const [unfollowUser, { isLoading: isLoadingUnfollow }] =
    useUnfollowUserMutation();

  const [followUser, { isLoading: isLoadingFollow }] = useFollowUserMutation();

  const handleFollowClick = (userId) => {
    followUser(userId);
  };

  const handleUnfollowClick = (userId) => {
    unfollowUser(userId);
  };

  // temporarily mocked
  const jobTitle = 'Mocked job title';
  const country = 'Mocked country';

  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: 'background.userCard',
        backgroundImage: 'none',
      }}
    >
      <CardActionArea onClick={() => onUserCardClick(id)}>
        <UserAvatarWithBackground
          name={name}
          avatarSrc={avatarSrc}
          backgroundSrc={backgroundSrc}
          avatarSize={avatarSize}
          backgroundImageSize={backgroundImageSize}
          avatarBorderColor={theme.palette.background.userCard}
          avatarBorderWidth="3px"
          sx={{ mb: avatarSize / 16 }}
        />
        <CardContent align="center">
          <Typography gutterBottom noWrap variant="h5" component="h3">
            {name}
          </Typography>
          <Typography
            noWrap
            variant="body1"
            sx={{ color: 'text.secondary', minHeight: 24 }}
          >
            {jobTitle}
          </Typography>
          <Typography
            noWrap
            variant="body1"
            sx={{ color: 'text.secondary', minHeight: 24 }}
          >
            {country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ px: 4, py: 2 }}>
        <FollowButton
          isFollowed={followed}
          disabled={isLoadingUnfollow || isLoadingFollow}
          onFollowClick={() => handleFollowClick(id)}
          onUnfollowClick={() => handleUnfollowClick(id)}
        />
      </CardActions>
    </Card>
  );
};

export default memo(UserCard);
