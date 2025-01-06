import { useParams } from 'react-router-dom';
import { useGetUserProfileQuery } from '@/modules/profile/store/profileApi';
import LinearProgress from '@mui/material/LinearProgress';
import Profile from './Profile';

const ProfileContainer = () => {
  const params = useParams();
  const userId = params.userId || '2';

  const { data: profile, isLoading } = useGetUserProfileQuery(userId);

  if (isLoading) {
    return <LinearProgress />;
  }
  return <Profile profile={profile} />;
};

export default ProfileContainer;
