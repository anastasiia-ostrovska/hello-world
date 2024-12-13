import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import UserAvatarWithBackground from '@/modules/users/ui/components/UserAvatarWithBackground';
import FollowButton from '@/modules/users/ui/components/FollowButton';

const UserCard = ({
  userData,
  avatarSize,
  backgroundImageSize,
  onUserCardClick,
}) => {
  const { palette } = useTheme();

  const {
    id,
    name,
    followed,
    photos: { small: avatarSrc, large: backgroundSrc },
  } = userData;

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
        aria-label={`Visit ${name} profile`}
        onClick={() => onUserCardClick(id)}
      >
        <UserAvatarWithBackground
          name={name}
          avatarSrc={avatarSrc}
          backgroundSrc={backgroundSrc}
          avatarSize={avatarSize}
          backgroundImageSize={backgroundImageSize}
          avatarBorderColor={palette.background.userCard}
          avatarBorderWidth="3px"
          sx={{ mb: avatarSize / 16 }}
        />
        <CardContent align="center">
          <Typography gutterBottom noWrap variant="h6" component="h5">
            {name}
          </Typography>
          <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
            {jobTitle}
          </Typography>
          <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
            {country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <FollowButton
          userId={id}
          isFollowed={followed}
          sx={{ width: '100%', maxWidth: 180 }}
        />
      </CardActions>
    </Card>
  );
};

export default memo(UserCard);
