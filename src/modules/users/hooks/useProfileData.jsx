import { useGetAuthDataQuery } from '@reducers/authApi';
import { useGetUserProfileQuery } from '@reducers/profileApi';

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
