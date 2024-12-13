import { useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectUsersQueryCount,
} from '@/modules/users/store/usersSlice';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import UserCardsList from '@/modules/users/ui/components/UserCardsList';

const UserCardsSection = () => {
  const usersQueryCount = useSelector(selectUsersQueryCount);
  const currentPage = useSelector(selectCurrentPage);

  const { data, isLoading } = useGetUsersQuery({
    usersQueryCount,
    currentPage,
  });

  const usersData = data?.items;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <UserCardsList users={usersData} />;
};

export default UserCardsSection;
