import { SectionWrapper } from '@/layout';
import { UsersPagination, UserCardList } from '@/modules/users';

const Network = () => {
  return (
    <>
      <SectionWrapper sx={{ justifyContent: 'center' }}>
        <UsersPagination />
      </SectionWrapper>
      <SectionWrapper>
        <UserCardList />
      </SectionWrapper>
    </>
  );
};

export default Network;
