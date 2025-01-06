import { Suspense } from 'react';
import CircularBlockDelayed from '@/modules/loaders/ui/containers/CircularBlockDelayed';

const SuspenseRoute = ({ fallback = <CircularBlockDelayed />, element }) => (
  <Suspense fallback={fallback}>{element}</Suspense>
);

export default SuspenseRoute;
