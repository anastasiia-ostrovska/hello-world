import { UserCardList } from '@/features/users';
import { UsersPagination } from '@/modules/users';
import SectionWrapper from '@/shared/ui/SectionWrapper';

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
