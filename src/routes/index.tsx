import { ReactSuspense } from 'src/components/providers';
import { Home, HomePage, ServicePage } from 'src/components/screens';

const adminRoutes = [
  {
    path: '/admin',
    element: <ReactSuspense comp={<Home />} />,
  },
];

const userRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/service', element: <ServicePage /> },
];

export { adminRoutes, userRoutes };
