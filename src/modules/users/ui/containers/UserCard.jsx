import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import UserAvatarWithBackground from '@/modules/users/ui/containers/UserAvatarWithBackground';

const UserCard = ({ followed }) => {
  return (
    <Card>
      <CardActionArea>
        <UserAvatarWithBackground name="Valery T" size="small" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 4 }}>
        {followed ? (
          <Button variant="outlined" sx={{ width: '100%' }}>
            Unfollow
          </Button>
        ) : (
          <Button variant="contained" sx={{ width: '100%' }}>
            Follow
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default UserCard;
