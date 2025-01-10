import { LoaderProps } from '@/modules/loaders/types';
import Skeleton from '@mui/material/Skeleton';

const SkeletonText = ({ isLoading, element }: LoaderProps) => {
  return isLoading ? <Skeleton /> : element;
};

export default SkeletonText;
