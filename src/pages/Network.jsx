// import { useState } from 'react';
// import { useGetUsersQuery } from '@/modules/users/store/usersApi';
import { UserCardsList } from '@/modules/users';
import ContentBlock from '@/shared/components/ContentBlock';
// import LinearPreloader from '@components/common/prealoaders/LinearPreloader';

const Network = () => {
  // const [usersPerPageCount] = useState(12);
  // const [currentPage, handlePageChange] = useCurrentPage(1);
  //
  // const { data: users, isLoading } = useGetUsersQuery({
  //   usersPerPageCount,
  //   currentPage,
  // });

  // if (!isLoading) {
  return (
    <>
      <ContentBlock>Pagination</ContentBlock>
      <ContentBlock>
        <UserCardsList />
      </ContentBlock>
    </>
  );
  // }

  // return <LinearPreloader />;
};

export default Network;
