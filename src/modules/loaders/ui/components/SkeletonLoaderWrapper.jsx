import Skeleton from '@mui/material/Skeleton';

const SkeletonLoaderWrapper = ({
  isLoading,
  element,
  animation = 'pulse',
  variant = 'rectangular',
  sx = {},
}) => {
  if (isLoading)
    return (
      <Skeleton animation={animation} variant={variant} sx={{ ...sx }}>
        {element}
      </Skeleton>
    );
  return element;
};

export default SkeletonLoaderWrapper;
