import { ReactElement } from 'react';
import { SkeletonText, SkeletonWrapper } from '@/shared/ui/SkeletonLoaders';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardContentLayoutProps } from '../model/types';

interface UserCardLayoutProps {
  isLoading: boolean;
  content: ReactElement;
  button: ReactElement;
}

export const UserCardLayout = ({
  isLoading,
  content,
  button,
}: UserCardLayoutProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        backgroundColor: 'customBackground.userCard',
        pointerEvents: isLoading ? 'none' : 'auto',
      }}
    >
      {content}
      <CardActions sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <SkeletonWrapper
          isLoading={isLoading}
          element={button}
          sx={{ borderRadius: '2rem', width: '100%', maxWidth: 180 }}
        />
      </CardActions>
    </Card>
  );
};

export const CardContentLayout = ({
  isLoading,
  userName,
  jobTitle,
  country,
}: CardContentLayoutProps) => {
  return (
    <CardContent sx={{ justifyContent: 'center' }}>
      <Typography gutterBottom noWrap variant="h6" component="h5">
        <SkeletonText isLoading={isLoading} element={userName} />
      </Typography>
      <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
        <SkeletonText isLoading={isLoading} element={jobTitle} />
      </Typography>
      <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
        <SkeletonText isLoading={isLoading} element={country} />
      </Typography>
    </CardContent>
  );
};
