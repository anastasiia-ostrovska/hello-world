import { ProfileDataResponse } from '@/modules/profile/types';
import { useAuth } from '@/modules/auth';
import { useGetUserProfileQuery } from '@/modules/profile/store/profileApi';

interface MyProfileData {
  data: ProfileDataResponse | undefined;
  isLoading: boolean;
}

const useMyProfileData = (): MyProfileData => {
  const { authData, isLoading: isAuthDataLoading } = useAuth();
  const { data, isLoading: isProfileDataLoading } = useGetUserProfileQuery(
    authData?.id as number,
    {
      skip: !authData?.id,
    }
  );

  const isLoading = isAuthDataLoading || isProfileDataLoading;

  return { data, isLoading };
};

export default useMyProfileData;
