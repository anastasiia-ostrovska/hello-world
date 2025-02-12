import { ReactElement, Suspense } from 'react';
import CircularBlockDelayed from '@/modules/loaders/ui/containers/CircularBlockDelayed';

interface SuspenseRouteProps {
  fallback?: ReactElement;
  element: ReactElement;
}

const SuspenseRoute = ({
  fallback = <CircularBlockDelayed />,
  element,
}: SuspenseRouteProps) => <Suspense fallback={fallback}>{element}</Suspense>;

export default SuspenseRoute;
