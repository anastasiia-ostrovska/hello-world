import { Suspense } from 'react';
import PageFallback from '@/modules/loaders/ui/containers/PageFallback';

// eslint-disable-next-line react/display-name
const withPageFallback = (Component) => (props) => (
  <Suspense fallback={<PageFallback />}>
    <Component {...props} />
  </Suspense>
);

export default withPageFallback;
