import {
  AboutInfoPage,
  AuthPage,
  CalculationPage,
  Home,
  HomePage,
  NewsInfoPage,
  NewsPage,
  NotFoundPage,
  OrderPage,
  PortfolioInfoPage,
  ServicePage,
} from 'src/components/screens';
import { ReactSuspense } from 'src/providers';

const adminRoutes = [
  {
    path: '/admin',
    element: <ReactSuspense comp={<Home />} />,
  },
  { path: '*', element: <NotFoundPage /> },
];

const userRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '/service/:id', element: <CalculationPage /> },
  { path: '/order', element: <OrderPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/news/:id', element: <NewsInfoPage /> },
  { path: '/about', element: <AboutInfoPage /> },
  { path: '/portfolio', element: <PortfolioInfoPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export { adminRoutes, userRoutes };
