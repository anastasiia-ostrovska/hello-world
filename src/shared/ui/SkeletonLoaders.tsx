import { ReactNode } from 'react';
import { Styles } from '@/shared/mui';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

export interface LoaderProps {
  isLoading: boolean;
  element: ReactNode;
}

export const SkeletonText = ({ isLoading, element }: LoaderProps) => {
  return isLoading ? <Skeleton /> : element || null;
};

interface SkeletonWrapperProps extends LoaderProps, SkeletonProps {
  variant?: SkeletonProps['variant'];
  sx?: Styles;
}

export const SkeletonWrapper = ({
  isLoading,
  element,
  variant = 'rectangular',
  sx = {},
  ...props
}: SkeletonWrapperProps) => {
  if (isLoading)
    return (
      <Skeleton variant={variant} sx={{ ...sx }} {...props}>
        {element || null}
      </Skeleton>
    );
  return element || null;
};
