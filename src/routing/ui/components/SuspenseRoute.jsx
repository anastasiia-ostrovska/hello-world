import { Suspense } from 'react';
import PageFallback from '@/modules/loaders/ui/containers/PageFallback';

const SuspenseRoute = ({ fallback = <PageFallback />, element }) => (
  <Suspense fallback={fallback}>{element}</Suspense>
);

export default SuspenseRoute;
