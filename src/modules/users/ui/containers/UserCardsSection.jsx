import UserCardsList from '@/modules/users/ui/components/UserCardsList';
import useUsersData from '@/modules/users/hooks/useUsersData';

const UserCardsSection = () => {
  const { usersData, isLoading } = useUsersData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <UserCardsList users={usersData} />;
};

export default UserCardsSection;
