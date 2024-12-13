import UserCardsList from '@/modules/users/ui/components/UserCardsList';
import useUsersData from '@/modules/users/hooks/useUsersData';
import useUserCardClick from '@/modules/users/hooks/useUserCardClick';

const UserCardsSection = () => {
  const { usersData, isLoading } = useUsersData();
  const handleUserCardClick = useUserCardClick();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserCardsList
      users={usersData}
      handleUserCardClick={handleUserCardClick}
    />
  );
};

export default UserCardsSection;
