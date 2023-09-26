import {
  AboutInfoPage,
  AuthPage,
  CalculationPage,
  Category,
  ContactPage,
  Home,
  HomePage,
  NotFoundPage,
  Order,
  OrderPage,
  Portfolio,
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
    path: '/admin/order',
    element: <ReactSuspense comp={<Order />} />,
  },
  {
    path: '/admin/portfolio',
    element: <ReactSuspense comp={<Portfolio />} />,
  },
  { path: '*', element: <NotFoundPage /> },
];

const userRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '/service/:slugType/:slugService', element: <CalculationPage /> },
  { path: '/order', element: <OrderPage /> },
  { path: '/about', element: <AboutInfoPage /> },
  { path: '/portfolio', element: <PortfolioInfoPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export { adminRoutes, userRoutes };
