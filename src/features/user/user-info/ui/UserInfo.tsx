import Typography from '@mui/material/Typography';
import { SkeletonText } from '@shared/ui';
import { UserInfoProps } from '../model/types';

const UserInfo = ({ isLoading, name, jobTitle, country }: UserInfoProps) => {
  return (
    <>
      <Typography gutterBottom noWrap variant="h6" component="h5">
        <SkeletonText isLoading={isLoading} element={name} />
      </Typography>
      <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
        <SkeletonText isLoading={isLoading} element={jobTitle} />
      </Typography>
      <Typography noWrap variant="body1" sx={{ color: 'text.secondary' }}>
        <SkeletonText isLoading={isLoading} element={country} />
      </Typography>
    </>
  );
};

export default UserInfo;
