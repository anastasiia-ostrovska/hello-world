import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { CardActions, CardContent, Typography } from '@mui/material';
import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';
import FollowButton from '@/modules/users/ui/components/FollowButton';
import { useTheme } from '@mui/material/styles';

const UserCard = ({
  name,
  avatarSrc,
  backgroundSrc,
  avatarSize,
  backgroundImageSize,
  isFollowed,
}) => {
  const theme = useTheme();
  const onFollowClick = () => alert('Follow clicked!');
  const onUnfollowClick = () => alert('Unfollow clicked!');

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.userCard,
        backgroundImage: 'none',
      }}
    >
      <CardActionArea>
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 4 }}>
        <FollowButton
          isFollowed={isFollowed}
          disabled={false}
          onFollowClick={onFollowClick}
          onUnfollowClick={onUnfollowClick}
        />
      </CardActions>
    </Card>
  );
};

export default UserCard;
