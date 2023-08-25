/* eslint-disable object-curly-newline */
import { ReactSuspense } from 'src/components/providers';
import { Home, HomePage, NotFoundPage, ServicePage } from 'src/components/screens';

const adminRoutes = [
  {
    path: '/admin',
    element: <ReactSuspense comp={<Home />} />,
  },
];

const userRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '*', element: <NotFoundPage /> },
];

export { adminRoutes, userRoutes };
