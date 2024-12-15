import UserCardsList from '@/modules/users/ui/components/UserCardsList';
import useUsersData from '@/modules/users/hooks/useUsersData';
import useUserCardClick from '@/modules/users/hooks/useUserCardClick';

const UserCardsSection = () => {
  const { users, isLoading } = useUsersData();
  const handleUserCardClick = useUserCardClick();

  return (
    <UserCardsList
      users={users}
      isLoading={isLoading}
      handleUserCardClick={handleUserCardClick}
    />
  );
};

export default UserCardsSection;
