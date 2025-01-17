import { LoaderProps } from '@/modules/loaders/types';
import { Styles } from '@/shared/types/mui-props';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

interface SkeletonWrapperProps extends LoaderProps {
  animation?: SkeletonProps['animation'];
  variant?: SkeletonProps['variant'];
  sx?: Styles;
}

const SkeletonWrapper = ({
  isLoading,
  element,
  animation = 'pulse',
  variant = 'rectangular',
  sx = {},
}: SkeletonWrapperProps) => {
  if (isLoading)
    return (
      <Skeleton animation={animation} variant={variant} sx={{ ...sx }}>
        {element || null}
      </Skeleton>
    );
  return element || null;
};

export default SkeletonWrapper;
