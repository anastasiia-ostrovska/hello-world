import { useGetAuthDataQuery } from '@/modules/auth';
import { useGetUserProfileQuery } from '@/modules/profile/store/profileApi';

const useProfileData = () => {
  const { data: authData, isLoading: isAuthDataLoading } =
    useGetAuthDataQuery();

  const userId = authData?.data?.id;

  const { data, isLoading: isProfileDataLoading } = useGetUserProfileQuery(
    userId,
    { skip: !userId }
  );

  const isLoading = isAuthDataLoading || isProfileDataLoading;

  return { data, isLoading };
};

export default useProfileData;
