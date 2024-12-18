import UserCardsList from '@/modules/users/ui/components/UserCardsList';
import useUsersItemsData from '@/modules/users/hooks/useUsersItemsData';
import useUserCardClick from '@/modules/users/hooks/useUserCardClick';

const UserCardsSection = () => {
  const { users, isLoading } = useUsersItemsData();
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
