import { SkeletonText } from '@/modules/loaders';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const UserCardContent = ({ isLoading, userName, jobTitle, country }) => {
  return (
    <CardContent align="center">
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

export default UserCardContent;
