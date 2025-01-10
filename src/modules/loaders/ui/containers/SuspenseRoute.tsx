import { JSX, Suspense } from 'react';
import CircularBlockDelayed from '@/modules/loaders/ui/containers/CircularBlockDelayed';

interface SuspenseRouteProps {
  fallback?: JSX.Element;
  element: JSX.Element;
}

const SuspenseRoute = ({ fallback, element }: SuspenseRouteProps) => (
  <Suspense fallback={fallback}>{element}</Suspense>
);

SuspenseRoute.defaultProps = {
  fallback: <CircularBlockDelayed />,
};

export default SuspenseRoute;
