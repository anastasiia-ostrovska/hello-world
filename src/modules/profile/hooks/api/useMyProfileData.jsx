import { useAuth } from '@/modules/auth';
import { useGetUserProfileQuery } from '@/modules/profile/store/profileApi';

const useMyProfileData = () => {
  const { authData, isLoading: isAuthDataLoading } = useAuth();
  const { data, isLoading: isProfileDataLoading } = useGetUserProfileQuery(
    authData?.id,
    {
      skip: !authData?.id,
    }
  );

  const isLoading = isAuthDataLoading || isProfileDataLoading;

  return { data, isLoading };
};

export default useMyProfileData;
