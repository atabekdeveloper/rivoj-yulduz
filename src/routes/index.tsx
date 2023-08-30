import {
  Home,
  HomePage,
  NewsInfoPage,
  NewsPage,
  NotFoundPage,
  ServicePage,
} from 'src/components/screens';
import { ReactSuspense } from 'src/providers';

const adminRoutes = [
  {
    path: '/admin',
    element: <ReactSuspense comp={<Home />} />,
  },
];

const userRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/news/:id', element: <NewsInfoPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export { adminRoutes, userRoutes };
