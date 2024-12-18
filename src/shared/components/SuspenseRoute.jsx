import { Suspense } from 'react';
import { PageFallback } from '@/modules/loaders';

const SuspenseRoute = ({ fallback = <PageFallback />, element }) => (
  <Suspense fallback={fallback}>{element}</Suspense>
);

export default SuspenseRoute;
