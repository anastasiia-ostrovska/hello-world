import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { useGetUserProfileQuery } from '@/features/profile/api/profileApi';
import Profile from './Profile';

const ProfileContainer = () => {
  const params = useParams();
  const userId = params.userId ? Number(params.userId) : 2;

  const { data: profile, isLoading } = useGetUserProfileQuery(userId);

  if (isLoading) {
    return <LinearProgress />;
  }
  return <Profile profile={profile} />;
};

export default ProfileContainer;
