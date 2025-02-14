import { ReactElement, Suspense } from 'react';
import PageLoaderWithDelay from '../PageLoaderWithDelay';

interface RouteSuspenseProps {
  element: ReactElement;
  fallback?: ReactElement;
}

const RouteSuspense = ({
  element,
  fallback = <PageLoaderWithDelay />,
}: RouteSuspenseProps) => {
  return <Suspense fallback={fallback}>{element}</Suspense>;
};

export default RouteSuspense;
