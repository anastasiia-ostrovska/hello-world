import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setUserProfileData } from '@/store/reducers/profileReducer';

import LinearPreloader from '@components/common/prealoaders/LinearPreloader';
import Profile from './Profile';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const { profile, status } = useSelector((state) => state.profile);
  const params = useParams();

  useEffect(() => {
    const userId = params.userId || '2';
    dispatch(setUserProfileData(userId));
  }, [dispatch, params.userId]);

  if (!profile || status === 'loading') {
    return <LinearPreloader />;
  }
  return <Profile profile={profile} />;
};

export default ProfileContainer;
