import {
  AboutInfoPage,
  AuthPage,
  CalculationPage,
  Category,
  DeliveryMethod,
  Home,
  HomePage,
  NewsInfoPage,
  NewsPage,
  NotFoundPage,
  OrderPage,
  PortfolioInfoPage,
  Service,
  ServicePage,
  Type,
} from 'src/components/screens';
import { ReactSuspense } from 'src/providers';

const adminRoutes = [
  {
    path: '/admin',
    element: <ReactSuspense comp={<Home />} />,
  },
  {
    path: '/admin/type',
    element: <ReactSuspense comp={<Type />} />,
  },
  {
    path: '/admin/category',
    element: <ReactSuspense comp={<Category />} />,
  },
  {
    path: '/admin/service',
    element: <ReactSuspense comp={<Service />} />,
  },
  {
    path: '/admin/delivery-method',
    element: <ReactSuspense comp={<DeliveryMethod />} />,
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
