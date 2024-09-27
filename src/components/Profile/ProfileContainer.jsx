import { useParams } from 'react-router-dom';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import { useGetUserProfileQuery } from '@reducers/profileApi';
import Profile from './Profile';

const ProfileContainer = () => {
  const params = useParams();
  const userId = params.userId || '2';

  const { data: profile, isLoading } = useGetUserProfileQuery(userId);

  if (isLoading) {
    return <LinearPreloader />;
  }
  return <Profile profile={profile} />;
};

export default ProfileContainer;
