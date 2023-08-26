import React from 'react';

import { ReactSuspenseLoading } from './ReactSuspenseLoading';

const ReactSuspense: React.FC<{ comp: React.ReactNode }> = ({ comp }) => (
  <React.Suspense fallback={<ReactSuspenseLoading />}>{comp}</React.Suspense>
);

export { ReactSuspense };
