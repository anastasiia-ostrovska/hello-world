import { Button } from '@mui/material';
import { SkeletonWrapper } from '@shared/ui';

const ShowContactInfoButton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <SkeletonWrapper
      isLoading={isLoading}
      element={
        <Button variant="text" size="small" sx={{ ml: '-5px' }}>
          Contact info
        </Button>
      }
    />
  );
};

export default ShowContactInfoButton;
