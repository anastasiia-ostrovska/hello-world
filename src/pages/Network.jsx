import { useState } from 'react';
import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import { Block } from '@/layout';
import useCurrentPage from '@/modules/users/hooks/useCurrentPage';
import UserCardsList from '@/modules/users/ui/containers/UserCardsList';
import LinearPreloader from '@components/common/prealoaders/LinearPreloader';

const Network = () => {
  const [usersPerPageCount] = useState(12);
  const [currentPage] = useCurrentPage(1);

  const { data: users, isLoading } = useGetUsersQuery({
    usersPerPageCount,
    currentPage,
  });

  if (!isLoading) {
    return (
      <>
        <Block>Pagination</Block>
        <Block>
          <UserCardsList users={users.items} />
        </Block>
      </>
    );
  }

  return <LinearPreloader />;
};

export default Network;
