import {
  AboutInfoPage,
  AuthPage,
  CalculationPage,
  Category,
  ContactPage,
  Employee,
  Home,
  HomePage,
  NotFoundPage,
  Order,
  OrderInfo,
  OrderPage,
  Point,
  PointPage,
  Portfolio,
  PortfolioInfoPage,
  Profile,
  Service,
  ServicePage,
  Slider,
  Support,
  User,
} from 'src/components/screens';
import { ReactSuspense } from 'src/providers';

const adminRoutes = [
  {
    path: '/admin',
    element: <ReactSuspense comp={<Home />} />,
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
    path: '/admin/order/:id',
    element: <ReactSuspense comp={<OrderInfo />} />,
  },
  {
    path: '/admin/support',
    element: <ReactSuspense comp={<Support />} />,
  },
  {
    path: '/admin/portfolio',
    element: <ReactSuspense comp={<Portfolio />} />,
  },
  {
    path: '/admin/slider',
    element: <ReactSuspense comp={<Slider />} />,
  },
  {
    path: '/admin/point',
    element: <ReactSuspense comp={<Point />} />,
  },
  {
    path: '/admin/employee',
    element: <ReactSuspense comp={<Employee />} />,
  },
  {
    path: '/admin/user',
    element: <ReactSuspense comp={<User />} />,
  },
  {
    path: '/admin/profile',
    element: <ReactSuspense comp={<Profile />} />,
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
  { path: '/point', element: <PointPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export { adminRoutes, userRoutes };
