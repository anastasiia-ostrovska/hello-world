import { useGetUserProfileQuery } from '@/modules/profile/store/profileApi';
import useMyId from '@/modules/profile/hooks/api/useMyId';

const useMyProfileData = () => {
  const { userId, isAuthDataLoading } = useMyId();
  const { data, isLoading: isProfileDataLoading } = useGetUserProfileQuery(
    userId,
    { skip: !userId }
  );

  const isLoading = isAuthDataLoading || isProfileDataLoading;

  return { data, isLoading };
};

export default useMyProfileData;
