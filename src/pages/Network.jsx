import { UsersPagination, UserCardList } from '@/modules/users';
import SectionWrapper from '@/shared/components/SectionWrapper';

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
