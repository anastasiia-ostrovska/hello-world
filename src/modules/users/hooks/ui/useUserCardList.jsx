import useUsersItems from '@/modules/users/hooks/api/useUsersItems';
import useUserCardClick from '@/modules/users/hooks/handlers/useUserCardClick';

const useUserCardList = () => {
  const { users, isLoading } = useUsersItems();
  const handleUserCardClick = useUserCardClick();

  return { users, isLoading, handleUserCardClick };
};

export default useUserCardList;
