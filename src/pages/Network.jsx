import { UsersPagination, UserCardsSection } from '@/modules/users';
import SectionWrapper from '@/shared/components/SectionWrapper';

const Network = () => {
  return (
    <>
      <SectionWrapper sx={{ justifyContent: 'center' }}>
        <UsersPagination />
      </SectionWrapper>
      <SectionWrapper>
        <UserCardsSection />
      </SectionWrapper>
    </>
  );
};

export default Network;
