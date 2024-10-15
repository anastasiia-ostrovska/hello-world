import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';
import FollowButton from '@/modules/users/ui/components/FollowButton';

const UserCard = ({
  name,
  avatarSrc,
  backgroundSrc,
  avatarSize,
  backgroundImageSize,
  jobTitle,
  country,
  isFollowed,
  isButtonDisabled,
  onUserCardClick,
  onFollowClick,
  onUnfollowClick,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: 'background.userCard',
        backgroundImage: 'none',
      }}
    >
      <CardActionArea onClick={onUserCardClick}>
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
          isFollowed={isFollowed}
          disabled={isButtonDisabled}
          onFollowClick={onFollowClick}
          onUnfollowClick={onUnfollowClick}
        />
      </CardActions>
    </Card>
  );
};

export default UserCard;
