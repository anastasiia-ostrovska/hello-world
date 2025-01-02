import Skeleton from '@mui/material/Skeleton';

const SkeletonText = ({ isLoading, children }) => {
  return isLoading ? <Skeleton /> : children;
};

export default SkeletonText;
