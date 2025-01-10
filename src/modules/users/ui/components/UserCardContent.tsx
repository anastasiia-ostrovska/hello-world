import { UserName } from '@/modules/users/types';
import { SkeletonText } from '@/modules/loaders';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface UserCardContentProps {
  isLoading: boolean;
  userName: UserName;
  jobTitle: string;
  country: string;
}

const UserCardContent = ({
  isLoading,
  userName,
  jobTitle,
  country,
}: UserCardContentProps) => {
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

export default UserCardContent;
