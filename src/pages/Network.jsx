import { UserCardsSection } from '@/modules/users';
import SectionWrapper from '@/shared/components/SectionWrapper';

const Network = () => {
  return (
    <>
      <SectionWrapper>Pagination</SectionWrapper>
      <SectionWrapper>
        <UserCardsSection />
      </SectionWrapper>
    </>
  );
};

export default Network;
